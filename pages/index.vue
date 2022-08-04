<template>
  <main
    :class="$style.frontpage"
  >
    <GradationBackground
      :class="$style.screen"
      :sectionDatas="sections"
    />
    <GlobalNavigation
      :sections="sections"
    />
    <GeckouMoon
      :sections="sections"
      v-if="!sections.component.`${SectionTop}`"
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
        :class="$style.section"
      >
        <component
          :is="section.component"
          :section="section"
        />
      </section>
    </div>
  </main>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger, ScrollToPlugin, } from 'gsap/all'
export default {
  data() {
    return {
      screenStatus: '',
      sections    : [
        {
          id         : 'top',
          name       : 'TOP',
          description: 'テキストテキストテキストテキスト',
          component  : 'SectionTop',
          color      : 'linear-gradient(to bottom, #192c38, #0b1926 30%,  #0a1d28);',
        },
        {
          id         : 'vision',
          name       : 'VISION',
          description: 'テキストテキストテキストテキスト',
          component  : 'SectionVision',
          color      : 'linear-gradient(to bottom, #0a1d28, #192c38 30%,  #15324f);',
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
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger,)
    this.screenStatus = window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
    window.addEventListener('resize', this.registrationScrollEvent,)
    const panelsContainer = document.querySelector('#sectionsContainer',)
    const panels = gsap.utils.toArray(`.${this.$style.section}`,)
    const tween = gsap.to(panels, {
      xPercent     : -100 * (panels.length - 1),
      ease         : 'none',
      scrollTrigger: {
        trigger: '#sectionsContainer',
        pin    : true,
        start  : 'top top',
        scrub  : true,
        // snap: {
        //   snapTo: 1 / (panels.length - 1),
        //   inertia: false,
        //   duration: {min: 0.1, max: 0.1}
        // },
        end    : () => `+=${panelsContainer.offsetWidth - innerWidth}`,
      },
    },)
    document.querySelectorAll('.anchor',).forEach((anchor,) => {
      anchor.addEventListener('click', (e,) => {
        e.preventDefault()
        const targetElem = document.querySelector(e.target.getAttribute('href',),)
        let y = targetElem
        if (targetElem && panelsContainer === targetElem.parentElement) {
          const totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start
          const totalMovement = (panels.length - 1) * targetElem.offsetWidth
          y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll,)
        }
        gsap.to(window, {
          scrollTo: {
            y,
            autoKill: false,
          },
          duration: 1,
        },)
      },)
    },)

    panels.forEach((sct,) => {
      const target = document.querySelector(`#navi-${sct.id}`,)
      ScrollTrigger.create({
        trigger    : sct,
        start      : `top top-=${sct.offsetLeft - 1}`,
        end        : `+=${sct.offsetWidth / 2}`,
        toggleClass: {
          targets  : target,
          className: 'current',
        },
      },)
    },)
  },
  methods: {
    registrationScrollEvent() {
      window.addEventListener('scroll', this.checkIsScreenLandscape,)
    },
    checkIsScreenLandscape() {
      const currrentScreenStatus = window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
      if (this.screenStatus !== currrentScreenStatus) { location.reload() } else { window.removeEventListener('scroll', this.checkIsScreenLandscape,) }
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
  color                : c.$white;
}
.sections_container {
  height   : 100vh;
  display  : flex;
  flex-wrap: nowrap;
  overflow : hidden;
}

.section {
  position: relative;
  display : flex;
  width   : 100%;
  height  : 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
