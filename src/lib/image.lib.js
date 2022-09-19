const jimp = require("jimp");
const imageLib = () => {
  const pasteTextToImage = async (imageUrl, text) => {
    //REF: https://github.com/Vibrant-Colors/node-vibrant/issues/108
    // apparently the latest version of jimp doesn't work very well when compiled

    console.log("getting plugin");

    const jimpFont =
      "../../fonts/open-sans/open-sans-32-black/open-sans-32-black.fnt";

    const image = await (jimp.read
      ? jimp.read(imageUrl)
      : jimp.default.read(imageUrl));

    console.log("loading font");

    const loadedFont = await (jimp.loadFont
      ? jimp.loadFont(jimpFont)
      : jimp.default.loadFont(jimpFont));

    console.log("printing image");

    const printedImage = await image.print(loadedFont, 10, 90, text, 700, 100);

    console.log("image printed");

    return await printedImage.getBase64Async("image/jpeg");
  };

  return { pasteTextToImage };
};

module.exports = imageLib;
