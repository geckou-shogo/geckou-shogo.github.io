<template>
  <header :class="$style.header">
    <h1 :class="$style.header__title">
      <CategoryIcon
        v-for="(category, index) in categories"
        :key="index"
        :category="category"
      />{{ title }}
    </h1>
    <div :class="$style.header__thumbnail">
      <div :class="$style.header__thumbnail__wrapper">
        <img :src="require(`~/assets/img/tmb/${thumbnail}`)" :alt="title" />
      </div>
    </div>
    <time :class="$style.header__date">
      <i class="bx bxs-calendar-alt" />
      {{ date }}
    </time>
    <small
      v-for="(category, index) in categories"
      :key="index"
      :category="category"
      :class="$style.header__category"
    >
      <i class="bx bxs-folder" />{{ category }}
    </small>
    <p :class="$style.header__description">
      {{ description }}
    </p>
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
    description: {
      type: String,
      required: true,
      default: '',
    },
    date: {
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
  display: grid;
  grid-template-areas:
    'thumbnail title title'
    'thumbnail date category'
    'thumbnail description description';
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 58% auto 1fr;

  @include v.mediaScreen('mobile') {
    grid-template-areas:
      'thumbnail thumbnail'
      'description description'
      'title title'
      'date category';
    grid-template-rows: auto;
    grid-template-columns: 50% 50%;
  }

  &__category {
    grid-area: category;
    display: flex;
    padding: v.$val;
    align-items: center;
    color: c.$darkGray;
    font-size: f.size('smaller');
    font-weight: bold;
    font-style: italic;

    @include v.mediaScreen('mobile') {
      display: flex;
      justify-content: center;
      padding: v.$val * 2 v.$val 0;
    }

    i {
      margin-right: 0.25em;
    }
  }

  &__date {
    @extend .header__category;
    grid-area: date;
  }

  &__thumbnail {
    grid-area: thumbnail;
    margin-right: v.$val * 3;

    @include v.mediaScreen('mobile') {
      margin-right: 0;
    }

    &__wrapper {
      width: 100%;
      padding-top: 62%;
      border: 4px solid c.$lightGray;
      position: relative;

      @include v.mediaScreen('mobile') {
        border: none;
      }

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
      }
    }
  }

  &__title {
    grid-area: title;
    padding: v.$val * 8 v.$val 0 v.$val;
    font-size: f.size('large');

    @include v.mediaScreen('tablet') {
      padding-top: 0;
    }

    @include v.mediaScreen('mobile') {
      padding: 0 v.$val * 2;
      text-align: center;
    }

    i {
      margin-right: 0.25em;
    }
  }

  &__description {
    grid-area: description;
    padding: v.$val;
    color: c.$darkBlack;
    font-size: f.size('larger');
    font-weight: bold;

    @include v.mediaScreen('mobile') {
      padding: v.$val * 2;
    }
  }
}
</style>
