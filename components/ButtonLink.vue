<template>
  <div :class="$style.button_link">
    {{ text }}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.button_link {
  padding: v.$val * 3 v.$val * 12;
  background-color: c.$baseColor;
  border: 2px solid transparent;
  color: c.$mainColor;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  position: relative;
  transition: all 0.3s;

  @include v.mediaScreen('mobile') {
    width: 100%;
  }

  &:after {
    content: '';
    display: block;
    width: v.$val * 11;
    height: 2px;
    margin: auto;
    background-color: c.$mainColor;
    position: absolute;
    top: 0;
    right: -2px;
    bottom: 0;
    transition: all 0.3s;
  }

  &:hover {
    background-color: transparent;
    border-color: c.$baseColor;
    color: c.$baseColor;

    &:after {
      width: 0;
      background-color: c.$baseColor;
    }
  }
}
</style>
