<template>
  <div
    v-if="$store.state.screen === 'portrait'"
    :class="$style.portrait_background"
    :style="{backgroundPositionY: `${backgroundPositionY}%`}"
  />
</template>

<script>
export default {
  props: {
    progress: {
      required: true,
      type    : Number,
    },
  },
  data() {
    return {
      backgroundPositionY: 0,
    }
  },
  watch: {
    progress(newValue) {
      if (newValue > this.backgroundPositionY) this.backgroundPositionY = newValue
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;

.portrait_background {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-size : 100% 1400vh;
  background-image: c.$backgroundGradient;
}
</style>
