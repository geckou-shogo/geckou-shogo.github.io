<template>
  <main
    id="frontpage"
    :class="$style.frontpage"
  >
    <LoadingScreen
      :initialized="initialized"
    />
    <div
      v-if="$store.state.screen === 'portrait'"
      :class="$style.portrait_background"
      :style="{backgroundPositionY: `${backgroundPositionY}%`}"
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
        @toggleNav="toggleMobileNav"
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
          :currentSection="currentSection"
        />
      </section>
    </div>
  </main>
</template>

<script>

export default {
  name: 'TopPage',
  data() {
    return {
      lmS                : null,
      initialized        : false,
      currentSection     : 'top',
      scrollStatus       : {},
      currentElements    : {},
      sectionElements    : {},
      progress           : 0,
      backgroundPositionY: 0,
      mobileScrollY      : 0,
      sections           : [
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
  watch: {
    progress(newValue) {
      if (newValue > this.backgroundPositionY) this.backgroundPositionY = newValue
    },
  },
  mounted() {
    this.initialized = true
    const screenStatus = window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
    this.$store.commit('addScreenState', screenStatus)
    window.addEventListener('resize', this.registrationScrollEvent)

    this.$nextTick(() => {
      this.lmS = new this.$locomotiveScroll({
        el        : document.querySelector('[data-scroll-container]'),
        smooth    : true,
        direction : screenStatus === 'landscape' ? 'horizontal' : 'vertical',
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
        if (Object.keys(this.sectionElements).length) {
          this.currentSection = Object.keys(this.sectionElements)
            .sort((a, b) => {
              const order = this.sections.map(section => section.idName)
              return order.indexOf(a) - order.indexOf(b)
            })[0]
        }
        const direction = screenStatus === 'landscape' ? 'x' : 'y'
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
      const screenStatus = this.$store.state.screen
      if (screenStatus !== currentScreenStatus) location.reload()
      else window.removeEventListener('scroll', this.checkIsScreenLandscape)
    },
    sectionStatus(sectionIdName) {
      return this.currentElements?.[sectionIdName] || {}
    },
    toggleMobileNav(state) {
      const frontPage = document.getElementById('frontpage')
      const pageScrollY = window.scrollY
      console.log(pageScrollY)

      if (state === true) {
        frontPage.style.position = 'fixed'
        frontPage.style.top = this.mobileScrollY
      } else {
        frontPage.style.position = 'static'
        window.scrollTo(pageScrollY, 0)
      }
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

  @include v.media('portrait') {
    flex-direction  : column;
  }
}

.section {
  overflow: hidden;
}

.portrait_background {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-size : 100% 1400vh;
  background-image: c.$backgroundGradient;
}
</style>
