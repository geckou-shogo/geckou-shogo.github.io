<template>
  <div
    id="section_header"
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
        id="heading"
        :class="[$style.heading, status ? $style.fadeInLeft : '']"
        :style="{fontSize: `${headingFontSize}px`}"
      >
        <FlowFromLeft
          :status="status"
        >
          {{ heading }}
        </FlowFromLeft>
      </h2>
      <FlowFromLeft
        :status="status"
      >
        <div
          id="description"
          :class="[$style.description, status ? $style.fadeInLeft : '']"
        >
          <slot />
        </div>
      </FlowFromLeft>
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
  computed: {
    headingFontSize() {
      if (process.client) {
        const windowHeight     = window?.innerHeight
        const headerWidth      = windowHeight / 1.62
        const headingMaxLength = 'INFORMATION'.length
        const letterSpacing    = 1.16
        return Math.floor(headerWidth / headingMaxLength / letterSpacing,)
      } else {
        return 0
      }
    },
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
  display: flex;
  height: 100vh;
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
    background-color: rgba($color: c.$white, $alpha: .28);
    opacity: 0;
  }
  &.fadeInLeft {
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
  text-align: center;
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
</style>
