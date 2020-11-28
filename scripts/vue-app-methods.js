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
    $(node).addClass('save-style')
    
    domtoimage.toPng(node)
        .then((dataUrl) => {
            var link = document.createElement("a");
    
            link.download = this.frameType + '-' + (new Date()).mmddhhmm() + '.png';
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            delete link;
            
            $(node).removeClass('save-style')
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
            alert('oops, something went wrong!', error);
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
          
          // 自動判斷方向
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
    
    $(this.$el).find('.ui.checkbox').checkbox()
  },
  updateImgSize () {
    
    setTimeout(() => {
      let img = this.$refs.ImageDetector
      
      let width = img.width
      let height = img.height
      this.imgIsLandscape = (width > height)
      this.imgWidth = width
      this.imgHeight = height
      this.updateLandscapeFrameType()
      //console.log(width, height)
    }, 0)
    
  },
  openConfigModal () {
    $(this.$refs.AppMenuConfig.$el).modal('show')
  },
  updateLandscapeFrameType () {
    console.log(this.frameType, this.imgIsLandscape)
    if (this.imgIsLandscape === null) {
      return false
    }
    
    if (this.frameType.startsWith('phone-')) {
      if (this.imgIsLandscape === true) {
        this.frameType = 'phone-landscape'
      }
      else {
        this.frameType = 'phone-portrait'
      }
    }
    else if (this.frameType.startsWith('tablet-')) {
      if (this.imgIsLandscape === true) {
        this.frameType = 'tablet-landscape'
      }
      else {
        this.frameType = 'tablet-portrait'
      }
    }
  },
  /**
   * https://superuser.com/a/1585452
   */
  resetScrollbarStyle () {
    for (var sheetI = 0; sheetI < document.styleSheets.length; ++sheetI) {
        var sheet = document.styleSheets[sheetI];
        try {
            var ruleSet = sheet.rules || sheet.cssRules;
            for (var i = 0; i < ruleSet.length; ++i) {
                var rule = ruleSet[i];
                if (/scrollbar/.test(rule.selectorText)) {
                    sheet.deleteRule(i--);
                }
            }
        } catch (e) {
            console.warn("Can't read the css rules of: " + sheet.href, e);
        }
    };
  }
}