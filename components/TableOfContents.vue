<template>
  <ul :class="$style.list">
    <li v-for="(item, index) in headingArray" :key="index">
      <a :href="`#${item.id}`">
        {{ item.innerText }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: {
    headingArray: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/color' as c;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/value' as v;

.list {
  padding: v.$val;

  @include v.mediaScreen('mobile') {
    background-color: c.$darkWhite;
  }

  li {
    > a {
      display: block;
      padding: v.$val;
      color: c.$mainColor;
      font-size: f.size('smaller');
      transition: color 0.1s;

      &:hover {
        color: c.$secondaryColor;
      }
    }
  }
}
</style>
