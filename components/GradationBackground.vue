<template>
  <div :class="$style.screen" />
</template>

<script>
export default {
} 
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.screen {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #192c38, #0b1926 30%,  #0a1d28);
}

</style>