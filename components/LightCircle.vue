<template>
  <div
    :class="$style.wrapper"
    :style="{width: `calc(${textReplace}em * 1.16 + 5rem)`}"
  >
    <p
      :class="$style.text"
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
    textReplace() {
      const text = this.htmlString
        .replace(/(<([^>]+)>)/gi, '')
        .replace('<br>', '')
      const textLength = text.length
      const textSquare = Math.sqrt(textLength)
      return Math.round(textSquare) + 2
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.wrapper {
  position: relative;
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba($color: c.$blue, $alpha: .05);
    mix-blend-mode: screen;
  }
}

.text {
  white-space: normal;
}

</style>
