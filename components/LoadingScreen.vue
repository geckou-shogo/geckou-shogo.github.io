<template>
  <div
    :class="[$style.container, displayState ? '' : $style.hide]"
  >
    <LogoSymbol
      :class="$style.logo"
    />
  </div>
</template>

<script>
export default {
  name : 'LoadingScreen',
  props: {
    initialized: {
      required: true,
      type    : Boolean,
    },
  },
  data() {
    return {
      displayState: true,
    }
  },
  watch: {
    initialized() {
      if (this.initialized) {
        setTimeout(() => {
          this.displayState = false
        })
      }
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.container {
  position        : fixed;
  display         : flex;
  width           : 100vw;
  height          : 100vh;
  align-items     : center;
  justify-content : center;
  background-image: linear-gradient(
    to bottom,
    hsl(203, 29%, 6%) 0%,
    hsl(205, 76%, 8%) 100%,
  );
  z-index   : v.zIndex('max');
  transition: all 1s;
  opacity   : 1;

  &.hide {
    opacity: 0;
    z-index: -1;
  }
}

.logo {
  height    : v.$val * 10;
  animation: flickering 3s infinite;
  position  : absolute;
  top       : calc(50% - ( v.$val * 10));

  @include v.media('portrait') {
    height    : v.$val * 8;
    top       : calc(50% - (#{v.$val} * 8));
  }
}

@keyframes flickering {
  0%,
  100% {
    opacity: .3;
  }

  50% {
    opacity: .1;
  }
}
</style>
