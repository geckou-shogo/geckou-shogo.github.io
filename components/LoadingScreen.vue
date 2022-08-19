<template>
  <div
    :class="[$style.loading, displayState ? '' : $style.hide]"
  >
    <div
      :class="$style.loading_box"
    >
      <span :class="[$style.l_1, $style.letter]">L</span>
      <span :class="[$style.l_2, $style.letter]">o</span>
      <span :class="[$style.l_3, $style.letter]">a</span>
      <span :class="[$style.l_4, $style.letter]">d</span>
      <span :class="[$style.l_5, $style.letter]">i</span>
      <span :class="[$style.l_6, $style.letter]">n</span>
      <span :class="[$style.l_7, $style.letter]">g</span>
      <span :class="[$style.l_8, $style.letter]">.</span>
      <span :class="[$style.l_9, $style.letter]">.</span>
      <span :class="[$style.l_10, $style.letter]">.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: {
    initialized: {
      type   : Boolean,
      default: true,
    },
    displayTime: {
      type   : Number,
      default: 1000,
    },
  },
  data() {
    return {
      displayState: true,
    }
  },
  mounted() {
    if (this.initialized) {
      setTimeout(() => {
        this.displayState = false
      }, this.displayTime)
    }
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.loading {
  position        : fixed;
  display         : flex;
  width           : 100vw;
  height          : 100vh;
  align-items     : center;
  justify-content : center;
  background-color: c.$white;
  z-index         : v.zIndex('loading');
  transition      : all 1s;

  &_box {
    margin         : auto;
    padding        : 1rem;
    display        : flex;
    align-items    : center;
    justify-content: center;
    gap            : 0 v.$val * 5;

    .letter {
      font-size                : f.size('larger');
      font-weight              : f.weight('bold');
      color                    : c.$blue;
      animation-name           : loading;
      animation-duration       : 1.6s;
      animation-iteration-count: infinite;
      animation-direction      : linear;
    }
  }

  &.hide {
    opacity   : 0;
    visibility: hidden;
    z-index   : v.zIndex('off');
  }
}

@keyframes loading {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@for $i from 1 through 10 {
  .l_#{$i} {
    animation-delay: 0.48s + $i*0.15;
  }
}

</style>
