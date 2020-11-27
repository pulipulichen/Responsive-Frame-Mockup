/* global postMessageAPI, GameMaster */

var appMount = async function () {
  //this.initImageFileInput()
  this.initCheckbox()
  
  setTimeout(() => {
    this.updateImgSize()
  }, 100)
}