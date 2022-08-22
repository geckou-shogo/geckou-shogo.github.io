<template>
  <div
    data-scroll
    data-scroll-speed="1"
  >
    <component
      :is="background"
      v-if="background"
      :class="$style.svg"
    />
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

/* .svg {
  position: absolute;
  top: 0;
  left: 0;
} */
</style>
