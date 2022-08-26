<template>
  <div
    :class="[$style.container, 'section_item']"
    :style="{backgroundPositionY: `${backgroundPositionY}%`}"
  >
    <SectionHeader
      v-if="section.idName !== 'top'"
      :idName="section.idName"
      :heading="section.name"
      :class="$style.header"
    />
    <div
      v-inview:enter="() => {animation = true}"
      :class="$style.contents"
    >
      <ParallaxBackground
        v-if="section.background"
        :background="section.background"
        :class="$style.background"
        data-scroll
        data-scroll-speed="-10"
        :animation="animation"
      />
      <component
        :is="section.component"
        :section="section"
      />
    </div>
  </div>
</template>

<script>
export default {
  name : 'SectionContainer',
  props: {
    section: {
      required: true,
      type    : Object,
    },
    scrollStatus: {
      required: true,
      type    : Object,
    },
    progress: {
      required: true,
      type    : Number,
    },
  },
  data() {
    return {
      backgroundPositionY: 0,
      animation          : false,
    }
  },
  watch: {
    progress(newValue) {
      if (newValue > this.backgroundPositionY) this.backgroundPositionY = newValue
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;

.container {
  position        : relative;
  display         : flex;
  height          : 100vh;
  min-width       : calc(100vw + 1px);
  background-image: c.$backgroundGradient;
  background-size : 100% 500vh;
  overflow        : hidden;

  @include v.media('mobile') {
    flex-direction  : column;
    background-image: none;
  }
}

.header {
  flex: 0 0 0;
}

.contents {
  flex    : 1 1 auto;
  position: relative;

  &::before {
    content         : '';
    width           : 100%;
    height          : 100%;
    background-image: radial-gradient(#333, #000);
    mix-blend-mode  : lighten;
    position        : absolute;
    left            : 0;
    opacity         : .4;
    pointer-events  : none;
  }
}

.background {
  margin-left: 10%;
  position   : absolute;
  top        : 0;
  left       : 0;
}
</style>
