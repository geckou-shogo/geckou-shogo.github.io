<template>
  <div
    :class="[$style.container, 'section_item']"
    :style="{backgroundPositionY: `${backgroundPositionY}%`}"
  >
    <SectionHeader
      v-if="section.idName !== 'top'"
      :idName="section.idName"
      :heading="section.name"
      :transparent="section.idName === 'contact'"
    />
    <div
      :class="$style.contents"
    >
      <component
        :is="section.component"
        :section="section"
      />
      <ParallaxBackground
        :background="section.background"
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
      default : () => { },
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
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.container {
  position        : relative;
  display         : flex;
  height          : 100vh;
  min-width       : calc(100vw + 1px);
  background-image: linear-gradient(
    to bottom,
    rgba(25, 44, 56, 1) 6.6%,
    rgba(11, 25, 38, 1) 13.2%,
    rgba(10, 29, 40, 1) 19.8%,
    rgba(10, 29, 40, 1) 26.4%,
    rgba(25, 44, 56, 1) 33%,
    rgba(21, 50, 79, 1) 39.6%,
    rgba(25, 44, 56, 1) 46.2%,
    rgba(21, 50, 79, 1) 52.8%,
    rgba(49, 86, 123, 1) 59.4%,
    rgba(49, 82, 123, 1) 66%,
    rgba(36, 100, 149, 1) 72.6%,
    rgba(8, 108, 146, 1) 79.2%,
    /* contactは未記入 */
    );
  background-size: 100% 400vh;
}
</style>
