<template>
  <main :class="$style.frontpage">
    <LoadingScreen
      :initialized="initialized"
    />
    <div
      :class="[ $style.sections_container, initialized ? $style.show : '']"
      data-scroll-container
    >
      <GlobalNavigation
        :sections="sections"
        :currentSection="currentSection"
        :sectionElements="sectionElements"
        :progress="progress"
      />
      <section
        v-for="section in sections"
        :id="section.idName"
        :key="section.idName"
        data-scroll
        data-scroll-section
        :data-scroll-id="section.idName"
        :class="$style.section"
      >
        <SectionContainer
          :section="section"
          :progress="progress"
          :scrollStatus="scrollStatus"
          :sectionStatus="sectionStatus(section.idName)"
          :screenStatus="screenStatus"
          :currentSection="currentSection"
        />
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      lmS            : null,
      initialized    : false,
      currentSection : 'top',
      screenStatus   : '',
      scrollStatus   : {},
      currentElements: {},
      sectionElements: {},
      progress       : 0,
      sections       : [
        {
          idName    : 'top',
          name      : 'TOP',
          component : 'SectionOfTop',
          background: '',
        },
        {
          idName    : 'vision',
          name      : 'VISION',
          component : 'SectionOfVision',
          background: 'BackgroundForest',

        },
        {
          idName    : 'service',
          name      : 'SERVICE',
          component : 'SectionOfService',
          background: 'BackgroundTown',
        },
        {
          idName    : 'facts',
          name      : 'FACTS',
          component : 'SectionOfFacts',
          background: 'BackgroundCity',
        },
        {
          idName    : 'contact',
          name      : 'CONTACT',
          component : 'SectionOfContact',
          background: '',
        },
      ],
    }
  },
  mounted() {
    this.initialized = true
    this.screenStatus = window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
    window.addEventListener('resize', this.registrationScrollEvent)

    this.$nextTick(() => {
      this.lmS = new this.$locomotiveScroll({
        el        : document.querySelector('[data-scroll-container]'),
        smooth    : true,
        direction : this.screenStatus === 'landscape' ? 'horizontal' : 'vertical',
        multiplier: .5,
      })
      this.lmS.on('scroll', args => {
        this.checkIsScreenLandscape()
        this.currentElements = args.currentElements
        this.scrollStatus = args.scroll
        this.sectionElements = Object.keys(this.currentElements)
          .filter(key => {
            return this.sections.some(section => section.idName === key)
          })
          .reduce((result, key) => {
            result[key] = this.currentElements[key]
            return result
          }, {})
        if (Object.keys(this.sectionElements).length) this.currentSection = Object.keys(this.sectionElements)[0]
        const direction = this.screenStatus === 'landscape' ? 'x' : 'y'
        this.progress = args.scroll?.[direction] / args.limit?.[direction] * 100 || 0
      })
      this.initialized = true
    })
  },
  methods: {
    registrationScrollEvent() {
      window.addEventListener('scroll', this.checkIsScreenLandscape)
    },
    checkIsScreenLandscape() {
      const currentScreenStatus = window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
      if (this.screenStatus !== currentScreenStatus) location.reload()
      else window.removeEventListener('scroll', this.checkIsScreenLandscape)
    },
    sectionStatus(sectionIdName) {
      return this.currentElements?.[sectionIdName] || {}
    },
  },
}
</script>
<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;

.frontpage {
  overscroll-behavior-y: none;
  overflow             : hidden;

  @include v.media('mobile') {
    flex-direction  : column;
    background-image: c.$backgroundGradient;
  }
}

.section {
  overflow: hidden;
}
</style>
