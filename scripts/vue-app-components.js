/* global Vue, httpVueLoader */

httpVueLoader.register(Vue, './components/device-notification-bar.vue');

var appComponents = {
  'app-menu': httpVueLoader('./components/app-menu.vue'),
  
  'frame-browser': httpVueLoader('./components/frame-browser.vue'),
  'frame-phone': httpVueLoader('./components/frame-phone.vue'),
  'frame-phone-portrait': httpVueLoader('./components/frame-phone-portrait.vue'),
  'frame-phone-landscape': httpVueLoader('./components/frame-phone-landscape.vue'),
  'frame-tablet-portrait': httpVueLoader('./components/frame-tablet-portrait.vue'),
}