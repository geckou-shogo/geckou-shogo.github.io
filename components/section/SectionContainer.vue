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
        :animation="animation"
        :positionX="(scrollStatus.x - sectionStatus.left) - (scrollStatus.x * 1.02 / 50)"
        :screenStatus="screenStatus"
        :section="section"
        :currentSection="currentSection"
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
    currentSection: {
      required: true,
      type    : String,
    },
    scrollStatus: {
      required: true,
      type    : Object,
    },
    sectionStatus: {
      required: true,
      type    : Object,
    },
    progress: {
      required: true,
      type    : Number,
    },
    screenStatus: {
      required: true,
      type    : String,
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
  background-size : 100% 800vh;
  overflow        : hidden;

  @include v.media('portrait') {
    min-width: auto;
    width: 100%;
    height: auto;
    flex-direction  : column;
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
    background-image: radial-gradient(#000, #333);
    mix-blend-mode  : screen;
    position        : absolute;
    left            : 0;
    opacity         : .2;
    pointer-events  : none;
  }
}

.background {
  margin-left: 10%;
  position   : absolute;
  top        : 0;
  left       : 0;
  @include v.media('portrait') {
    position: fixed;
    top: auto;
    bottom: 0;
    margin-left: 0;
  }
}
</style>
