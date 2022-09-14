<template>
  <div
    :class="$style.wrapper"
    :style="{
      width : `calc(${circleWidth}em + ${padding * 2}rem)`,
      padding: `${padding}rem`,
    }"
  >
    <p
      :class="$style.text"
      v-html="htmlString"
    />
  </div>
</template>

<script>
export default {
  name : 'SquareText',
  props: {
    htmlString: {
      required: true,
      type    : String,
    },
  },
  data() {
    return {
      padding: 4,
    }
  },
  computed: {
    circleWidth() {
      const text = this.htmlString
        .replace(/(<([^>]+)>)/gi, '')
        .replace('<br>', '')
      const textLength = text.length
      const textSquare = Math.sqrt(textLength)
      return (Math.round(textSquare) + 8) * 1.16
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.wrapper {
  position       : relative;
  display        : flex;
  align-items    : center;
  justify-content: center;
  aspect-ratio   : 1 / 1;

  a {
    border-bottom : 1px solid rgba(c.$accent, .28);

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
