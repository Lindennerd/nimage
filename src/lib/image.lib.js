const jimp = require("jimp");

const imageLib = () => {
  const pasteTextToImage = async (imageUrl, text) => {
    //REF: https://github.com/Vibrant-Colors/node-vibrant/issues/108
    // apparently the latest version of jimp doesn't work very well when compiled
    const jimpFont = jimp.FONT_SANS_32_BLACK
      ? jimp.FONT_SANS_32_BLACK
      : jimp.default.FONT_SANS_32_BLACK;

    const image = await (jimp.read
      ? jimp.read(imageUrl)
      : jimp.default.read(imageUrl));

    console.log("Jimp loadFont function", jimp.loadFont);

    const loadedFont = await (jimp.loadFont
      ? jimp.loadFont(jimpFont)
      : jimp.deafult.loadFont(jimpFont));

    const printedImage = await image.print(loadedFont, 10, 90, text, 700, 100);

    return await printedImage.getBase64Async("image/jpeg");
  };

  return { pasteTextToImage };
};

module.exports = imageLib;
