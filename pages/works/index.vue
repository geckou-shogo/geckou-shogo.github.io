<template>
  <main :class="$style.container">
    <section :class="$style.section">
      <header :class="$style.section__header">
        <Heading
          :heading="'WORKS'"
          :description="'活動内容'"
          :class="$style.section__heading"
        />
      </header>
      <div :class="$style.section__contents">
        <WorksList :articles="works" />
      </div>
    </section>
    <GlobalFooter />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import sal from 'sal.js'

@Component
export default class IndexPage extends Vue {
  async asyncData({ $content }: { $content: any }): Promise<{ works: [] }> {
    const works: [] = await $content('works', { deep: true }).fetch()

    return {
      works,
    }
  }

  mounted() {
    sal()
  }
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;

.section {
  min-height: 100vh;
  width: 100%;
  max-width: v.$desktopScreenSize;
  margin: auto;
  padding: v.$val * 2;
  position: relative;
  z-index: v.zIndex('contents');

  @include v.mediaScreen('mobile') {
    margin-bottom: v.$val * 6;
  }

  &__header {
    padding: v.$val * 2;
    margin-bottom: v.$val * 4;

    @include v.mediaScreen('mobile') {
      margin-bottom: 0;
    }
  }

  &__contents {
    padding: v.$val * 2;
  }
}
</style>
