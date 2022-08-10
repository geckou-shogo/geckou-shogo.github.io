<template>
  <main
    :class="$style.frontpage"
  >
    <GradationBackground
      :class="$style.screen"
      :sections="sections"
    />
    <GlobalNavigation
      :sections="sections"
    />
    <GeckouMoon
      v-if="isShowMoon"
    />
    <div
      id="sectionsContainer"
      :class="$style.sections_container"
      :style="{width: `${sections.length * 100}%`}"
    >
      <section
        v-for="section in sections"
        :id="section.id"
        :key="section.id"
        v-inview:enter="() => {currentSection = section.id}"
        :class="$style.section"
        class="section"
      >
        <component
          :is="section.component"
          :section="section"
          @viewInScreen="showMoon"
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
      currentSection: 'top',
      screenStatus  : '',
      sections      : [
        {
          id       : 'top',
          name     : 'TOP',
          component: 'SectionTop',
          color    : 'linear-gradient(to bottom, #192c38, #0b1926 30%,  #0a1d28);',
        },
        {
          id       : 'vision',
          name     : 'VISION',
          component: 'SectionVision',
          color    : 'linear-gradient(to bottom, #0a1d28, #192c38 30%,  #15324f);',
        },
        {
          id       : 'service',
          name     : 'SERVICE',
          component: 'SectionService',
          color    : 'linear-gradient(to bottom, #192c38, #15324f 34%,  #31527b);',
        },
        {
          id       : 'information',
          name     : 'INFORMATION',
          component: 'SectionInfo',
          color    : 'linear-gradient(to bottom, #31527b, #246495 66%,  #31527b);',
        },
        {
          id       : 'contact',
          name     : 'CONTACT',
          component: 'SectionContact',
          color    : '#B5BBC9',
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
    const sections = gsap.utils.toArray(`.${this.$style.section}`)
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
}

.sections_container {
  height   : 100vh;
  display  : flex;
  flex-wrap: nowrap;
  overflow : hidden;
}

.section {
  position: relative;
}

</style>
