<template>
  <div>
    <WorksHeader
      :title="page.title"
      :categories="page.categories"
      :thumbnail="page.thumbnail"
      :class="$style.header"
    />
    <main :class="$style.main">
      <div :class="$style.column">
        <nuxt-content id="nuxtContent" :document="page" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class SlugPage extends Vue {
  async asyncData ({ $content, params }: { $content: any, params: any }): Promise<{ page: any }> {
    const page = await $content('works', params.slug || 'index').fetch()
    return { page }
  }

  layout () {
    return 'article'
  }
}
</script>

<style lang="scss" module>
@use '~/assets/scss/color' as c;
@use '~/assets/scss/value' as v;

.header {
  padding: v.$val * 4;

  @include v.mediaScreen( 'mobile' ) {
    padding: v.$val * 2;
  }
}

.main {
  width    : 100%;
  max-width: v.$tabletWidthScreenSize;
  margin   : auto;
  padding  : v.$val * 2;

  @include v.mediaScreen( 'mobile' ) {
    padding: 0;
  }
}

.column {
  padding: v.$val * 2;
}

</style>
