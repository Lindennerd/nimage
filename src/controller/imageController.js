const imageLib = require('../lib/image.lib');

const validateURL = (url) => {
    const re = RegExp(/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/);
    return re.test(url);
}


module.exports = {
    async getImage(req, res, next) {
        const { imageUrl, text } = req.params;
        console.log("Request Received!");
        console.log("ImageUrl", imageUrl);
        console.log("Text", text);

        if ((!validateURL(imageUrl) || !imageUrl )|| !text) res.status(400).send('Invalid params');
        else {
            console.log("Request validated");
            const image = await imageLib().pasteTextToImage(imageUrl, text);
            res.send(image);
        }
    }
};