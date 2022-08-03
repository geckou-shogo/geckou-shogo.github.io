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
  </SectionContainer>
</template>

<script>
export default {
  name : 'SectionVision',
  props: {
    section: {
      required: true,
      type    : Object,
      default : () => {},
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.section {
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

</style>
