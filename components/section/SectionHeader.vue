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
    this.$nextTick(() => {
      this.change()
    },)
  },
  methods: {
    change() {
      this.status = true
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
  min-width: 620px;
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
  font-size: 60px;
  font-family: f.family('english');
  color: c.$white;
  letter-spacing: f.letterSpacing(normal);
  text-align: center;
  opacity: 0;

  &::first-letter {
    color: c.$blue;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    height: 2px;
    background-color: c.$white;
    opacity: 0;
  }
  &.fadeInLeft {
    animation-name: fadeIn;
    animation-duration: 1.2s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    &::before {
      animation-name: fadeInLeft;
      animation-duration: 1.5s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
    }
  }
}

.description {
  opacity: 0;
  min-height: 64px;
  &.slideIn {
    animation-name: slideIn;
    animation-duration: 1.2s;
    animation-delay: .85s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }
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

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
