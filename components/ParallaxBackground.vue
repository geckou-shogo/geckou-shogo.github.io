<template>
  <div
    :class="[$style.wrapper, 'parallaxbackground']"
  >
    <div
      :class="[$style.image, 'parallax_image']"
    >
      <component
        :is="background"
        v-if="background"
        :class="[$style.svg_image, 'svg_image']"
        preserveAspectRatio="none"
      />
    </div>
  </div>
</template>

<script>
import BackgroundForest from '@/assets/img/svg/forest.svg'
import BackgroundTown from '@/assets/img/svg/town.svg'
import BackgroundBuilding from '@/assets/img/svg/building.svg'

export default {
  name      : 'ParallaxBackground',
  components: {
    BackgroundForest,
    BackgroundTown,
    BackgroundBuilding,
  },
  props: {
    background: {
      required: true,
      type    : String,
    },
  },
  mounted() {
    const elem = document.querySelector('.parallax_image')
    if (elem !== null) {
      const target = document.getElementsByClassName('svg_image')
      const parallaxConfig = {
        delay      : 0, // スクロール止めてから動く秒数
        orientation: 'up', // 動く方向
        scale      : 1.5, // 動く大きさ
      }
      new this.$simpleParallax(target, parallaxConfig)
    }
  },
}

</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.wrapper {
  position: absolute;
  width   : 100vw;
  height  : 100vh;
  top     : 0;
  left    : 0;
  mix-blend-mode: overlay;
  pointer-events:  none;
  overflow: hidden;
}

.image {
  position      : absolute;
  bottom        : 50%;
  left          : 0;
  width         : 100%;
  svg {
    fill        : c.$white;
  }
}
</style>
