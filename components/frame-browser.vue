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
          <td class="frame-image"><img v-bind:src="$parent.imgSrc" /></td>
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
