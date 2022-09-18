const jimp = require("jimp");

const imageLib = () => {
  const pasteTextToImage = async (imageUrl, text) => {
    const image = await jimp.read(imageUrl);
    const loadedFont = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
    const printedImage = await image.print(loadedFont, 10, 90, text, 700, 100);
    return await printedImage.getBase64Async("image/jpeg");
  };

  return { pasteTextToImage };
};

module.exports = imageLib;
