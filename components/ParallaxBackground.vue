<template>
  <div
    :class="$style.wrapper"
  >
    <div
      data-scroll
      data-scroll-speed="2"
      :class="$style.image"
    >
      <component
        :is="background"
        v-if="background"
        :class="$style.svg_image"
      />
    </div>
  </div>
</template>

<script>
import BackgroundForest from '@/assets/img/svg/forest.svg'
import BackgroundTown from '@/assets/img/svg/town.svg'
import BackgroundBuilding from '@/assets/img/svg/building.svg'

export default {
  name: 'ParallaxBackground',

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
}

</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.wrapper {
  width   : 100vw;
  height  : 100vh;
  position: absolute;
  top     : 0;
  left    : 0;
}

.image {
  position      : absolute;
  bottom        : 50%;
  left          : 0;
  width         : 150%;
  mix-blend-mode: overlay;

  > svg {
    fill: c.$white;
  }
}
</style>
