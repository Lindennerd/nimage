const Jimp = require("jimp");

const imageLib = () => {
  const pasteTextToImage = async (imageUrl, text) => {
      console.log("loading image into jimp");
      
      console.log("Jimp instance", Jimp);
      console.log("Jimp read function", Jimp.read);

    const image = await Jimp.read(imageUrl);
    const loadedFont = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    const printedImage = await image.print(loadedFont, 10, 90, text, 700, 100);
    return await printedImage.getBase64Async("image/jpeg");
  };

  return { pasteTextToImage };
};

module.exports = imageLib;
