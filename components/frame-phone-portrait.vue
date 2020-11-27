<template>
  <div class="phone-responsive-frame frame" 
       v-bind:class="{'show-notification-bar': $parent.deviceDisplayNotificationBar}">

     <div class="frame-top-container">
       <img src="img/frames/phone-frame/top.png" />
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

         <div class="frame-image-container">
           <img v-bind:src="$parent.imgSrc" class="frame-image" v-bind:class="{'is-landscape': $parent.imgIsLandscape}" />
         </div>
       </div>

     </div>

     <div class="frame-bottom-container">
       <img src="img/frames/phone-frame/bottom.png" />
     </div>
   </div>
</template>

<script>module.exports = {}</script>
