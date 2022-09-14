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
      :class="$style.contents"
    >
      <ParallaxBackground
        v-if="section.background"
        :background="section.background"
        :positionX="(scrollStatus.x - sectionStatus.left) - (scrollStatus.x * 1.02 / 50)"
        :positionY="backGroundPositionYAtPortrait"
        :screenStatus="screenStatus"
        :currentSection="currentSection"
        :progress="progress"
        :sectionStatus="sectionStatus"
      />
      <component
        :is="section.component"
        :section="section"
      />
      <div
        v-if="section.idName !== 'top'"
        :class="$style.logo"
        :style="{
          left: screenStatus === 'landscape' ? `${scrollStatus.x - sectionStatus.left}px` : 'auto',
        }"
      >
        <GeckouLogo />
      </div>
    </div>
  </div>
</template>

<script>
import GeckouLogo from '@/assets/images/svg/logo.svg'

export default {
  name      : 'SectionContainer',
  components: {
    GeckouLogo,
  },
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
  computed: {
    backGroundPositionYAtPortrait() {
      return process.client && this.screenStatus === 'portrait'
        ? ((this.sectionStatus?.bottom || 0) - window?.innerHeight) - this.scrollStatus.y
        : 0
    },
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
  background-size : 100% 700vh;

  @include v.media('portrait') {
    min-width: auto;
    width: 100%;
    height: 100%;
    flex-direction  : column;
    background-image: none;
  }
}

.header {
  flex: 0 0 0;
}

.contents {
  flex     : 1 1 auto;
  position : relative;

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

.logo {
  width   : v.$val * 10;
  position: absolute;
  top     : 10%;
  z-index : v.zIndex('contents');
}
</style>
