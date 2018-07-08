import RNTesseractOcr from 'react-native-tesseract-ocr';

/**
 * @param {string} imgPath - The path of the image.
 * @param {string} lang - The language you want to process.
 * @param {object} tessOptions - Tesseract options.
 */
 const tessOptions = {
  whitelist: null,
  blacklist: '1234567890\'!"#$%&/()={}[]+*-_:;<>'
};
RNTesseractOcr.recognize(imgPath, lang, tessOptions)
  .then((result) => {
    this.setState({ ocrResult: result });
    console.log("OCR Result: ", result);
  })
  .catch((err) => {
    console.log("OCR Error: ", err);
  })
  .done();