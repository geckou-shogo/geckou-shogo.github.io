<template>
  <div
    :class="$style.cursor"
    :style="[{ top: `calc(${mouseY}px - 100vh)` }, { left: `calc(${mouseX}px - 100vh)` }]"
  />
</template>

<script>
export default {
  name: 'CursorEffect',
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    }
  },
  mounted() {
    window.addEventListener('mousemove', e => {
      this.mouseY = e.pageY
      this.mouseX = e.pageX
    })
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;

.cursor {
  width           : 200vw;
  height          : 200vh;
  border-radius   : 50%;
  background-image: radial-gradient(rgba(c.$white, .2) 0%, rgba(c.$white, 0) 50%, rgba(c.$white, 0) 100%,);
  mix-blend-mode  : overlay;
  pointer-events  : none;
  position        : absolute;
  z-index         : v.zIndex(max);
}
</style>
