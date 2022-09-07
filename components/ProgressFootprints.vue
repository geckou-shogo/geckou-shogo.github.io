<template>
  <div :class="$style.container">
    <Footprints
      v-for="n in footprintsNumber"
      :key="n"
      :class="[
        $style.footprints,
        isDisplayedFootprint(n) ? $style.show : '',
      ]"
    />
  </div>
</template>

<script>
import Footprints from '@/assets/images/svg/footprints.svg'

export default {
  name      : 'ProgressFootprints',
  components: {
    Footprints,
  },
  props: {
    sectionProgress: {
      required: true,
      type    : Number,
    },
    startProgress: {
      required: true,
      type    : Number,
    },
  },
  data() {
    return {
      footprintsNumber: 12,
    }
  },
  methods: {
    isDisplayedFootprint(n) {
      const count = (100 - this.startProgress) / this.footprintsNumber
      return this.startProgress + (count * n) <= this.sectionProgress
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.container {
  position      : absolute;
  top           : v.$val * 6.5;
  margin        : 0 6.2rem;
  display       : flex;
  pointer-events: none;
}

.footprints {
  width    : 5px;
  height   : 5px;
  opacity  : 0;
  transform: scale(-1, 1) rotate(-65deg);
  fill     : c.$white;

  &:nth-of-type(2n) {
    transform: rotate(112deg);
  }

  &.show {
    opacity: 1;
  }
}
</style>
