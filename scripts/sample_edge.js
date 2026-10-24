const sharp = require('sharp');
const imgPath = 'd:/zeon_web/zeon_release/public/hero_3d_composition.png';

sharp(imgPath)
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    console.log('Sampling left edge (x=0) of hero_3d_composition.png:');
    for (let y = 0; y < info.height; y += 70) {
      const idx = (y * info.width + 0) * info.channels;
      console.log('y=' + y + ': rgb(' + data[idx] + ', ' + data[idx+1] + ', ' + data[idx+2] + ')');
    }
  });
