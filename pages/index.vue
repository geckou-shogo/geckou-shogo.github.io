<template>
  <main
    :class="$style.frontpage"
  >
    <LoadingScreen
      :vIf="isShow"
      :class="[$style.loading, isShow ? '' : $style.hide]"
    />
    <!-- <GradationBackground
      :sections="sections"
    /> -->
    <GlobalNavigation
      :sections="sections"
      :currentSection="currentSection"
    />
    <div
      id="sectionsContainer"
      :class="[$style.sections_container, isShow ? '' : $style.show]"
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
      isShow        : true,
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
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
    this.screenStatus = window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
    window.addEventListener('resize', this.registrationScrollEvent)

    const sectionsContainer = document.querySelector('#sectionsContainer')
    const sections = gsap.utils.toArray('.section')
    const screen = gsap.utils.toArray('.screen_item')
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
    // gsap.to(screen, {
    //   yPercent     : -100 * (sections.length - 1),
    //   ease         : 'none',
    //   scrollTrigger: {
    //     trigger: 'sectionsContainer',
    //     pin    : true,
    //     start  : 'top top',
    //     scrub  : true,
    //     // 要調整
    //     // snap: {
    //     //   snapTo: 1 / (sections.length - 1),
    //     //   inertia: false,
    //     //   duration: {min: 0.1, max: 0.1}
    //     // },
    //     end    : () => `+=${sectionsContainer.offsetWidth - innerWidth}`,
    //   },
    // })
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
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = false
      }, 3000)
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

.loading {
  transition: all 1s;
  &.hide {
    opacity: 0;
    visibility: hidden;
    z-index: v.zIndex('off');
  }
}

.sections_container {
  display  : flex;
  height   : 100vh;
  flex-wrap: nowrap;
  overflow : hidden;
  opacity: 0;
  transition: all 1s;
  background-image: linear-gradient(
    to bottom,
    rgba(25, 44, 56, 1) 6.6%,
    rgba(11, 25, 38, 1) 13.2%,
    rgba(10, 29, 40, 1) 19.8%,
    rgba(10, 29, 40, 1) 26.4%,
    rgba(25, 44, 56, 1) 33%,
    rgba(21, 50, 79, 1) 39.6%,
    rgba(25, 44, 56, 1) 46.2%, 
    rgba(21, 50, 79, 1) 52.8%,
    rgba(49, 86, 123, 1) 59.4%,
    rgba(49, 82, 123, 1) 66%,
    rgba(36, 100, 149, 1) 72.6%,
    rgba(8, 108, 146, 1) 79.2%,
    /* contactは未記入 */
    );
    background-position-y: bottom;
  &.show {
    opacity: 1;
  }

  > * {
    position: relative;
  }
}
</style>
