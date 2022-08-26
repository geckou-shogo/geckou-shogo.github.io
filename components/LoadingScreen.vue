<template>
  <div
    :class="[$style.loading, displayState ? '' : $style.hide]"
  >
    <div
      :class="$style.loading_box"
    >
      <span
        v-for="(i, index) in loadingText.length"
        :key="i"
        :class="[$style[`l_${i}`], $style.letter]"
      >
        {{ loadingText[index] }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name : 'LoadingScreen',
  props: {
    initialized: {
      type    : Boolean,
      required: true,
      default : true,
    },
    displayTime: {
      type    : Number,
      required: false,
      default : 1000,
    },
    loadingText: {
      type    : String,
      required: false,
      default : 'Loading...',
    },
  },
  data() {
    return {
      displayState: true,
    }
  },
  mounted() {
    if (this.initialized)
      setTimeout(() => {
        this.displayState = false
      }, this.displayTime)
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
  background-color: c.$black;
  z-index         : v.zIndex('loading');
  transition      : all 1s;

  &_box {
    margin         : auto;
    padding        : 1rem;
    display        : flex;
    align-items    : center;
    justify-content: center;
    gap            : 0 v.$val * 2;

    .letter {
      font-size                : f.size('larger');
      font-weight              : f.weight('bold');
      color                    : c.$white;
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
