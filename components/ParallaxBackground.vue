<template>
  <div
    v-show="screenStatus === 'landscape' ? currentSection : currentSection !== 'top' "
    :class="$style.wrapper"
    :style="{
      left: screenStatus === 'landscape' ? `${positionX}px` : 'auto',
    }"
  >
    <div>
      <div
        :class="$style.image"
      >
        <component
          :is="background"
          v-if="background"
          :class="animation ? $style.animation : ''"
        />
      </div>
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
    section: {
      required: true,
      type    : Object,
    },
    currentSection: {
      required: true,
      type    : String,
    },
    background: {
      required: true,
      type    : String,
    },
    animation: {
      required: false,
      type    : Boolean,
      default : false,
    },
    positionX: {
      required: true,
      type    : Number,
    },
    screenStatus: {
      required: true,
      type    : String,
    },
  },
  mounted() {
    this.$nextTick(() => {
      const pathElement = document.querySelector(`[data-svg="${this.background}"]`)
      const pathLength  = pathElement?.getTotalLength() || 0
      if (pathElement) pathElement.style.setProperty('--pass-length', `${pathLength}px`)
    })
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;

.wrapper {
  width         : 115vw;
  height        : 100vh;
  margin        : 0;
  mix-blend-mode: soft-light;
  pointer-events: none;
  position      : fixed;

  @include v.media('portrait') {
    bottom: 0;
    width: 100%;
  }
}

.image {
  position     : absolute;
  bottom       : 50%;
  left         : 0;
  width        : 100%;
  --pass-length: 0;
  opacity      : .5;

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
        animation: draw_line 3s linear;
      }
    }
  }

  /* @include v.media('portrait') {
    svg {
      opacity: 0;
    }

    svg {
      &.animation {
        opacity: 1;
      }
    }
  } */
}

@keyframes draw_line {
  0% {
    stroke-dashoffset: var(--pass-length);
  }

  100% {
    stroke-dashoffset: 0;
  }
}
</style>
