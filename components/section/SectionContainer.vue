<template>
  <section
    :class="$style.section"
  >
    <slot />
  </section>
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
  min-width      : 100vw;
  position       : relative;
  display        : flex;
  width          : 100%;
  height         : 100vh;
}
</style>
