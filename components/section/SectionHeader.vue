<template>
  <div
    :class="$style.section_header"
  >
    <div
      v-inview:enter="change"
      :class="$style.marker"
    />
    <div
      :class="$style.inner"
    >
      <h2
        id="split_text"
        :class="[$style.heading, status ? $style.fadeInLeft : '']"
      >
        {{ heading }}
      </h2>
      <div :class="[$style.description, status ? $style.slideIn : '']">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    heading: {
      required: true,
      type    : String,
    },
  },
  data() {
    return {
      status: false,
    }
  },
  moutend() {

  },
  methods: {
    change() {
      this.status = true
    },
    textAnimetion() {
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.section_header {
  position: relative;
  min-width: calc(#{f.size('heading')} * 11);
  aspect-ratio: 1 / 1.62;
  background-color: c.$bgBlack;
}

.inner {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.heading {
  position: relative;
  width: 100%;
  min-height: 108px;
  font-size: f.size('heading');
  font-family: f.family('english');
  color: c.$white;
  letter-spacing: f.letterSpacing(normal);
  text-align: center;
  opacity: 0;

  &::first-letter {
    color: c.$blue;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 1rem;
    width: 100%;
    height: 1px;
    background-color: rgba(224, 224, 228, .28);
    opacity: 0;
  }
  &.fadeInLeft {
    animation-name: fadeIn;
    animation-duration: 1.2s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    &::after {
      animation-name: fadeInLeft;
      animation-duration: 2s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    }
  }
}

.description {
  min-height: 64px;
}

.marker {
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100vh;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    width: 0%;
  }
  50% {
    opacity: .5;
    width: 50%;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
