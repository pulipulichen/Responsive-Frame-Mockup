/* global postMessageAPI, XLSX, GameMaster, appMethodsUI, appMethodsIV, appMethodsInit, appMethodsQuery, appMethodsUtils, appMethodsSearch, domtoimage */

var appMethods = {
  changeImage () {
    this.$refs.ImageFile.click()
  },
  saveImage () {
    let node = this.currentFrame

    domtoimage.toPng(node)
        .then(function (dataUrl) {
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
    $(this.$refs.Menu).find('.ui.checkbox').checkbox()
  }
  /*
  initImageFileInput () {
    setTimeout(() => {
      const file = this.$refs.ImageFile
      //console.log(file)
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        // convert image file to base64 string
        let result = reader.result
        console.log(result)
      }, false);

      //if (file) {
        reader.readAsDataURL(file);
      //}
    }, 100)
  }
   */
}