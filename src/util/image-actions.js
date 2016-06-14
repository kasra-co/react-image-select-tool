import alt from "../alt";

class ImageActions {
	constructor() {
		this.generateActions("imageUploadStart", "imageUploadEnd", "failImageUpload");
	}
}

export default alt.createActions(ImageActions);
