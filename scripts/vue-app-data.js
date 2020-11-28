var appData = {
  //frameType: 'browser',
  //frameType: 'phone-landscape',
  //frameType: 'phone-portrait',
  frameType: 'tablet-portrait',
  frameTypeOptions: [
    { value: 'browser', label: 'Browser' },
    { value: 'phone-portrait', label: 'Phone (Portrait)' },
    { value: 'phone-landscape', label: 'Phone (Landscape)' },
    { value: 'tablet-portrait', label: 'Tablet (Portrait)' },
  ],
  //imgSrc: './img/127243823_1603359236539994_2606480545547760605_n.jpg',
  //imgSrc: './img/demo/demo-phone-portrait.jpg',
  //imgSrc: './img/demo/demo-phone-landscape.jpg',
  imgSrc: './img/demo/demo-browser.png',
  //imgSrc: './img/demo/reading.jpg',
  imgIsLandscape: null,
  imgWidth: 800,
  imgHeight: 600,
  browserImageScale: 1,
  deviceDisplayNotificationBar: true,
  deviceBackgroundColor: "#CCC",
  debug: {
    smaller: false,
    disableSave: false
  }
}