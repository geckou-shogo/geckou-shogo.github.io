<template>
  <div
    :class="[$style.container, isDisplay ? $style.fadeInLeft : '']"
  >
    <span>
      <slot />
    </span>
  </div>
</template>

<script>

export default {
  props: {
    isDisplay: {
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
  position                  : relative;
  width                     : 100%;
  transform                 : translate(-100%, 0);
  transition-duration       : 2s;
  transition-timing-function: ease-in-out;
  overflow                  : hidden;

  > span {
    display                   : block;
    transform                 : translate(100%, 0);
    transition-duration       : 2s;
    transition-timing-function: ease-in-out;
  }

  &.fadeInLeft {
    transform: translate(0, 0);

    > span {
      transform: translate(0, 0);
    }
  }
}
</style>
