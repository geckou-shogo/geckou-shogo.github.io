<template>
  <ul :class="$style.list">
    <li v-for="(item, index) in articles" :key="item.slug">
      <ArticleCard
        v-if="item"
        data-sal="slide-up"
        data-sal-duration="500"
        :data-sal-delay="index * 100"
        :article="item"
      />
      <LoadingAnimation v-else />
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: {
    articles: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/utility' as u;

.list {
  @include u.gridList($gap: v.$val * 8);
}
</style>
