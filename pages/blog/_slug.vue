<template>
  <div>
    <ArticleHeader
      :title="page.title"
      :description="page.description"
      :date="page.date"
      :categories="page.categories"
      :thumbnail="page.thumbnail"
      :class="$style.header"
    />
    <main :class="$style.main">
      <div :class="$style['column--center']">
        <nuxt-content id="nuxtContent" :document="page" />
      </div>
      <div :class="$style['column--sub']">
        <TableOfContents
          :heading-array="headingArray"
          :class="$style.table_of_contents"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class SlugPage extends Vue {
  async asyncData({
    $content,
    params,
  }: {
    $content: any
    params: any
  }): Promise<{ page: any }> {
    const page = await $content('blog', params.slug || 'index').fetch()
    return { page }
  }

  layout() {
    return 'article'
  }

  data() {
    return {
      headingArray: [],
    }
  }

  mounted() {
    const nuxtContent = document.getElementById('nuxtContent')
    this.$data.headingArray = Array.from(
      nuxtContent!.getElementsByTagName('h2')
    )
  }
}
</script>

<style lang="scss" module>
@use '~/assets/scss/color' as c;
@use '~/assets/scss/value' as v;

.header {
  padding: v.$val * 4;

  @include v.mediaScreen('mobile') {
    padding: 0;
  }
}

.main {
  display: flex;
  width: 100%;
  max-width: v.$tabletWidthScreenSize;
  margin: auto;
  padding: v.$val * 2;

  @include v.mediaScreen('mobile') {
    flex-direction: column-reverse;
    padding: 0;
  }
}

.column {
  padding: v.$val * 2;

  &--sub {
    @extend .column;
    flex: 1 1 18%;
  }

  &--center {
    @extend .column;
    flex: 1 0 64%;

    @include v.mediaScreen('mobile') {
      width: 100%;
    }
  }
}

.table_of_contents {
  position: sticky;
  top: v.$val * 2;

  @include v.mediaScreen('mobile') {
    margin: 0 v.$val * 2;
  }
}
</style>
