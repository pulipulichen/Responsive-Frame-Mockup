<template>
  <div class="frame-phone-landscape frame" 
       v-bind:class="{'show-notification-bar': $parent.deviceDisplayNotificationBar}">

     <div class="frame-left-container">
       <img src="img/frames/phone-landscape/top2left.png" />
     </div>

     <div class="frame-image-background-container">
       <div class="frame-top">
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
       
       <div class="frame-bottom">
         <div class="frame-image-container">
           <img v-bind:src="$parent.imgSrc" class="frame-image" v-bind:class="{'is-landscape': $parent.imgIsLandscape}" />
         </div>
       </div>

     </div>

     <div class="frame-right-container">
       <img src="img/frames/phone-landscape/bottom2right.png" />
     </div>
   </div>
</template>

<script>module.exports = {}</script>
