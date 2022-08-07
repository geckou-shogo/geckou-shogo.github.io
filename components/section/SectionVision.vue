<template>
  <SectionContainer
    :section="section"
  >
    <SectionHeader
      :heading="section.name"
    >
      <p :class="$style.description">
        Geckouは人々が自身の望む道を歩めるよう<br>
        WEB開発を通じてお手伝いいたします。
      </p>
    </SectionHeader>
    <div
      v-inview:enter="show"
      :class="$style.show_marker"
    />
    <div
      v-inview:enter="rain"
      :class="$style.rain_marker"
    />
    <RainScreen
      :inView="screen"
    />
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

.section {
  position: relative;
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  h2 {
    font-size: 100px;
    color    : c.$white;

    @include v.mq(md) {
      font-size: 40px;
    }
  }
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

</style>
