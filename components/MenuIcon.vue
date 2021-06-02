<template>
  <div :class="[$style.menu_button, closeClassName]">
    <div :class="$style.menu_button__icon" />
  </div>
</template>

<script>
export default {
  props: {
    closeStatus: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  computed: {
    closeClassName() {
      return this.closeStatus ? this.$style.close : ''
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;
@use '~/assets/scss/font' as f;

.menu_button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: v.$val * 5;
  height: v.$val * 4;
  color: c.$white;
  font-size: f.size('min');

  &::after {
    content: 'MENU';
    text-align: center;
    letter-spacing: 0.1rem;
    line-height: 1;
  }

  &__icon {
    flex: 1 0 auto;
    width: v.$val * 4;
    margin: 0 auto 10px;
    transition: all 0.3s;
    border-top: 2px solid c.$white;
    border-bottom: 2px solid c.$white;
    position: relative;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      margin: auto;
      background-color: c.$white;
      transition: all 0.6s ease-out;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  &.close {
    &::after {
      content: 'CLOSE';
      letter-spacing: 0;
    }

    .menu_button__icon {
      border-width: 0;

      &::before {
        transform: rotate(225deg);
      }

      &::after {
        transform: rotate(495deg);
      }
    }
  }
}
</style>
