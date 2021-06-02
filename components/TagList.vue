<template>
  <div :class="$style.tags">
    <ul :class="$style.list">
      <li v-for="(item, index) in tags" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    tags: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;
@use '~/assets/scss/font' as f;
@use 'sass:math';

.tags {
  display: flex;
  line-height: 1;
  align-items: center;

  i {
    font-size: f.size('min');
  }
}

.list {
  display: flex;
  flex-wrap: wrap;
  padding: math.div(v.$val, 2);

  > li {
    padding: math.div(v.$val, 2);
    font-size: f.size('min');

    &::before {
      content: '#';
    }
  }
}
</style>
