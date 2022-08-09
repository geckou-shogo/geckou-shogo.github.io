<template>
  <SectionContainer
    :section="section"
  >
    <div
      v-inview:enter="show"
      :class="$style.show_marker"
    />
    <div
      v-inview:enter="rain"
      :class="$style.rain_marker"
    />
    <SectionHeader
      :heading="section.name"
    >
      <p>
        Geckouは人々が自身の望む道を歩めるよう<br>
        WEB開発を通じてお手伝いいたします。
      </p>
    </SectionHeader>
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
            <p :class="$style.content_description">
              合同会社Geckouは、<br>
              月明かりが、暗闇で迷う人を<br>
              照らして導くように、<br>
              人々の助けとなれるよう、<br>
              名づけられました。
            </p>
          </div>
          <div :class="$style.content_box">
            <p :class="$style.content_description">
              合同会社Geckouは、<br>
              月明かりが、暗闇で迷う人を<br>
              照らして導くように、<br>
              人々の助けとなれるよう、<br>
              名づけられました。
            </p>
          </div>
          <div :class="$style.content_box">
            <p :class="$style.content_description">
              合同会社Geckouは、<br>
              月明かりが、暗闇で迷う人を<br>
              照らして導くように、<br>
              人々の助けとなれるよう、<br>
              名づけられました。
            </p>
          </div>
          <div :class="$style.content_box">
            <p :class="$style.content_description">
              合同会社Geckouは、<br>
              月明かりが、暗闇で迷う人を<br>
              照らして導くように、<br>
              人々の助けとなれるよう、<br>
              名づけられました。
            </p>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
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
    },)
  },
  methods: {
    show() {
      this.$emit('viewInScreen',)
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

.section_content {
  position: relative;
}

.show_marker {
  position: absolute;
  right: 0;
  width: 2px;
  height: 100vh;
  background: tomato;
}

.rain_marker {
  position: absolute;
  right: 10px;
  width: 2px;
  height: 100vh;
  background: c.$blue;
}

.vision_rain {
  position: absolute;
}

.content {
  width: 100vw;
  height: 100vh;
  &_inner {
    position: absolute;
    display: flex;
    top: 50%;
  }

}

</style>
