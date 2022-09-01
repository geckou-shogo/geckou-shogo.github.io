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
import BackgroundCity from '@/assets/images/svg/city.svg'

export default {
  name      : 'ParallaxBackground',
  components: {
    BackgroundForest,
    BackgroundTown,
    BackgroundCity,
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
      const pathElement = document.querySelector(`[data-svg="${this.background}"]`)
      const pathLength  = pathElement.getTotalLength()
      pathElement.style.setProperty('--pass-length', `${pathLength}px`)
    })
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;

.wrapper {
  width         : 120vw;
  height        : 100vh;
  mix-blend-mode: soft-light;
  pointer-events: none;
  --pass-length : 0;
}

.image {
  position: absolute;
  bottom  : 50%;
  left    : 0;
  width   : 100%;

  svg {
    path {
      fill               : none;
      stroke-linejoin    : round;
      stroke             : c.$white;
      stroke-width       : 1px;
      stroke-dasharray   : var(--pass-length);
      animation-fill-mode: both;
    }

    &.animation {
      path {
        animation: draw_line 10s;
      }
    }
  }
}

@keyframes draw_line {
  from {
    stroke-dashoffset: var(--pass-length);
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
