<template>
  <div
    class="screen"
    :class="$style.screen"
  >
    <div
      v-for="section in sections"
      :key="section.idName"
      :class="[$style.screen_item, 'screen_item']"
      :style="{backgroundImage: section.color}"
    />
  </div>
</template>

<script>
export default {
  name : 'GradationBackground',
  props: {
    sections: {
      required: true,
      type    : Array,
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.screen {
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  &_item {
    width: 100%;
    height: 100vh;
  }
}

</style>
