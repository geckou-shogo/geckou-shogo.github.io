<template>
  <div
    ref="parallaxBackground"
    v-inview:enter="() => {isMoveAnimation = true}"
    :class="$style.wrapper"
    :style="{
      left: screenStatus === 'landscape' ? `${positionX}px` : '0',
      bottom: screenStatus === 'landscape'
        ? `auto`
        : positionY
          ? '3rem'
          : `calc(${positionY} + 3rem)`,
      position: screenStatus === 'portrait' ? positionY ? 'fixed' : 'absolute' : 'fixed',
    }"
  >
    <div
      :class="$style.image"
      :style="{
        left: screenStatus === 'portrait' ? `-${sectionProgress}%` : 'auto',
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
    screenStatus() {
      return this.$store.state?.screen || ''
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
  }
}

.image {
  position     : absolute;
  bottom       : 50%;
  left         : 0;
  width        : 100%;
  --pass-length: 0;
  opacity      : .5;

  @include v.media('portrait') {
    width: 200%;
  }

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
