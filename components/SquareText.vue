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
      return (Math.round(textSquare) + 6) * 1.16
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/color' as c;

.wrapper {
  position       : relative;
  display        : flex;
  align-items    : center;
  justify-content: center;
  aspect-ratio   : 1 / 1;
}
</style>
