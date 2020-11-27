<template>
  <div class="phone-frame frame" 
       v-bind:class="{'show-notification-bar': $parent.deviceDisplayNotificationBar}">
    <div class="device-frame-container">
      <div class="device-notification">
        <div class="left time">
          09:00
        </div>
        <div class="right battery">
          <i class="wifi icon"></i>
          <i class="signal icon"></i>
          100%
        </div>
      </div>
      <div class="device-background"></div>
      <div class="device-frame"></div>
    </div>

    <div class="img-container">
      <img v-bind:src="$parent.imgSrc" v-bind:class="{'is-landscape': $parent.imgIsLandscape}" />
    </div>
  </div>
</template>

<script>module.exports = {}</script>
