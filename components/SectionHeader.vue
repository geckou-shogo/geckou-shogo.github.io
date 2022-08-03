<template>
  <div 
    :class="$style.section_header"
  >
    <div
      :class="$style.inner"
    >
      <h2
        :class="$style.heading"
      >{{ sectionData.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionData: {
      required: true,
      default: () => {},
    }
  }
} 
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.section_header {
  width: 50%;
  background-color: c.$bgBlack;
}

.inner {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heading {
  font-size: 60px;
  color: c.$white;
  letter-spacing: 0.16;
  &::first-letter {
    color: c.$blue;
  }
}

</style>
