<template>
  <div class="ui top fixed menu form app-menu">
    <div class="item">
      <img src="./img/favicon.png">
    </div>
    <a class="item input select-input">
      <select v-model="$parent.frameType">
        <option 
          v-for="option in $parent.frameTypeOptions"
          v-bind:value="option.value">
            {{ option.label }}
        </option>
      </select>
    </a>
    <a class="item large-screen" v-on:click="$parent.changeImage">
      <i class="image icon"></i>
      Change Image
    </a>
    
    <a class="item input large-screen" 
       v-show="$parent.isBrowser">
      <div class="inline field">
        <label>Resize</label>
        <input type="range" 
               v-model="$parent.browserImageScale"
               min="0.3" max="1" step="0.1">
      </div>
    </a>
    
    <!-- =============================== -->
    
    <a class="item large-screen" v-show="$parent.isDevice">
      <div class="inline field">
        <div class="ui toggle checkbox">
          <input type="checkbox" tabindex="0" class="hidden"
                 v-model="$parent.deviceDisplayNotificationBar">
          <label>Show Notification Bar</label>
        </div>
      </div>
    </a>
    
    <a class="item input large-screen">
      <div class="inline field">
        <input type="text" tabindex="0"
               v-model="$parent.deviceBackgroundColor"
               placeholder="Background Color">
      </div>
    </a>
    
    <!-- =============================== -->
    
    <a class="item large-screen" v-on:click="$parent.saveImage">
      <i class="download icon"></i>
      Download
    </a>
    
    <div class="right menu">
      <a class="item" v-on:click="$parent.changeImage">
        <i class="image icon"></i>
      </a>
      
      <a class="item" v-on:click="$parent.saveImage">
        <i class="download icon"></i>
      </a>
      <a class="item" v-on:click="$parent.openConfigModal">
        <i class="bars icon"></i>
      </a>
    </div>
  </div>
</template>

<script>module.exports = {}</script>
