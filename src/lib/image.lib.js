const jimp = require("jimp");

const imageLib = () => {
  const pasteTextToImage = async (imageUrl, text) => {
    console.log("loading image into jimp");
    const image = await jimp.read(imageUrl);
    console.log("loading fonts for jimp");
    const loadedFont = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
    console.log("printing text into image");

    const printedImage = await image.print(loadedFont, 10, 90, text, 700, 100);
    console.log("image printed successfully");
    return await printedImage.getBase64Async("image/jpeg");
  };

  return { pasteTextToImage };
};

module.exports = imageLib;
