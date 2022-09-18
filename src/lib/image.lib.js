const Jimp = require("jimp");

const imageLib = () => {
  const pasteTextToImage = async (imageUrl, text) => {
      console.log("loading image into jimp");
      
      const jimp = Jimp();

      console.log("Jimp instance", jimp);
      console.log("Jimp read function", jimp.read);

    const image = await jimp.read(imageUrl);
    const loadedFont = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
    const printedImage = await image.print(loadedFont, 10, 90, text, 700, 100);
    return await printedImage.getBase64Async("image/jpeg");
  };

  return { pasteTextToImage };
};

module.exports = imageLib;
