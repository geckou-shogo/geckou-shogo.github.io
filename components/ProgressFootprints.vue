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
      const count = (100 - this.startProgress) / (this.footprintsNumber - 1)
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
  display    : flex;
  align-items: center;
  padding    : 0 v.$val;
}

.footprints {
  width     : 5px;
  height    : 5px;
  margin-top: 8px;
  opacity   : 0;
  transform : scale(-1, 1) rotate(-65deg);
  fill      : c.$white;

  &:nth-of-type(2n) {
    transform    : rotate(112deg);
    margin-top   : 0;
    margin-bottom: 8px;
    margin-right : 4px;
  }

  &.show {
    opacity: 1;
  }
}
</style>
