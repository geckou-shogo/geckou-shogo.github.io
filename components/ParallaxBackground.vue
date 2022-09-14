<template>
  <div
    v-if="background"
    ref="parallaxBackground"
    v-inview:enter="() => {isMoveAnimation = true}"
    :class="$style.wrapper"
    :style="{
      left: screenStatus === 'landscape' ? `${positionX}px` : 'auto',
      bottom: screenStatus === 'portrait' ? `calc(${Math.max(positionY, 0)}px + 3rem)` : 'auto',
    }"
  >
    <div
      :class="$style.image"
      :style="{
        left: screenStatus === 'portrait' ? `calc((-${checkProgress}% / 2)` : 'auto',
      }"
    >
      <component
        :is="background"
        :class="isMoveAnimation ? $style.animation : ''"
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
    currentSection: {
      required: true,
      type    : String,
    },
    background: {
      required: true,
      type    : String,
    },
    positionX: {
      required: true,
      type    : Number,
    },
    positionY: {
      required: true,
      type    : Number,
    },
    screenStatus: {
      required: true,
      type    : String,
    },
    progress: {
      required: true,
      type    : Number,
    },
    sectionProgress: {
      required: true,
      type    : Number,
    },
  },
  data() {
    return {
      isMoveAnimation: false,
    }
  },
  computed: {
    checkProgress() {
      return Math.round((this.sectionProgress || 0) * 100)
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
    bottom  : v.$val * 4;
    height  : auto;
    width   : 100%;
    position: absolute;
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
  @include v.media('portrait') {
    svg {
      width: 200%;
    }
  }
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
