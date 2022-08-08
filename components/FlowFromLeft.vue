<template>
  <span
    :class="[$style.container, status ? $style.fadeInLeft : '']"
  >
    <span :class="$style.text"><slot /></span>
  </span>
</template>

<script>

export default {
  props: {
    status: {
      required: true,
      type    : Boolean,
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.container {
  position: relative;
  display: block;
  width: 100%;
  transform: translate(-100%, 0);
  transition-duration: 2s;
  transition-timing-function: ease-in-out;
  overflow: hidden;

  .text {
    display: block;
    transform: translate(100%, 0);
    transition-duration: 2s;
    transition-timing-function: ease-in-out;
  }

  &.fadeInLeft {
    transform: translate(0, 0);

    .text {
      transform: translate(0, 0);
    }
  }
}
</style>
