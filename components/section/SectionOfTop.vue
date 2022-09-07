<template>
  <div
    :class="$style.section"
  >
    <GeckouLogo />
  </div>
</template>

<script>
export default {
  name : 'SectionTop',
  props: {
    section: {
      required: true,
      type    : Object,
      default : () => {},
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.section {
  display        : flex;
  width          : 100vw;
  justify-content: center;
  @include v.media ('portrait') {
    width: 100%;
  }
}
</style>
