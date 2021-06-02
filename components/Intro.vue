<template>
  <div :class="$style.intro">
    <div
      :class="$style.intro__overlay"
      :style="{ opacity: `${(100 - scrollPercentage) / 100}` }"
    >
      <Logo :class="$style.intro__logo" />
      <ScrollPrompt :class="$style.intro__scroll_prompt" />
    </div>
    <WhiteLogo :class="$style['intro__logo--white']" />
  </div>
</template>

<script>
export default {
  props: {
    containerId: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      scroll: 0,
      height: 0,
    }
  },
  computed: {
    scrollPercentage() {
      return (this.scroll / this.height) * 100
    },
    container() {
      return document.getElementById(this.containerId)
    },
  },
  mounted() {
    this.scroll = this.container.scrollTop
    this.height = this.container.clientHeight

    this.container.addEventListener('scroll', () => {
      this.scroll = this.container.scrollTop
    })
    window.addEventListener('resize', () => {
      this.height = this.container.clientHeight
    })
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;

.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  &__logo {
    max-width: v.$val * 27;
    position: relative;

    @include v.mediaScreen('tablet') {
      max-width: v.$val * 22;
    }

    @include v.mediaScreen('mobile') {
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: v.$val * 2;
      position: relative;
    }

    &--white {
      @extend .intro__logo;
      margin: auto;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.2;
      pointer-events: none;
    }
  }

  &__overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: c.$baseColor;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  &__scroll_prompt {
    position: absolute;
    margin: auto;
    right: 0;
    bottom: v.$val * 4;
    left: 0;

    @include v.mediaScreen('mobile') {
      bottom: v.$val * 12;
    }
  }
}
</style>
