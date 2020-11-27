<template>
  <div class="phone-frame frame" 
       v-bind:class="{'show-notification-bar': $parent.deviceDisplayNotificationBar}"
       v-on:click="$parent.saveImage">
    <div class="device-frame-container">
      <device-notification-bar></device-notification-bar>
      <div class="device-background"></div>
      <div class="device-frame"></div>
    </div>

    <div class="img-container">
      <img v-bind:src="$parent.imgSrc" v-bind:class="{'is-landscape': $parent.imgIsLandscape}" />
    </div>
  </div>
</template>

<script>module.exports = {}</script>
