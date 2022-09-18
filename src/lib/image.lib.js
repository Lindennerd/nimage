const jimp = require("jimp");

const imageLib = () => {
  const pasteTextToImage = async (imageUrl, text) => {
    console.log("loading image into jimp");

    console.log("Jimp instance", jimp);
    console.log("Jimp read function", jimp.read);

    //REF: https://github.com/Vibrant-Colors/node-vibrant/issues/108
    // apparently the latest version of jimp doesn't work very well when compiled
    const jimpFont = jimp.FONT_SANS_32_BLACK
      ? jimp.FONT_SANS_32_BLACK
      : jimp.default.FONT_SANS_32_BLACK;

    const image = await (jimp.read
      ? jimp.read(imageUrl)
      : jimp.default.read(imageUrl));

    const loadedFont = await (jimp.loadFont
      ? jimp.loadFont(jimpFont)
      : jimp.loadFont(jimpFont));

    const printedImage = await image.print(loadedFont, 10, 90, text, 700, 100);

    return await printedImage.getBase64Async("image/jpeg");
  };

  return { pasteTextToImage };
};

module.exports = imageLib;
