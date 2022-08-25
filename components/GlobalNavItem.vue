<template>
  <div
    :class="[$style.container, current ? $style.current : '']"
  >
    <div
      :class="$style.text"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name : 'GlobalNavItem',
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
  display      : flex;
  align-items  : center;
  width        : v.$val * 14;
  border-radius: 50%;
  aspect-ratio : 1 / 1;
  overflow     : hidden;
  position     : relative;

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
    width         : 100%;
    padding       : v.$val;
    color         : c.$white;
    font-size     : f.size(small);
    font-family   : f.family(english);
    text-align    : center;
    line-height   : 1;
    letter-spacing: 0.1em;
    position      : relative;

    &::before {
      opacity   : 0;
      transition: opacity .5s;
    }
  }

  &.current {
    &::before {
      background-color: rgba(c.$white, .08);
    }

    .text {
      &::before {
        content            : '';
        position           : absolute;
        top                : -100%;
        left               : 0;
        display            : block;
        width              : 100%;
        height             : 100%;
        border-bottom      : 1px solid c.$white;
        background-size    : 38%;
        background-image   : url('../assets/img/gecko.png');
        background-position: bottom center;
        opacity            : 1;
      }
    }
  }
}
</style>
