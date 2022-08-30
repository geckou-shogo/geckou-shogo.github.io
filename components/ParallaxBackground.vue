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
    })
  },
  methods: {
    pathCheckMethods() {
      document.addEventListener('DOMContentLoaded', function() {
        console.log(document.getElementById('forest').getTotalLength())
      })
    },
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
      stroke-dasharray   : 7712px;
    }
    &.animation {
      animation          : line_animation 10s ease-in-out;
      animation-fill-mode: both;
    }
  }
}

@keyframes line_animation {
  0% {
    stroke-dashoffset: 7712px;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
