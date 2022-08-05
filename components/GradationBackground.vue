<template>
  <div
    class="screen"
    :class="$style.screen"
  >
    <div
      v-for="item in sectionDatas"
      :key="item.id"
      :class="[$style.screen_item, 'screen_item']"
      :style="{backgroundImage: item.color}"
    />
  </div>
</template>

<script>
export default {
  props: {
    sectionDatas: {
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
