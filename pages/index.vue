<template>
  <main id="frontpage" :class="$style.container">
    <Intro :class="$style.intro" :container-id="'frontpage'" />
    <section v-if="false" :class="$style.section">
      <header :class="$style.section__header">
        <Heading
          :heading="'BLOG'"
          :description="'日々のログを書き溜めます'"
          :class="$style.section__heading"
        />
      </header>
      <div :class="$style.section__contents">
        <ArticleList :articles="contents.articlesArray" />
        <div :class="$style.section__contents__link">
          <NuxtLink to="/blog/">
            <ButtonLink :text="'さらに記事を読む'" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section :class="$style.section">
      <header :class="$style.section__header">
        <Heading
          :heading="'WORKS'"
          :description="'活動内容'"
          :class="$style.section__heading"
        />
      </header>
      <div :class="$style.section__contents">
        <WorksList :articles="contents.worksArray" />
        <div :class="$style.section__contents__link">
          <NuxtLink to="/works/">
            <ButtonLink :text="'さらに事例を見る'" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section :class="$style.section">
      <header :class="$style.section__header">
        <Heading
          :heading="'COMAPNY'"
          :description="'会社概要'"
          :class="$style.section__heading"
        />
      </header>
      <div :class="$style.section__contents">
        <CompanyList />
      </div>
    </section>
    <section>
      <header :class="$style.section__header">
        <Heading
          :heading="'CONTACT'"
          :description="'お問い合わせ'"
          :class="$style.section__heading"
        />
      </header>
      <div :class="$style.section__contents">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSewpIVsGpZVR3cK9RIflcWIs5J9bFedXIgsqylcxE8N7o0Ybw/viewform?embedded=true"
          width="100%"
          height="733"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >読み込んでいます…</iframe
        >
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
  async asyncData({ $content }: { $content: any }): Promise<{ contents: any }> {
    const query: [] = await $content('blog', { deep: true })
      .sortBy('date', 'desc')
      .limit(2)
      .fetch()
    const articles: [] = query.sort((a: any, b: any) => {
      return new Date(a.date) > new Date(b.date) ? -1 : 1
    })
    const works: [] = await $content('works', { deep: true }).limit(6).fetch()
    const contents = {
      articlesArray: articles,
      worksArray: works,
    }

    return {
      contents,
    }
  }

  mounted() {
    sal()
  }
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;

.container {
  overflow: scroll;
  height: 100vh;
}

.section {
  min-height: 100vh;
  width: 100%;
  max-width: v.$desktopScreenSize;
  margin: 0 auto v.$val * 8 auto;
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

    &__link {
      display: flex;
      justify-content: center;
      margin-top: v.$val * 12;

      @include v.mediaScreen('mobile') {
        width: 100%;
        margin-top: v.$val * 6;

        > a {
          width: 100%;
        }
      }
    }
  }
}
</style>
