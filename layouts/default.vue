<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;

.wrapper {
  padding-right: 0;
  width: 100%;
  /* padding-right: v.$val * 7; */
  background-color: c.$mainColor;
  color: c.$white;
  @include v.mediaScreen('mobile') {
    padding-right: 0;
  }
}
</style>
