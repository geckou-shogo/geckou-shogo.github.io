<template>
  <div :class="$style.card">
    <nuxt-link
      :to="'/articles/' + article.slug"
      :class="$style.card__container"
    >
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
      <div :class="$style.card__description">
        <p>
          {{ article.description }}
        </p>
      </div>
      <h3 :class="$style.card__heading">
        <CategoryIcon
          v-for="(category, index) in article.categories"
          :key="index"
          :category="category"
        />
        <span>{{ article.title }}</span>
      </h3>
      <div :class="$style.card__date">
        <time>{{ article.date }}</time>
      </div>
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
  background-color: c.$baseColor;

  &__container {
    display: grid;
    grid-template-areas:
      'description description'
      'heading date';
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr auto;
    width: 100%;
    height: 100%;
    border: v.$val * 1.5 solid c.$baseColor;
    color: inherit;
    text-decoration: none;
    position: absolute;
    top: 0;

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
    grid-area: heading;
    padding: v.$val * 2;
    font-size: f.size('medium');
    font-weight: normal;
    line-height: 1;
    text-shadow: 0 0 0.5em rgba(c.$black, 1);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    > * {
      &:not(:last-child) {
        margin-right: math.div(v.$val, 2);
      }
    }
  }

  &__description {
    grid-area: description;
    display: flex;
    align-items: center;
    padding: v.$val * 4 v.$val * 4 v.$val * 2;

    > p {
      display: -webkit-box;
      font-size: f.size('larger');
      font-weight: bold;
      text-shadow: 0 0 0.5em rgba(c.$black, 1);
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      @include v.mediaScreen('mobile') {
        font-size: f.size('large');
      }
    }
  }

  &__date {
    grid-area: date;
    display: flex;
    align-items: flex-end;

    > time {
      padding: v.$val 0 0 v.$val * 1.5;
      background-color: c.$baseColor;
      color: c.$mainColor;
      font-size: f.size('smaller');
      font-style: italic;
      font-weight: bold;
      line-height: 1;
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

      > i {
        margin-right: 0.5em;
      }
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to top,
        c.$black 0%,
        transparent calc(1.8em + #{v.$val} * 4),
        transparent 100%
      );
      background-color: rgba(c.$lightBlack, 0.6);
      transition: background-color 0.3s;
      mix-blend-mode: multiply;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
