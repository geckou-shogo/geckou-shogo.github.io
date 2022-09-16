<template>
  <div
    :class="$style.section"
  >
    <GeckouLogo
      :class="[$style.logo, isEnabledAnimation ? $style.animation : '']"
      :animation="isEnabledAnimation"
    />
  </div>
</template>

<script>
export default {
  name : 'SectionOfTop',
  props: {
    section: {
      required: true,
      type    : Object,
    },
    progress: {
      required: true,
      type    : Number,
    },
  },
  computed: {
    isEnabledAnimation() {
      return !this.progress || this.progress >= 55
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.section {
  display        : flex;
  width          : 100vw;
  height         : 100vh;
  justify-content: center;
  align-items    : center;
  position       : relative;

  @include v.media ('portrait') {
    width: 100%;
  }
}

.logo {
  height    : v.$val * 10;
  position  : absolute;
  transition: top 3s ease-out;
  top       : calc(50% - (#{v.$val} * 10));

  @include v.media('portrait') {
    height    : v.$val * 8;
    position  : fixed;
    transition: top 2s ease-out;
    top       : calc(50% - (#{v.$val} * 8));
  }

  &.animation {
    top: 10%;

    @include v.media('portrait') {
      top: v.$val * 4;
    }
  }
}
</style>
