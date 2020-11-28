<template>
  <div class="browser-frame frame">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <td class="frame-left-top"></td>
          <td class="frame-top"></td>
          <td class="frame-right-top"></td>
        </tr>
      </tbody>
    </table>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <td class="frame-left">&nbsp;</td>
          <td class="frame-image"
              v-bind:style="{'background-color': $parent.deviceBackgroundColor}">
            <div class="frame-image-container"
                 v-bind:style="{width: $parent.imageResizeWidth}"
                 v-on:click="$parent.saveImage">
              <img v-bind:src="$parent.imgSrc" />
            </div>
            
            <div class="scrollbar horizontal container"
                 v-if="$parent.browserDisplayHorizontalScroll"
                 v-bind:class="{'vertical-scroll-visible': $parent.browserDisplayVerticalScroll}">
              <div class="scrollbar horizontal"></div>
            </div>
          </td>
          <td class="frame-vertical-scrollbar-container"
              v-if="$parent.browserDisplayVerticalScroll">
            <div class="scrollbar vertical container"
                 v-bind:style="{height: $parent.imageResizeHeight}">
              <div class="scrollbar vertical"
                   v-bind:style="{height: `calc(3 * ` + $parent.imageResizeHeight + ')'}"></div>
            </div>
          </td>
          <td class="frame-right">&nbsp;</td>
        </tr>
      </tbody>
    </table>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <td class="frame-left-bottom"></td>
          <td class="frame-bottom"></td>
          <td class="frame-right-bottom"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>module.exports = {}</script>
