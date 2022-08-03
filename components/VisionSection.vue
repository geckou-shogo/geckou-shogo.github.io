<template>
  <div
    :id="[sectionData.id]"
    :class="[$style.wrapper, $style[sectionData.id]]"
  >
    <div
      :class="$style.container"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionData: {
      required: true,
      default : () => {},
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.heading {
  font-size: 100px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 100px;
    color: c.$white;
    @include v.mq(md) {
      font-size: 40px;
    }
  }
}

</style>
