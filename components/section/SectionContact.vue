<template>
  <div>
    <SectionContainer
      :section="section"
    >
      <h2>{{ section.name }}</h2>
    </SectionContainer>
  </div>
</template>

<script>
export default {
  name : 'SectionContact',
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

h2 {
  font-size: 100px;
  color    : c.$white;

  @include v.mq(md) {
    font-size: 40px;
  }
}
</style>
