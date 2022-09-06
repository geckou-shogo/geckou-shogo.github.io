<template>
  <div
    :class="$style.container"
  >
    <div
      :class="$style.container__top"
    >
      <h2
        :class="[$style.heading, contentsDisplay ? $style.displayed_border: '']"
      >
        <DisplayFromLeftElement
          :isDisplay="contentsDisplay"
        >
          {{ heading }}
        </DisplayFromLeftElement>
      </h2>
    </div>
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
        facts: `
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
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.container {
  position        : relative;
  display         : flex;
  height          : 100vh;
  flex-direction  : column;
  aspect-ratio    : 1 / 1.62;
  background-color: c.$black;
  position        : relative;
  z-index         : v.zIndex('contents');

  @include v.media('portrait') {
    height : auto;
    padding: v.$val * 2 0;
  }

  &__top {
    flex           : 0 0 50%;
    display        : flex;
    flex-direction : column;
    justify-content: flex-end;
  }
}

.heading {
  position   : relative;
  padding    : v.$val * 2;
  width      : 100%;
  color      : c.$white;
  font-size  : f.size('heading');
  font-family: f.family('english');
  text-align : center;
  line-height: 1;

  &::first-letter {
    color: c.$main;
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
    background-color: c.$border;
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
  justify-content: center;
  flex-wrap      : wrap;
  text-align     : center;
}

.visible_marker {
  position: absolute;
  left    : 55%;
  width   : 1px;
  height  : 100vh;
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
