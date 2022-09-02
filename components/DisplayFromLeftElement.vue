<template>
  <div
    :class="[$style.container, isDisplay ? $style.fadeInLeft : '']"
  >
    <span>
      <slot />
    </span>
  </div>
</template>

<script>

export default {
  props: {
    isDisplay: {
      required: true,
      type    : Boolean,
    },
  },
}
</script>

<style lang="scss" module>
.container {
  --duration                : 2s;
  --timing-function         : linear;
  width                     : 100%;
  transform                 : translate(-100%, 0);
  transition-duration       : var(--duration);
  transition-timing-function: var(--timing-function);
  overflow                  : hidden;

  > * {
    display                   : block;
    width                     : 100%;
    transform                 : translate(100%, 0);
    transition-duration       : var(--duration);
    transition-timing-function: var(--timing-function);
  }

  &.fadeInLeft {
    transform: translate(0, 0);

    > * {
      transform: translate(0, 0);
    }
  }
}
</style>
