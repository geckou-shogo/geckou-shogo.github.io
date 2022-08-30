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
    this.pathCheckMethods()
  },
  methods: {
    pathCheckMethods() {
      document.addEventListener('DOMContentLoaded', function() {
        console.log(document.querySelector('.forest_svg__cls-1').getTotalLength())
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
    fill: c.$white;
  }
}

.animation.forest_svg__cls-1 {
  animation: forest 8s ease-in forwards;
}

@keyframes forest {
  0% {
    stroke-dashoffset: 7712px;
  }
  100% {
    stroke-dashoffset:0px;
  }
}

</style>

<style lang="scss">
.forest_svg__cls-1 {
  stroke-dasharray:  7712px;
}

</style>
