var appWatch = {
  imgSrc () {
    setTimeout(() => {
      let img = this.$refs.ImageDetector
      
      let width = img.width
      let height = img.height
      this.imgIsLandscape = (width > height)
    }, 0)
  }
}