<template>
  <div
    :class="[$style.container, current ? $style.current : '']"
  >
    <Gecko
      v-if="current"
      :class="$style.svg"
    />
    <div
      :class="$style.text"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
import Gecko from '@/assets/img/svg/gecko.svg'

export default {
  name      : 'GlobalNavItem',
  components: {
    Gecko,
  },
  props: {
    text: {
      required: true,
      type    : String,
    },
    current: {
      required: true,
      type    : Boolean,
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.container {
  position     : relative;
  display      : flex;
  align-items  : center;
  width        : v.$val * 14;
  border-radius: 50%;
  aspect-ratio : 1 / 1;
  overflow     : hidden;

  &::before {
    content         : '';
    position        : absolute;
    top             : 0;
    left            : 0;
    width           : 100%;
    height          : 100%;
    background-color: rgba(c.$white, 0);
    border-radius   : 50%;
    transition      : background-color .5s;
    mix-blend-mode  : screen;
  }

  .text {
    position      : relative;
    width         : 100%;
    padding       : v.$val;
    color         : c.$white;
    font-size     : f.size(small);
    font-family   : f.family(english);
    text-align    : center;
    line-height   : 1;
    letter-spacing: 0.1em;

    &::before {
      opacity   : 0;
      transition: opacity .5s;
    }
  }

  &.current {
    &::before {
      background-color: rgba(c.$white, .08);
    }
    &::after {
      content: "";
      position: absolute;
      margin-bottom: v.$val * 3.5;
      display: block;
      width: 100%;
      height: 1px;
      background-color: c.$white;
    }
  }
  .svg {
    position: absolute;
    top: v.$val * 3;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    fill: c.$white;
  }
}
</style>
