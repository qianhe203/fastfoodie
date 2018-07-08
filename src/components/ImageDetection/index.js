import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import RNTesseractOcr from 'react-native-tesseract-ocr';

class ImageDetection extends Component {
  state = { isLoading: false }

  detect() {
    this.setState({ isLoading: true });
    try {
      const sourceImage = await _getImage();
      this.setState({ sourceImage: sourceImage });
      const
    } catch (error) {

    }
    this.setState({ isLoading: false });
  }

   detectImage() {
     this.setState({ isLoading: true });
     ImagePicker.showImagePicker(options, (response) => {
       if (response.didCancel || response.error) {
         this.setState({ isLoading: false });
       } else {
         let source = (Platform.OS === 'android') ? { uri: response.uri, isStatic: true } : { uri: response.uri.replace('file://', ''), isStatic: true };
         this.setState({ imgSource: source }, this.doOcr(response.path));
       }
     });
   }

   doOcr(path) {
     RNTesseractOcr.recognize(path, 'LANG_ENGLISH', tessOptions)
       .then((result) => {
         this.setState({ isLoading: false, ocrResult: result });
         console.log('OCR Result: ', result);
       })
       .catch((err) => {
         console.log('OCR Error: ', err);
       })
       .done();
   }

   cancelOcr() {
     RNTesseractOcr.stop()
       .then((result) => {
         console.log('OCR Cancellation Result: ', result);
       })
       .catch((err) => {
         console.log('OCR Cancellation Error: ', err);
       })
       .done();
   }
}

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