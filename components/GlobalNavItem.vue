<template>
  <div
    :class="[$style.container, current ? $style.current : '']"
  >
    <div
      :class="$style.text"
    >
      {{ text }}
      <Gecko
        v-if="current"
        :class="$style.gecko"
      />
    </div>
  </div>
</template>

<script>
import Gecko from '@/assets/images/svg/gecko.svg'

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
@use '~/assets/scss/utility' as u;

.container {
  --duration   : .5s;
  position     : relative;
  display      : flex;
  align-items  : center;
  width        : v.$val * 12;
  border-radius: 50%;
  aspect-ratio : 1 / 1;
  overflow     : hidden;

  &::before {
    @include u.spotlight;
    content         : '';
    position        : absolute;
    top             : 0;
    left            : 0;
    background-color: rgba(c.$white, 0);
    transition      : background-color var(--duration);
    mix-blend-mode  : screen;
  }

  .text {
    position      : relative;
    width         : 100%;
    padding       : v.$val;
    color         : c.$white;
    font-size     : f.size('small');
    font-family   : f.family('english');
    text-align    : center;
    line-height   : 1;
    letter-spacing: 0.1em;

    &::before {
      content         : '';
      display         : block;
      width           : 100%;
      height          : 1px;
      background-color: c.$border;
      position        : absolute;
      top             : 0;
      left            : 0;
      opacity         : 0;
      transition      : opacity var(--duration);
    }
  }

  .gecko {
    width     : v.$val * 4;
    margin    : auto;
    position  : absolute;
    right     : 0;
    bottom    : 100%;
    left      : 0;
    fill      : c.$white;
    opacity   : 0;
    transition: opacity var(--duration);
  }

  &.current {
    &::before {
      @include u.spotlight;
    }

    .text {
      &::before {
        opacity: 1;
      }
    }

    .gecko {
      opacity: 1;
    }
  }
}
</style>
