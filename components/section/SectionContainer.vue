<template>
  <div
    :class="$style.section"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name : 'SectionContainer',
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
  position       : relative;
  display        : flex;
  min-width      : 100vw;
  height         : 100vh;
}
</style>
