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
      />
      <section
        v-for="section in sections"
        :id="section.idName"
        :key="section.idName"
        data-scroll
        data-scroll-section
        :data-scroll-id="section.idName"
      >
        <SectionContainer
          :section="section"
          :progress="progress"
          :scrollStatus="sectionScrollStatus(section.idName)"
        />
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      lmS           : null,
      initialized   : false,
      currentSection: 'top',
      screenStatus  : '',
      scrollStatus  : {},
      progress      : 0,
      sections      : [
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
          idName    : 'information',
          name      : 'INFORMATION',
          component : 'SectionOfInfo',
          background: 'BackgroundBuilding',
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
    this.screenStatus = window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
    window.addEventListener('resize', this.registrationScrollEvent)

    this.$nextTick(() => {
      if (this.screenStatus === 'landscape') {
        this.lmS = new this.$locomotiveScroll({
          el        : document.querySelector('[data-scroll-container]'),
          smooth    : true,
          direction : 'horizontal',
          multiplier: .5,
        })

        this.lmS.on('scroll', args => {
          this.checkIsScreenLandscape()
          const argsCurrentElements = args.currentElements
          const sectionElements     = Object.keys(argsCurrentElements)
            .filter(key => {
              return this.sections.some(section => section.idName === key)
            })
            .reduce((result, key) => {
              result[key] = argsCurrentElements[key]
              return result
            }, {})

          if (Object.keys(sectionElements).length === 1) this.currentSection = Object.keys(sectionElements)[0]
          this.scrollStatus = args.currentElements
          this.progress = args.scroll.x / args.limit.x * 100
        })
      }
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
    sectionScrollStatus(sectionIdName) {
      return this.scrollStatus?.[sectionIdName] || {}
    },
  },
}
</script>
<style lang="scss" module>
@use '~/assets/scss/color' as c;

.frontpage {
  overscroll-behavior-y: none;
  overflow             : hidden;
  background-color     : c.$black;
}
</style>
