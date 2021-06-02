<template>
  <div :class="$style.heading">
    <h2 :class="$style.heading__title">
      {{ heading }}
    </h2>
    <p :class="$style.heading__description">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    heading: {
      type: String,
      required: true,
      default: '',
    },
    description: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;
@use '~/assets/scss/font' as f;

.heading {
  text-align: center;
  width: 100%;
  color: c.$white;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: v.$val * 16;
    height: 4px;
    margin: auto;
    background-color: c.$white;
  }

  &__title {
    margin-bottom: v.$val;
    font-family: f.family('english');
    font-size: f.size('heading');
    line-height: 1;
  }

  &__description {
    padding: v.$val * 2;
    font-size: f.size('small');
  }
}
</style>
