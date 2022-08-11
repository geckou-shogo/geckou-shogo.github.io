<template>
  <main
    :class="$style.frontpage"
  >
  <LoadingScreen 
    :v-if="loading"
  />
    <GlobalNavigation
      :sections="sections"
      :currentSection="currentSection"
    />
    <div
      id="sectionsContainer"
      :class="[$style.sections_container, loading ? '' : '$style.show']"
      :style="{width: `${sections.length * 100}%`}"
    >
      <section
        v-for="section in sections"
        :id="section.idName"
        :key="section.idName"
        v-inview:enter="() => {currentSection = section.idName}"
        class="section"
      >
        <SectionContainer
          :section="section"
        />
      </section>
    </div>
  </main>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
export default {
  data() {
    return {
      loading        : true,
      currentSection: 'top',
      screenStatus  : '',
      sections      : [
        {
          idName   : 'top',
          name     : 'TOP',
          component: 'SectionOfTop',
        },
        {
          idName   : 'vision',
          name     : 'VISION',
          component: 'SectionOfVision',
        },
        {
          idName   : 'service',
          name     : 'SERVICE',
          component: 'SectionOfService',
        },
        {
          idName   : 'information',
          name     : 'INFORMATION',
          component: 'SectionOfInfo',
        },
        {
          idName   : 'contact',
          name     : 'CONTACT',
          component: 'SectionOfContact',
        },
      ],
      isShowMoon: false,
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
    this.screenStatus = window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
    window.addEventListener('resize', this.registrationScrollEvent)

    const sectionsContainer = document.querySelector('#sectionsContainer')
    const sections = gsap.utils.toArray('.section')

    const tween = gsap.to(sections, {
      xPercent     : -100 * (sections.length - 1),
      ease         : 'none',
      scrollTrigger: {
        trigger: '#sectionsContainer',
        pin    : true,
        start  : 'top top',
        scrub  : true,
        // 要調整
        // snap: {
        //   snapTo: 1 / (sections.length - 1),
        //   inertia: false,
        //   duration: {min: 0.1, max: 0.1}
        // },
        end    : () => `+=${sectionsContainer.offsetWidth - innerWidth}`,
      },
    })

    document.querySelectorAll('.anchor').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault()
        const targetElem = document.querySelector(e.target.getAttribute('href'))
        let y = targetElem
        if (targetElem && sectionsContainer === targetElem.parentElement) {
          const totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start
          const totalMovement = (sections.length - 1) * targetElem.offsetWidth
          y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll)
        }
        gsap.to(window, {
          scrollTo: {
            y,
            autoKill: false,
          },
          duration: 1,
        })
      })
    })

    sections.forEach(section => {
      const target = document.querySelector(`#nav-${section.id}`)
      ScrollTrigger.create({
        trigger    : section,
        start      : `top top-=${section.offsetLeft - 1}`,
        end        : `+=${section.offsetWidth / 2}`,
        toggleClass: {
          targets  : target,
          className: 'current',
        },
      })
    })
  },
  methods: {
    registrationScrollEvent() {
      window.addEventListener('scroll', this.checkIsScreenLandscape)
    },
    checkIsScreenLandscape() {
      const currentScreenStatus = window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
      if (this.screenStatus !== currentScreenStatus) { location.reload() } else { window.removeEventListener('scroll', this.checkIsScreenLandscape) }
    },
    showMoon() {
      this.isShowMoon = true
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

.sections_container {
  display  : flex;
  height   : 100vh;
  flex-wrap: nowrap;
  overflow : hidden;
  opacity: 0;
  &.show {
    opacity: 1;
  }

  > * {
    position: relative;
  }
}
</style>
