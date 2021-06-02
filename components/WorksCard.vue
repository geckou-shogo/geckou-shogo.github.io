<template>
  <div :class="$style.card">
    <nuxt-link :to="'/works/' + article.slug" :class="$style.card__container">
      <div :class="$style.card__thumbnail">
        <img
          v-if="article.thumbnail"
          :src="require(`~/assets/img/tmb/${article.thumbnail}`)"
          :alt="`${article.title}のサムネイル`"
        />
        <div v-else :class="$style.card__thumbnail__no_image">
          <i class="bx bxs-image" />No image
        </div>
      </div>
      <h3 :class="$style.card__heading">
        <CategoryIcon
          v-for="(category, index) in article.categories"
          :key="index"
          :category="category"
        />
        <span :class="$style.card__heading__text">{{ article.title }}</span>
      </h3>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    article: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;
@use 'sass:math';

.card {
  position: relative;
  width: 100%;
  padding-top: 62%;
  border: v.$val solid c.$baseColor;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    padding: v.$val * 2;
    color: inherit;
    text-decoration: none;
    position: absolute;
    top: 0;

    @include v.mediaScreen('mobile') {
      padding: v.$val;
    }

    > * {
      position: relative;
    }

    &:hover {
      .card__thumbnail {
        > img {
          transform: scale(1.1);
        }

        &::after {
          background-color: rgba(c.$lightBlack, 1);
        }
      }
    }
  }

  &__heading {
    display: flex;
    align-items: center;
    font-size: f.size('small');
    font-weight: normal;
    overflow: hidden;

    > * {
      &:not(:last-child) {
        margin-right: math.div(v.$val, 2);
      }
    }

    &__text {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  &__thumbnail {
    width: 100%;
    height: 100%;
    background-color: c.$lightBlack;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }

    &__no_image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: c.$lightBlack;
      font-family: f.family('english');
      font-size: f.size('max');
      opacity: 0.2;

      @include v.mediaScreen('mobile') {
        font-size: f.size('medium');
      }

      > i {
        margin-right: 0.5em;
      }
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(c.$lightBlack, 0.4);
      transition: background-color 0.3s;
      mix-blend-mode: multiply;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
