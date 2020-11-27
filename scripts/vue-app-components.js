/* global Vue, httpVueLoader */

httpVueLoader.register(Vue, './components/device-notification-bar.vue');

var appComponents = {
  'frame-browser': httpVueLoader('./components/frame-browser.vue'),
  'frame-phone': httpVueLoader('./components/frame-phone.vue'),
  'frame-phone-portrait': httpVueLoader('./components/frame-phone-portrait.vue')
}