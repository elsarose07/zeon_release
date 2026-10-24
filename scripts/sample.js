const sharp = require('sharp');
const imgPath = 'C:/Users/Elsa/.gemini/antigravity/brain/1c9e2bc5-005d-47e0-9549-3abcfd98f697/.user_uploaded/media_1792835990483.png';

sharp(imgPath)
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    for (let y = 0; y < info.height; y += 60) {
      const idx = (y * info.width + 200) * info.channels;
      console.log('y=' + y + ': rgb(' + data[idx] + ', ' + data[idx+1] + ', ' + data[idx+2] + ')');
    }
  });
