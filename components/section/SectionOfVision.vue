<template>
  <div
    :class="$style.container"
  >
    <div
      :class="$style.content"
      data-scroll
      data-scroll-speed="1"
    >
      <SpotlightContainer>
        <SquareText
          :htmlString="`合同会社Geckouは、月明かりが、暗闇で迷う人を照らして導くように、人々の助けとなれるよう、名づけられました。`"
        />
      </SpotlightContainer>
    </div>
    <div
      :class="$style.content"
      data-scroll
      data-scroll-speed="3"
    >
      <SpotlightContainer>
        <SquareText
          :htmlString="`エンタテインメントや娯楽といった付加価値の提供だけではなく、<br>WEBサービスや、WEB開発の効率化により、悩みや不満を解消することで、希望を叶えられるよう応援いたします。`"
        />
      </SpotlightContainer>
    </div>
  </div>
</template>

<script>
export default {
  name : 'SectionOfVision',
  props: {
    section: {
      required: true,
      type    : Object,
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.container {
  padding: 0 v.$val * 51 0 v.$val * 32;
  height : 100%;
  display: flex;
  gap    : v.$val * 20;
  height : 100%;

  @include v.media('portrait') {
    padding       : v.$val * 10;
    flex-direction: column;
    align-items   : center;
    gap           : v.$val * 4 0;
  }
}

.content {
  flex    : 0 0 auto;
  position: relative;

  > * {
    position: relative;
    left    : 0;
  }

  &:first-child {
    > * {
      top: 32%;
    }
  }

  &:last-child {
    > * {
      top: 24%;
    }
  }

  @include v.media ('portrait') {
    &:first-child,
    &:last-child {
      > * {
        top: 0;
      }
    }
  }
}
</style>
