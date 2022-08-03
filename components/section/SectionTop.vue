<template>
  <SectionContainer
    :section="section"
  >
    <GeckouLogo />
  </SectionContainer>
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
</style>
