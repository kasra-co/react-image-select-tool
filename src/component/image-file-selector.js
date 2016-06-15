import regeneratorRuntime from "babel-runtime/regenerator";
import React from "react";
import ReactDOM from "react-dom";
import base64ImageFile from "../util/base64-image-file";

export default class ImageFileSelector extends React.Component {
  static propTypes = {
    onSelect: React.PropTypes.func.isRequired,
    onError: React.PropTypes.func,
    onInvalidImage: React.PropTypes.func
  }

  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove() {
    ReactDOM.findDOMNode(this.refs.input).value = "";
  }

  onSelect(event) {
    if (!event.target.files.length) {
      // User cancelled file upload
      this.onRemove();
      return;
    }

    let file = event.target.files[0];
    const { onInvalidImage } = this.props;

    if (!file.type.match(/^image\//)) {
      this.onRemove();
      return onInvalidImage(`${this.props.notImage || "Not an Image"}`)
    }
    if (file.size > this.props.maxImageFileSize) { //made changes to use props maxfileSize
      this.onRemove();
      return onInvalidImage(`${this.props.imageTooLarge || "Image is too large"}`)
    }
    this.selectImage(file);
  }

  render() {
    return (<div className="fileUpload">
      <input type="file"
      className="imageUpload"
      onChange={this.onSelect}
      ref="input" />
      </div>
    );
  }
  onRemoveImage() {
		this.setState({image: null});
		this.props.onRemoveImage();
	}

  onErrorImageLoading(error) {
    this.setState({
      original: null,
      cropping: false,
      loading: false,
      urlsReceived: false
    });
    this.onRemoveImage();
  }

  async selectImage(imageFile) {
  	if(this.props.minSize) {
	    var [minWidth, minHeight] = this.props.minSize; //pass props size
  	}
    const { onInvalidImage } = this.props;
    const image = new Image();
    const imageBase = await base64ImageFile(imageFile);
    image.src = imageBase;

    image.onload = async() => {
      try {
        if (image.width < (minWidth || 0) * 0.995 || image.height < (minHeight || 0) * 0.995 && onInvalidImage) {
          return onInvalidImage(`${this.props.imageTooSmall || "Image is too small"} ${minWidth} x ${minHeight}`); //pass error
        }
		    this.props.onSelect(imageBase, imageFile);
      } catch (error) {
        this.onErrorImageLoading(error);
      }
    };

  }

}
