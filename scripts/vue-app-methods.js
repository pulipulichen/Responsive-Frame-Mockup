/* global postMessageAPI, XLSX, GameMaster, appMethodsUI, appMethodsIV, appMethodsInit, appMethodsQuery, appMethodsUtils, appMethodsSearch, domtoimage */

var appMethods = {
  changeImage () {
    this.$refs.ImageFile.click()
  },
  saveImage () {
    if (this.debug.disableSave === true) {
      return false
    }
    
    let node = this.currentFrame

    domtoimage.toPng(node)
        .then((dataUrl) => {
            var link = document.createElement("a");
    
            link.download = this.frameType + '-' + (new Date()).mmddhhmm() + '.png';
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            delete link;
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
  },
  changeImageFile () {
    var files = this.$refs.ImageFile.files
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var imageType = /image.*/;

      if (!file.type.match(imageType)) {
        continue;
      }

      /*
      var img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      preview.appendChild(img);
      */
      
      var reader = new FileReader();
      reader.onload = (() => { 
        return (e) => { 
          let dataURI = e.target.result
          this.imgSrc = dataURI
        }; 
      })();
      reader.readAsDataURL(file);
    }
  },
  initCheckbox () {
    if (!this.$refs.AppMenu) {
      setTimeout(() => {
        this.initCheckbox ()
      }, 100)
      return false
    }
    
    $(this.$refs.AppMenu.$el).find('.ui.checkbox').checkbox()
  },
  updateImgSize () {
    
    setTimeout(() => {
      let img = this.$refs.ImageDetector
      
      let width = img.width
      let height = img.height
      this.imgIsLandscape = (width > height)
      this.imgWidth = width
      this.imgHeight = height
      
      console.log(width, height)
    }, 0)
    
  }
}