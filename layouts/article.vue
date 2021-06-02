<template>
  <div :class="$style.wrapper">
    <GlobalNavi />
    <div :class="$style.container">
      <article :class="$style.article">
        <Nuxt />
      </article>
      <GlobalFooter />
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/color' as c;
@use '~/assets/scss/value' as v;

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

.container {
  display         : flex;
  flex-direction  : column;
  min-height      : 100vh;
  background-color: c.$baseColor;
  color           : c.$black;
  position        : relative;
  z-index         : v.zIndex('contents');
}

.article {
  flex     : 1 0 auto;
  width    : 100%;
  max-width: v.$desktopScreenSize;
  margin   : auto;
}
</style>
