<template>
  <div
    :class="$style.cursor"
    :style="[{ top: `${mouseY}px` }, { left: `${mouseX}px` }]"
  />
</template>

<script>
export default {
  data() {
    return {
      mouseX: -100,
      mouseY: -100,
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('mousemove', (e) => {
        this.mouseY = e.pageY
        this.mouseX = e.pageX
      })
    }
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;

.cursor {
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 0 0 v.$val * 5 v.$val * 8 rgba(c.$white, 0.5);
  mix-blend-mode: overlay;
  pointer-events: none;
  position: absolute;
  z-index: v.zIndex(max);
}
</style>
