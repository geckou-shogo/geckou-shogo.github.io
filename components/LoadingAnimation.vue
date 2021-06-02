<template>
  <div :class="$style.loading" />
</template>

<style lang="scss" module>
@use '~/assets/scss/color' as c;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/value' as v;

@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.loading {
  color: c.$baseColor;
  margin: auto;
  border-radius: 50%;
  position: relative;
  width: v.$val * 4;
  height: v.$val * 4;
  box-shadow: inset 0 0 0 2px;

  &::before,
  &::after {
    content: '';
    width: 50%;
    height: 100%;
    background-color: c.$mainColor;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &::before {
    transform-origin: left 50%;
    right: 0;
    animation: loading 1.5s infinite ease 1.1s;
  }

  &::after {
    transform-origin: right 50%;
    left: 0;
    animation: loading 1.5s infinite ease;
  }
}
</style>
