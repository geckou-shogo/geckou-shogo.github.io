<template>
  <div
    :class="$style.logo"
  >
    <LogoSymbol
      :class="[$style.logo__symbol, animation ? $style.animation : '']"
      :color="animation ? 'white' : ''"
    />
    <LogoText
      :class="$style.logo__text"
      :hide="animation"
    />
  </div>
</template>

<script>
export default {
  name : 'GeckouLogo',
  props: {
    animation: {
      required: false,
      type    : Boolean,
      default : false,
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.logo {
  &__symbol {
    height    : 100%;
    opacity   : 1;
    transition: all 3s;

    &.animation {
      opacity: .05;
    }
  }

  &__text {
    height  : 100%;
    position: absolute;
    left    : 0;
  }
}
</style>
