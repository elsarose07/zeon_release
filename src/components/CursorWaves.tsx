"use client";

import React, { useEffect, useRef } from "react";

export function CursorWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    interface Ripple {
      x: number;
      y: number;
      age: number;
      intensity: number;
    }
    const MAX_RIPPLES = 12;
    const ripples: Ripple[] = [];
    let lastX = -1;
    let lastY = -1;
    let lastTime = 0;
    let animId = 0;
    let isRunning = false;

    let gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform vec4 u_ripples[12];
      uniform int u_count;

      // Localized subtle wave displacement field strictly bounded to a local radius
      float getWaveHeight(vec2 uv) {
        float h = 0.0;
        float aspect = u_resolution.x / u_resolution.y;
        vec2 p = vec2(uv.x * aspect, uv.y);
        float speed = 0.20;
        float lambda = 0.036; // fine, natural ripple wavelength
        float maxRadius = 0.17; // bounded local radius around the cursor

        for (int i = 0; i < 12; i++) {
          if (i >= u_count) break;
          vec4 rip = u_ripples[i];
          if (rip.w <= 0.001) continue;

          vec2 c = vec2(rip.x * aspect, rip.y);
          float dist = length(p - c);

          // Strictly prevent waves from traveling across the whole screen
          if (dist > maxRadius) continue;

          float waveFront = rip.z * speed;
          float d = dist - waveFront;

          // 2 to 3 soft concentric ridges
          float span = lambda * 2.6;
          if (abs(d) < span && waveFront > 0.0) {
            float envelope = exp(-(d * d) / (2.0 * lambda * lambda));
            float wave = sin(d * (6.2831853 / lambda));
            // Gentle fade-out as wave approaches maxRadius boundary
            float distFade = smoothstep(maxRadius, maxRadius * 0.35, dist);
            float decay = exp(-rip.z * 2.4);
            h += wave * envelope * decay * distFade * rip.w;
          }
        }
        return h;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;

        // Finite difference to compute 3D surface slope
        vec2 step = vec2(1.5 / u_resolution.x, 1.5 / u_resolution.y);
        float hL = getWaveHeight(uv - vec2(step.x, 0.0));
        float hR = getWaveHeight(uv + vec2(step.x, 0.0));
        float hD = getWaveHeight(uv - vec2(0.0, step.y));
        float hU = getWaveHeight(uv + vec2(0.0, step.y));

        float dh_dx = (hR - hL) / (2.0 * step.x);
        float dh_dy = (hU - hD) / (2.0 * step.y);

        // Delicate, subtle displacement bump
        float bump = 0.075;
        vec3 normal = normalize(vec3(-dh_dx * bump, -dh_dy * bump, 1.0));

        // EXACT original CSS background gradient from page.tsx:
        // linear-gradient(160deg, #C6CAD0 0%, #BCC1C7 28%, #B4B9C0 60%, #ABB0B7 100%)
        vec3 c0 = vec3(198.0, 202.0, 208.0) / 255.0; // #C6CAD0
        vec3 c1 = vec3(188.0, 193.0, 199.0) / 255.0; // #BCC1C7
        vec3 c2 = vec3(180.0, 185.0, 192.0) / 255.0; // #B4B9C0
        vec3 c3 = vec3(171.0, 176.0, 183.0) / 255.0; // #ABB0B7

        // 160 deg linear gradient interpolation
        float t = clamp((uv.x * 0.92 + (1.0 - uv.y) * 0.38), 0.0, 1.0);
        vec3 baseColor;
        if (t < 0.28) {
          baseColor = mix(c0, c1, t / 0.28);
        } else if (t < 0.60) {
          baseColor = mix(c1, c2, (t - 0.28) / 0.32);
        } else {
          baseColor = mix(c2, c3, (t - 0.60) / 0.40);
        }

        // Retain original deep background tone with soft ambient warmth
        vec2 rPos1 = vec2(0.68, 1.0 - 0.42);
        vec2 rDelta1 = (uv - rPos1) / vec2(0.70, 0.65);
        float rDist1 = length(rDelta1);
        if (rDist1 < 0.68) {
          float rAlpha1 = (rDist1 < 0.38)
            ? mix(0.20, 0.06, rDist1 / 0.38)
            : mix(0.06, 0.0, (rDist1 - 0.38) / 0.30);
          baseColor = mix(baseColor, vec3(1.0), rAlpha1);
        }

        vec2 rPos2 = vec2(0.30, 1.0 - 0.18);
        vec2 rDelta2 = (uv - rPos2) / vec2(0.50, 0.40);
        float rDist2 = length(rDelta2);
        if (rDist2 < 0.65) {
          float rAlpha2 = mix(0.08, 0.0, rDist2 / 0.65);
          baseColor = mix(baseColor, vec3(1.0), rAlpha2);
        }

        // SUBTLE GREY-ON-GREY MONOCHROMATIC SHADING (NO ARTIFICIAL COLOR)
        vec3 lightDir = normalize(vec3(-0.60, 0.65, 0.70));
        float flatDot = lightDir.z;
        float nDotL = dot(normal, lightDir);
        float diffDelta = (nDotL - flatDot);

        // Gentle modulation strictly in the background grey tone
        float shade;
        if (diffDelta >= 0.0) {
          shade = diffDelta * 0.12; // subtle light grey crest
        } else {
          shade = diffDelta * 0.22; // subtle deeper grey trough
        }

        vec3 finalColor = clamp(baseColor + vec3(shade), 0.0, 1.0);
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const createShader = (type: number, src: string) => {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        gl.deleteShader(s);
        return null;
      }
      return s;
    };

    let program: WebGLProgram | null = null;
    let posBuffer: WebGLBuffer | null = null;
    let uRes: WebGLUniformLocation | null = null;
    let uCount: WebGLUniformLocation | null = null;
    let uRipples: WebGLUniformLocation | null = null;

    const initGL = () => {
      if (!gl) return;
      const vs = createShader(gl.VERTEX_SHADER, vsSource);
      const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
      if (!vs || !fs) return;

      program = gl.createProgram();
      if (!program) return;
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
      gl.useProgram(program);

      posBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW
      );

      const aPos = gl.getAttribLocation(program, "a_position");
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      uRes = gl.getUniformLocation(program, "u_resolution");
      uCount = gl.getUniformLocation(program, "u_count");
      uRipples = gl.getUniformLocation(program, "u_ripples");

      handleResize();
      drawSingleFrame();
    };

    const handleResize = () => {
      if (!gl) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      drawSingleFrame();
    };

    const drawSingleFrame = () => {
      if (!gl || !program) return;
      const flatRipples = new Float32Array(MAX_RIPPLES * 4);
      for (let i = 0; i < ripples.length && i < MAX_RIPPLES; i++) {
        const base = i * 4;
        flatRipples[base] = ripples[i].x;
        flatRipples[base + 1] = ripples[i].y;
        flatRipples[base + 2] = ripples[i].age;
        flatRipples[base + 3] = ripples[i].intensity;
      }
      gl.useProgram(program);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1i(uCount, ripples.length);
      gl.uniform4fv(uRipples, flatRipples);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    let prevTs = performance.now();
    const render = (ts: number) => {
      const dt = Math.min((ts - prevTs) / 1000, 0.05);
      prevTs = ts;

      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].age += dt;
        if (ripples[i].age > 1.3) {
          ripples.splice(i, 1);
        }
      }

      drawSingleFrame();

      if (ripples.length > 0) {
        animId = requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    };

    const triggerLoop = () => {
      if (!isRunning) {
        isRunning = true;
        prevTs = performance.now();
        animId = requestAnimationFrame(render);
      }
    };

    const addRipple = (clientX: number, clientY: number, intensity = 0.7) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (clientX - rect.left) / rect.width;
      const ny = 1.0 - (clientY - rect.top) / rect.height;
      if (nx < 0 || nx > 1 || ny < 0 || ny > 1) return;

      if (ripples.length >= MAX_RIPPLES) {
        ripples.shift();
      }
      ripples.push({ x: nx, y: ny, age: 0.0, intensity });
      triggerLoop();
    };

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distSq = dx * dx + dy * dy;

      if (distSq > 120 || (now - lastTime > 85 && distSq > 20)) {
        addRipple(e.clientX, e.clientY, 0.65);
        lastX = e.clientX;
        lastY = e.clientY;
        lastTime = now;
      }
    };

    const onClick = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY, 1.0);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const now = performance.now();
        const dx = touch.clientX - lastX;
        const dy = touch.clientY - lastY;
        const distSq = dx * dx + dy * dy;

        if (distSq > 100 || (now - lastTime > 90 && distSq > 16)) {
          addRipple(touch.clientX, touch.clientY, 0.7);
          lastX = touch.clientX;
          lastY = touch.clientY;
          lastTime = now;
        }
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        addRipple(touch.clientX, touch.clientY, 0.85);
        lastX = touch.clientX;
        lastY = touch.clientY;
        lastTime = performance.now();
      }
    };

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(animId);
      isRunning = false;
    };

    const handleContextRestored = () => {
      gl =
        canvas.getContext("webgl") ||
        (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
      initGL();
    };

    initGL();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onClick, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    canvas.addEventListener("webglcontextlost", handleContextLost);
    canvas.addEventListener("webglcontextrestored", handleContextRestored);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      style={{
        background: `
          radial-gradient(ellipse 70% 65% at 68% 42%, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.12) 38%, transparent 68%),
          radial-gradient(ellipse 50% 40% at 30% 18%, rgba(255,255,255,0.18) 0%, transparent 65%),
          linear-gradient(160deg, #C6CAD0 0%, #BCC1C7 28%, #B4B9C0 60%, #ABB0B7 100%)
        `,
      }}
    />
  );
}
