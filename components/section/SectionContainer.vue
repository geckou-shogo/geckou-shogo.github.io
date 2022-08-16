<template>
  <section
    :class="$style.section"
  >
    <SectionHeader
      v-if="section.idName !== 'top'"
      :idName="section.idName"
      :heading="section.name"
      :transparent="section.idName === 'contact'"
    />
    <component
      :is="section.component"
      :section="section"
    />
  </section>
</template>

<script>
export default {
  name : 'SectionContainer',
  props: {
    section: {
      required: true,
      type    : Object,
      default : () => { },
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.section {
  position  : relative;
  display   : flex;
  min-width : 100vw;
  height    : 100vh;
  background-image: linear-gradient(to bottom, rgba(25, 44, 56, 1)3%, rgba(11, 25, 38, 1)6.6%,rgba(10, 29, 40, 1), 9% rgba(10, 29, 40, 1) 12% rgba(25, 44, 56, 1) 15% rgba(21, 50, 79, 1));
}
</style>
