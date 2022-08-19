<template>
  <div
    :class="[$style.section_header, transparent ? $style.transparent : '']"
  >
    <h2
      :class="[$style.heading, contentsDisplay ? $style.displayed_border: '']"
      :style="{fontSize: `${headingFontSize}px`}"
    >
      <DisplayFromLeftElement
        :isDisplay="contentsDisplay"
      >
        {{ heading }}
      </DisplayFromLeftElement>
    </h2>
    <DisplayFromLeftElement
      :isDisplay="contentsDisplay"
      :class="$style.description_animation"
    >
      <p
        :class="$style.description"
        v-html="descriptions[idName]"
      />
    </DisplayFromLeftElement>
    <div
      v-inview:enter="() => {contentsDisplay = true}"
      :class="$style.visible_marker"
    />
  </div>
</template>

<script>
export default {
  name : 'SectionHeader',
  props: {
    idName: {
      required: true,
      type    : String,
    },
    heading: {
      required: true,
      type    : String,
    },
    transparent: {
      required: false,
      type    : Boolean,
      default : false,
    },
  },
  data() {
    return {
      contentsDisplay: false,
      descriptions   : {
        vision: `
          <span>Geckouは人々が自身の望む道を歩めるよう、</span>
          <span>WEB開発を通じてお手伝いいたします。</span>
        `,
        service: `
          <span>自社のWEBサービス開発の他、</span>
          <span>WEB制作や開発の受託も承っております。</span>
        `,
        information: `
          合同会社Geckouの会社情報です。
        `,
        contact: `
          <span>Geckouに関する質問、</span>
          <span>WEB開発のご相談など、</span>
          <span>お気軽にお問い合わせください。</span>
        `,
      },
    }
  },
  computed: {
    headingFontSize() {
      if (process.client) {
        const windowHeight     = window?.innerHeight
        const headerWidth      = windowHeight / 1.62
        const headingMaxLength = 'INFORMATION'.length
        const letterSpacing    = 1.16
        return Math.floor(headerWidth / headingMaxLength / letterSpacing)
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

.section_header {
  position        : relative;
  display         : flex;
  height          : 100vh;
  flex-direction  : column;
  align-items     : center;
  justify-content : center;
  aspect-ratio    : 1 / 1.62;
  background-color: c.$bgBlack;

  &.transparent {
    margin-top: 1.8rem;
    background-color: transparent;
  }
}

.heading {
  position      : relative;
  padding-bottom: v.$val * 2;
  width         : 100%;
  color         : c.$white;
  font-family   : f.family('english');
  text-align    : center;
  line-height   : 1;

  &::first-letter {
    color: c.$mainColor;
  }

  &::after {
    content         : '';
    position        : absolute;
    left            : 0;
    bottom          : 0;
    display         : block;
    width           : 100%;
    height          : 1px;
    opacity         : 0;
    background-color: rgba(c.$white, .28);
  }

  &.displayed_border {
    &::after {
      opacity: 1;
      animation-name           : displayBorder;
      animation-duration       : 2s;
      animation-timing-function: ease-out;
      animation-fill-mode      : forwards;
    }
  }
}

.description {
  padding        : v.$val * 2 v.$val * 4;
  display        : flex;
  min-height: 64px;
  justify-content: center;
  flex-wrap      : wrap;
  white-space: nowrap;
  text-align: center;
  span {
    width: 100%;
  }
  &_animation {
    transition-delay: .2s;
    span {
      transition-delay: .2s;
    }
  }
}

.visible_marker {
  position: absolute;
  left: 55%;
  width: 1px;
  height: 100vh;
  // background-color: tomato;
}
@keyframes displayBorder {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}
</style>
