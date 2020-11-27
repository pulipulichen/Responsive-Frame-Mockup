var appComputed = {
  currentFrame () {
    if (this.frameType === 'browser') {
      return this.$refs.BrowserFrame
    }
    else if (this.frameType === 'phone') {
      return this.$refs.PhoneFrame
    }
    else if (this.frameType === 'tablet-landscape') {
      return this.$refs.TabletLandscapeFrame
    }
    else if (this.frameType === 'tablet-portrait') {
      return this.$refs.TabletPortraitFrame
    }
  },
  isDevice () {
    return (this.frameType !== 'browser')
  }
}
