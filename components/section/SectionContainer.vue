<template>
  <section
    :id="section.id"
    :class="$style.section"
    class="section"
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
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  position       : relative;
  display        : flex;
  width          : 100%;
  height         : 100vh;
  align-items    : center;
  justify-content: center;
  overflow       : hidden;
}
</style>
