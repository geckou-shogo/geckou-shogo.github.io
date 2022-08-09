<template>
  <div>
    <SectionContainer
      :section="section"
    >
      <SectionHeader
        :heading="section.name"
        :class="[$style.contact_header, transparent ? $style.transparent : '']"
        :transparent="true"
      >
        <p :class="$style.description">
          Geckouに関する質問、<br>
          WEB開発のご相談など、<br>
          お気軽にお問い合わせください。
        </p>
      </SectionHeader>
    </SectionContainer>
  </div>
</template>

<script>
export default {
  name : 'SectionContact',
  props: {
    section: {
      required: true,
      type    : Object,
      default : () => { },
    },
  },
  data() {
    return {
      transparent: true,
    }
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.contact_header.transparent {
  background-color: transparent;
}
</style>
