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
        :class="animation ? $style.animation : ''"
      />
    </div>
  </div>
</template>

<script>
import BackgroundForest from '@/assets/images/svg/forest.svg'
import BackgroundTown from '@/assets/images/svg/town.svg'
import BackgroundBuilding from '@/assets/images/svg/building.svg'

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
    animation: {
      required: false,
      type    : Boolean,
      default : false,
    },
  },
  mounted() {
    this.$nextTick(() => {
      const pathLength = document.querySelector('.forest_svg__path').getTotalLength()
      console.log(pathLength)
      const forest = document.querySelector('.forest_svg__path')
      forest.style.setProperty('--pass', '7712' + 'px')
    })
  },

}

</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.wrapper {
  width         : 120vw;
  height        : 100vh;
  mix-blend-mode: soft-light;
  pointer-events: none;
  --pass             : 0;
}

.image {
  position: absolute;
  bottom  : 50%;
  left    : 0;
  width   : 100%;

  svg {
    path{
      fill               : none;
      stroke-linejoin    : round;
      stroke             : c.$white;
      stroke-width       : 1px;
      stroke-dasharray   : var(--pass);
    }
    &.animation {
      animation          : line_animation 10s ease-in-out;
      animation-fill-mode: both;
    }
  }
}

@keyframes line_animation {
  0% {
    stroke-dashoffset: var(--pass);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
