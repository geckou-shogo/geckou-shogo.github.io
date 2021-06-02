<template>
  <small :class="$style.scroll_prompt">
    <svg viewBox="0 0 191.09 123.72" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m91.99 61.83 70.86-23.04 28.24-38.79-191.09 61.87 190.81 61.85-28.16-38.92z"
        fill="#1c4ac9"
      />
    </svg>
  </small>
</template>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;
@use '~/assets/scss/font' as f;

@keyframes scrollPrompt {
  0% {
    opacity: 1;
    bottom: v.$val;
  }

  100% {
    opacity: 0;
    bottom: 0;
  }
}

.scroll_prompt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex: 1 0 auto;
  color: c.$mainColor;

  &::before {
    content: 'SCROLL';
    margin-bottom: v.$val * 2;
    font-size: f.size('smaller');
  }

  > svg {
    position: relative;
    width: v.$val * 4;
    height: v.$val * 2;
    fill: c.$mainColor;
    transform: rotate(-90deg);
    animation: scrollPrompt 1.5s infinite;
  }
}
</style>
