<template>
  <main :class="$style.container">
    <section :class="$style.section">
      <header :class="$style.section__header">
        <Heading
          :heading="'BLOG'"
          :description="'日々のログを書き溜めます'"
          :class="$style.section__heading"
        />
      </header>
      <div :class="$style.section__contents">
        <ArticleList :articles="articles" />
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
  async asyncData({ $content }: { $content: any }): Promise<{ articles: [] }> {
    const query: [] = await $content('blog', { deep: true })
      .sortBy('date', 'desc')
      .fetch()
    const articles: [] = query.sort((a: any, b: any) => {
      return new Date(a.date) > new Date(b.date) ? -1 : 1
    })

    return {
      articles,
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
  margin-bottom: v.$val * 12;
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
