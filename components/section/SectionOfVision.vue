<template>
  <div
    :class="$style.section"
  >
    <div
      v-inview:enter="show"
      :class="$style.show_marker"
    />
    <div
      v-inview:enter="rain"
      :class="$style.rain_marker"
    />
    <div
      :class="$style.section_content"
    >
      <RainScreen
        :inView="screen"
        :class="$style.vision_rain"
      />
      <div
        :class="$style.content"
      >
        <div
          :class="$style.content_inner"
        >
          <div :class="$style.content_box">
            <LightCircle
              :htmlString="`
                合同会社Geckouは、<br>
                月明かりが、暗闇で迷う人を照らして導くように、人々の助けとなれるよう、名づけられました。`
              "
            />
          </div>
          <div :class="$style.content_box">
            <LightCircle
              :htmlString="`
                エンタテインメントや娯楽といった
                付加価値の提供だけではなく、
                WEBサービスや、WEB開発の効率化により、悩みや不満を解消することで、
                希望を叶えられるよう応援いたします。
              `"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'SectionVision',
  props: {
    section: {
      required: true,
      type    : Object,
    },
  },
  data() {
    return {
      screen: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.show()
    })
  },
  methods: {
    show() {
      this.$emit('viewInScreen')
    },
    rain() {
      this.screen = true
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;
.section {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-image: url(~/assets/img/svg/forest.svg);
    background-position: 50% 20%;
    mix-blend-mode: soft-light;
  }
}
//雨のアニメーションを止める要素
.rain_marker {
  position: absolute;
  right: -100px;
  width: 2px;
  height: 100vh;
}

.vision_rain {
  position: absolute;
}

.content {
  position: relative;
  height: 100vh;
  z-index: v.zIndex('contents');
  &_inner {
    margin: 10rem 5rem 10rem 5rem;
    display: flex;
    gap: 0 10rem;
  }
  &_box {
    position: relative;
    &:nth-of-type(2) {
      margin-top: 3em;
    }
  }
}

</style>
