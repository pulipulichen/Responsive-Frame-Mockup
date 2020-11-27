<template>
  <div class="ui top fixed menu form">
    <div class="item">
      <img src="./img/favicon.png">
    </div>
    <a class="item select">
      <select v-model="$parent.frameType">
        <option value="browser">Browser</option>
        <!-- <option value="phone">Phone</option> -->
        <option value="phone-portrait">Phone (Portrait)</option>
        <option value="phone-landscape">Phone (Landscape)</option>
        <!--
        <option value="tablet-landscape">Tablet (Landscape)</option>
        <option value="tablet-portrait">Tablet (Portrait)</option>
        -->
        <option value="tablet-portrait">Tablet</option>
      </select>
    </a>
    <a class="item" v-on:click="$parent.changeImage">
      <i class="image icon"></i>
      Change Image
    </a>
    <a class="item" v-show="$parent.isDevice">
      <div class="inline field">
        <div class="ui toggle checkbox">
          <input type="checkbox" tabindex="0" class="hidden"
                 v-model="$parent.deviceDisplayNotificationBar">
          <label>Show Notification Bar</label>
        </div>
      </div>
    </a>
    <a class="item" v-show="$parent.isDevice">
      <div class="inline field">
        <input type="text" tabindex="0"
               v-model="$parent.deviceBackgroundColor"
               placeholder="Background Color">
      </div>
    </a>
    <a class="item" v-on:click="$parent.saveImage">
      <i class="download icon"></i>
      Download
    </a>
  </div>
</template>

<script>module.exports = {}</script>
