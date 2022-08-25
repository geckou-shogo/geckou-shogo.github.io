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
        :class="$style.background"
        data-scroll
        data-scroll-speed="-10"
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

.container {
  position        : relative;
  display         : flex;
  height          : 100vh;
  min-width       : calc(100vw + 1px);
  background-image: linear-gradient(
    to bottom,
    hsl(200, 29%, 6%) 0%,
    hsl(201, 70%, 12%) 10%,
    hsl(201, 63%, 13%) 20%,
    hsl(203, 38%, 16%) 30%,
    hsl(203, 64%, 14%) 40%,
    hsl(211, 69%, 13%) 50%,
    hsl(233, 86%, 11%) 70%,
    hsl(240, 70%, 15%) 80%,
    hsl(244, 24%, 35%) 90%,
    hsl(292, 7%, 44%) 100%,
  );
  background-size: 100% 500vh;
  overflow       : hidden;

  @include v.media('mobile') {
    flex-direction: column;
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
