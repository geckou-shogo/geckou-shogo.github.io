<template>
  <div :class="$style.screen" />
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

.screen {
  background: linear-gradient(to bottom, #192c38, #0b1926 30%,  #0a1d28);
}

</style>