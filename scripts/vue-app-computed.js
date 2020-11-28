var appComputed = {
  currentFrame () {
    if (this.frameType === 'browser') {
      return this.$refs.BrowserFrame.$el
    }
    else if (this.frameType === 'phone') {
      return this.$refs.PhoneFrame.$el
    }
    else if (this.frameType === 'phone-portrait') {
      return this.$refs.PhonePortraitFrame.$el
    }
    else if (this.frameType === 'phone-landscape') {
      return this.$refs.PhoneLandscapeFrame.$el
    }
    else if (this.frameType === 'tablet-landscape') {
      return this.$refs.TabletLandscapeFrame.$el
    }
    else if (this.frameType === 'tablet-portrait') {
      return this.$refs.TabletPortraitFrame.$el
    }
  },
  isDevice () {
    return (this.frameType !== 'browser')
  },
  isTablet () {
    return (this.frameType === 'tablet-portrait' 
            || this.frameType === 'tablet-landscape')
  },
  isBrowser () {
    return (this.frameType === 'browser')
  },
  imageResizeWidth () {
    if (this.browserImageScale === 1) {
      return this.imgWidth + 'px'
    }
    
    return parseInt(this.browserImageScale * this.imgWidth, 10) + 'px'
  }
}
