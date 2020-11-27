<template>
  <div class="phone-responsive-frame frame" 
       v-bind:class="{'show-notification-bar': $parent.deviceDisplayNotificationBar}">

     <div class="frame-top-container">
       <img src="img/frames/phone-portrait/top.png" />
     </div>

     <div class="frame-image-background-container">
       <div class="frame-left">
         <div class="frame-image-container">
           <img v-bind:src="$parent.imgSrc" class="frame-image" v-bind:class="{'is-landscape': $parent.imgIsLandscape}" />
         </div>
       </div>
       <div class="frame-right">
         <div class="frame-image-container">
           <img v-bind:src="$parent.imgSrc" class="frame-image" v-bind:class="{'is-landscape': $parent.imgIsLandscape}" />
         </div>
       </div>

       <div class="frame-content">
         <device-notification-bar></device-notification-bar>

         <div class="frame-image-container">
           <img v-bind:src="$parent.imgSrc" class="frame-image" v-bind:class="{'is-landscape': $parent.imgIsLandscape}" />
         </div>
       </div>

     </div>

     <div class="frame-bottom-container">
       <img src="img/frames/phone-portrait/bottom.png" />
     </div>
   </div>
</template>

<script>module.exports = {}</script>
