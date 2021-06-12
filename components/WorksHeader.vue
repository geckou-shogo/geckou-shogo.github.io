<template>
  <header :class="$style.header">
    <h1 :class="$style.header__title">
      {{ title }}
    </h1>
    <ul :class="$style.header__list">
      <li v-for="(category, index) in categories" :key="index">
        <small :class="$style.header__category">
          <CategoryIcon :category="category" />{{ category }}
        </small>
      </li>
    </ul>
    <div :class="$style.header__thumbnail">
      <div :class="$style.header__thumbnail__wrapper">
        <img :src="require(`~/assets/img/tmb/${thumbnail}`)" :alt="title" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    categories: {
      type: Array,
      required: true,
      default: () => [],
    },
    thumbnail: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/color' as c;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/value' as v;

.header {
  &__title {
    padding: v.$val;
    font-size: f.size('max');
    text-align: center;

    @include v.mediaScreen('mobile') {
      padding: v.$val * 2 v.$val * 2 0;
      font-size: f.size('larger');
    }
  }

  &__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: v.$val;

    > li {
      padding: v.$val;
    }
  }

  &__category {
    display: flex;
    justify-content: center;
    align-items: center;
    color: c.$darkGray;
    font-size: f.size('small');
    font-weight: bold;
    font-style: italic;

    i {
      margin-right: 0.25em;
    }
  }

  &__thumbnail {
    max-width: v.$tabletWidthScreenSize;
    margin: auto;
    padding: v.$val * 2;

    @include v.mediaScreen('mobile') {
      padding: 0;
    }

    &__wrapper {
      width: 100%;
      padding-top: 62%;
      position: relative;

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
      }
    }
  }
}
</style>
