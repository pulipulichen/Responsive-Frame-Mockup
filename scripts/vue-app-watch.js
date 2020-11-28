var appWatch = {
  imgSrc () {
    this.updateImgSize()
  },
  imgIsLandscape () {
    this.updateLandscapeFrameType()
  },
  browserScrollbarType () {
    if (this.browserScrollbarType === 'all') {
      this.browserDisplayVerticalScroll = true
      this.browserDisplayHorizontalScroll = true
    }
    else if (this.browserScrollbarType === 'vertical') {
      this.browserDisplayVerticalScroll = true
      this.browserDisplayHorizontalScroll = false
    }
    else if (this.browserScrollbarType === 'horizontal') {
      this.browserDisplayVerticalScroll = false
      this.browserDisplayHorizontalScroll = true
    }
  }
}