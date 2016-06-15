# react-image-select-tool
A react component for selecting images.
This component returns a base64 Image.

![Deps](https://img.shields.io/badge/dependencies-up--to--date-green.svg)



##Usage

```

import ImageFileSelector from "react-image-select-component";

<ImageFileSelector
    ref="imageFileSelector"
    onSelect={this.selectImage} //required
    onRemoveImage={this.onRemoveImage}
    onInvalidImage={this.onInvalidImage}  //required
    maxImageFileSize={this.maxImageFileSize}
    notImage={labels.errors.notImage}
    imageTooLarge={labels.errors.imageTooLarge}
    imageTooSmall={labels.errors.imageTooSmall}
    minSize={this.props.size}/>

```

###Props
```onSelect(function)``` - This receives the file selected(basically an object with the filename, date...) and it returns a base64 image and the file object it self.
```
For example
 async selectImage(imageBase64, imageFile) {
    //imageBase64 - base64 file
    //imageFile - Object of file selected
 }
```

```onInvalidImage(function)``` - If an error occures, it recives the error message and sends it back
```
For example
  onInvalidImage(error) {
		//display error message
	}
```

```notImage, imageTooLarge, && imageTooSmall (string)``` - These are props containing error messages error messages
```
 For example
	notImage: 'Please upload an image',
	imageTooLarge: 'This image is too large',
	imageTooSmall: 'This image is smaller than the required file image pixel size"
```
