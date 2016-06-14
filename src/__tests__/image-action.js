import sinon from "sinon";
import alt from "../alt";

describe("ImageActions", () => {

  beforeEach(function () {
    this.dispatcherSpy = sinon.spy(alt.dispatcher, 'dispatch');
  });

  afterEach( () => {
    alt.dispatcher.dispatch.restore();
  });


  it ("calls uploadStart action, when upload begins");
  it ("calls uploadEnd action, when upload ends");
  it ("calls failUpload action, on upload failure");
  it ("displays error notification on failUpload");
});
