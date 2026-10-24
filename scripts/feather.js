const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImage() {
  const inputPath = path.join(__dirname, '..', 'public', 'hero_3d_composition.png');
  const outputPath = path.join(__dirname, '..', 'public', 'hero_3d_composition_feathered.png');
  
  const img = sharp(inputPath);
  const { width, height } = await img.metadata();
  
  // Create an alpha mask buffer (width x height) where edges smoothly fade to 0
  const alphaBuffer = Buffer.alloc(width * height);
  const fadeLeft = 24;
  const fadeRight = 24;
  const fadeTop = 20;
  const fadeBottom = 24;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let alpha = 255;
      
      if (x < fadeLeft) {
        alpha = Math.min(alpha, Math.round((x / fadeLeft) * 255));
      } else if (x > width - fadeRight) {
        alpha = Math.min(alpha, Math.round(((width - x) / fadeRight) * 255));
      }
      
      if (y < fadeTop) {
        alpha = Math.min(alpha, Math.round((y / fadeTop) * 255));
      } else if (y > height - fadeBottom) {
        alpha = Math.min(alpha, Math.round(((height - y) / fadeBottom) * 255));
      }
      
      alphaBuffer[y * width + x] = alpha;
    }
  }
  
  // Create mask image
  const mask = await sharp(alphaBuffer, {
    raw: { width, height, channels: 1 }
  }).toBuffer();
  
  // Extract RGB channels from image and ensure transparency
  const { data: rawRgb, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
    
  // Combine alpha mask
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const maskVal = alphaBuffer[y * width + x];
      rawRgb[idx + 3] = Math.round((rawRgb[idx + 3] * maskVal) / 255);
    }
  }
  
  await sharp(rawRgb, {
    raw: { width, height, channels: 4 }
  })
  .png({ compressionLevel: 9 })
  .toFile(outputPath);
  
  console.log('Feathered image successfully created at:', outputPath);
}

processImage().catch(console.error);
