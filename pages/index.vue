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
      progress      : 0,
      sections      : [
        {
          idName    : 'top',
          name      : 'TOP',
          component : 'SectionOfTop',
          color     : 'linear-gradient(to bottom, #192c38, #0b1926 30%,  #0a1d28);',
          background: '',
        },
        {
          idName    : 'vision',
          name      : 'VISION',
          component : 'SectionOfVision',
          color     : 'linear-gradient(to bottom, #0a1d28, #192c38 30%,  #15324f);',
          background: 'BackgroundForest',

        },
        {
          idName    : 'service',
          name      : 'SERVICE',
          component : 'SectionOfService',
          color     : 'linear-gradient(to bottom, #192c38, #15324f 34%,  #31527b);',
          background: 'BackgroundTown',
        },
        {
          idName    : 'information',
          name      : 'INFORMATION',
          component : 'SectionOfInfo',
          color     : 'linear-gradient(to bottom, #31527b, #246495 66%,  #086c92);',
          background: 'BackgroundBuilding',
        },
        {
          idName    : 'contact',
          name      : 'CONTACT',
          component : 'SectionOfContact',
          color     : 'linear-gradient(to bottom, #31527b, #246495 66%,  #086c92);',
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

        // this.backgroundScroll()
        this.lmS.on('scroll', args => {
          this.checkIsScreenLandscape()
          if (Object.keys(args.currentElements).length === 1) this.currentSection = Object.keys(args.currentElements)[0]
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
    // backgroundScroll() {
    //   const elm = document.querySelectorAll('.parallaxbackground')
    //   this.lmS.start(elm, {
    //     initPosition: { x: 0, y: 1000 },
    //     duration    : 600,
    //     easing      : [0.25, 0.00, 0.35, 1.00],
    //   })
    // },
  },
}
</script>
<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.frontpage {
  overscroll-behavior-y: none;
  overflow             : hidden;
  background-color     : c.$black;
}
</style>
