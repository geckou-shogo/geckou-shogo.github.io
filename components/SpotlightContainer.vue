<template>
  <div
    v-inview:enter="() => {displayState = true}"
    :class="[$style.container, displayState ? $style.show : '']"
    :style="{
      animationDuration: `${calcRandomNumber(4, 7)}s`
    }"
  >
    <div
      v-if="$scopedSlots.heading"
      :class="$style.heading"
    >
      <slot
        name="heading"
      />
    </div>
    <div :class="$style.contents">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpotlightContainer',
  data() {
    return {
      displayState: false,
    }
  },
  methods: {
    calcRandomNumber(min, max) {
      return Math.floor(Math.random() * (max + 1 - min)) + min
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/color' as c;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/utility' as u;
@use '~/assets/scss/value' as v;

.container {
  position       : relative;
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  aspect-ratio   : 1 / 1;
  animation      : sway infinite;
  opacity        : 0;
  transition     : opacity 1s;
  white-space    : normal;
  text-shadow    : 2px 2px 2px c.$black;

  &::before {
    @include u.spotlight;
    content : '';
    position: absolute;
    top     : 0;
    left    : 0;
  }

  &.show {
    opacity: 1;
  }
}

.heading {
  display        : flex;
  align-items    : flex-end;
  justify-content: center;
  flex           : 0 0 50%;
  width          : 100%;
  padding-bottom : v.$val * 2;
  border-bottom  : 1px solid c.$border;
  font-size      : f.size('max');
  line-height    : 1;
}

.contents {
  flex : 1 0 50%;
  width: 100%;
}

@keyframes sway {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 2%);
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>
