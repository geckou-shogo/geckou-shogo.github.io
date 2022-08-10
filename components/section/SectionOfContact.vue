<template>
  <div
    :class="$style.section"
  />
</template>

<script>
export default {
  name : 'SectionContact',
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

.contact_header.transparent {
  background-color: transparent;
}
</style>
