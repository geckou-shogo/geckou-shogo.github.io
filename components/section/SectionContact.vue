<template>
  <div>
    <SectionContainer
      :section="section"
    >
      <SectionHeaderTransparent
        :heading="section.name"
        :class="$style.contact_header"
      >
        <p :class="$style.description">
          Geckouに関する質問、<br>
          WEB開発のご相談など、<br>
          お気軽にお問い合わせください。
        </p>
      </SectionHeaderTransparent>
    </SectionContainer>
  </div>
</template>

<script>
import SectionHeaderTransparent from './SectionHeaderTransparent.vue'
export default {
  name      : 'SectionContact',
  components: { SectionHeaderTransparent, },
  props     : {
    section: {
      required: true,
      type    : Object,
      default : () => { },
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.contact_header {
  background-color: transparent;
}
</style>
