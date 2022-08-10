<template>
  <div
    :class="$style.wrapper"
  >
    <p
      :style="{width: `calc(${replace}em * 1.16)`}"
      v-html="htmlString"
    />
  </div>
</template>

<script>
export default {
  props: {
    htmlString: {
      required: true,
      type    : String,
    },
  },
  computed: {
    replace() {
      if (process.client) {
        const text = this.htmlString
          .replace(/(<([^>]+)>)/gi, '')
          .replace('<br>', '')
        const textLength = text.length
        const textSquare = Math.sqrt(textLength)
        console.log(text)
        console.log(textLength)
        console.log(textSquare)
        return Math.round(textSquare) + 2
      } else {
        return 0
      }
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

</style>
