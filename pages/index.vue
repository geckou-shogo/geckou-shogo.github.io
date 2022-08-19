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
        v-inview:enter="
          () => {
            currentSection = section.idName;
          }
        "
        class="section"
        data-scroll-section
      >
        <SectionContainer :section="section" />
      </section>
    </div>
  </main>
</template>

<script>
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'

export default {
  data() {
    return {
      lmS           : null,
      initialized   : false,
      currentSection: 'top',
      screenStatus  : '',
      sections      : [
        {
          idName   : 'top',
          name     : 'TOP',
          component: 'SectionOfTop',
          color    : 'linear-gradient(to bottom, #192c38, #0b1926 30%,  #0a1d28);',
        },
        {
          idName   : 'vision',
          name     : 'VISION',
          component: 'SectionOfVision',
          color    : 'linear-gradient(to bottom, #0a1d28, #192c38 30%,  #15324f);',

        },
        {
          idName   : 'service',
          name     : 'SERVICE',
          component: 'SectionOfService',
          color    : 'linear-gradient(to bottom, #192c38, #15324f 34%,  #31527b);',
        },
        {
          idName   : 'information',
          name     : 'INFORMATION',
          component: 'SectionOfInfo',
          color    : 'linear-gradient(to bottom, #31527b, #246495 66%,  #086c92);',

        },
        {
          idName   : 'contact',
          name     : 'CONTACT',
          component: 'SectionOfContact',
          color    : 'linear-gradient(to bottom, #31527b, #246495 66%,  #086c92);',
        },
      ],
    }
  },
  mounted() {
    this.screenStatus = window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
    window.addEventListener('resize', this.registrationScrollEvent)

    this.$nextTick(() => {
      this.locomotiveScroll()
      this.initialized = true
    })
  },
  methods: {
    registrationScrollEvent() {
      window.addEventListener('scroll', this.checkIsScreenLandscape)
    },
    checkIsScreenLandscape() {
      const currentScreenStatus =
        window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
      if (this.screenStatus !== currentScreenStatus) {
        location.reload()
      } else {
        window.removeEventListener('scroll', this.checkIsScreenLandscape)
      }
    },
    locomotiveScroll() {
      this.lmS = new this.LocomotiveScroll({
        el        : document.querySelector('[data-scroll-container]'),
        smooth    : true,
        direction : 'horizontal',
        multiplier: 0.5,
      })
    },
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
