<template>
  <div :class="$style.wrapper">
    <GlobalNavi />
    <Nuxt />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;

.wrapper {
  display         : flex;
  flex-direction  : column;
  min-height      : 100vh;
  padding-right   : v.$val * 7;
  background-color: c.$mainColor;
  color           : c.$white;

  @include v.mediaScreen( 'mobile' ) {
    padding-right: 0;
  }
}
</style>
