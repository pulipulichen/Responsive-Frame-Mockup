<template>
  <div class="ui modal">
    <div class="header">Configuration</div>
    <div class="scrolling content">
      <div class="ui form">

        <div class="field">
          <label>Frame Type</label>
          <select v-model="$parent.frameType">
            <option 
              v-for="option in $parent.frameTypeOptions"
              v-bind:value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>

        <div class="field" >
          <label>Resize</label>
          <input type="range" 
                 v-model="$parent.browserImageScale"
                 min="0.3" max="1" step="0.1">
        </div>

        <div class="field" v-show="$parent.isDevice">
          <div class="ui toggle checkbox">
            <label>Show Notification Bar</label>
            <input type="checkbox" tabindex="0" class="hidden"
                   v-model="$parent.deviceDisplayNotificationBar">
          </div>
        </div>


        <div class="field">
          <label>Background Color</label>
          <input type="text" tabindex="0"
                 v-model="$parent.deviceBackgroundColor"
                 placeholder="#333">
        </div>
        
        <div class="field"
             v-show="$parent.isBrowser">
          <label>Scrollbar</label>
          <select v-model="$parent.browserScrollbarType">
            <option 
              v-for="option in $parent.browserScrollbarTypeOptions"
              v-bind:value="option.value">
                {{ option.label }}
            </option>
          </select>
        </div>
        
      </div>
      
      


    </div>
    <div class="actions">
      <div class="ui cancel button">Close</div>
    </div>
  </div>
</template>

<script>module.exports = {}</script>
