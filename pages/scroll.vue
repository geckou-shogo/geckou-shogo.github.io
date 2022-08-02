<template>
  <main
    :class="$style.frontpage"
  >
    <GlobalNavigation
      :sections="sectionDatas"
    />
    <div
      id="sectionsContainer"
      :class="$style.sections_container"
      :style="{width: `${sectionDatas.length * 100}%`}"
    >
      <section
        v-for="section in sectionDatas"
        :id="section.id"
        :class="$style.section"
        class="section"
        :key="section.id"
      >
        <CommonContainer
          :sectionData="section"
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
    screenStatus: '',
    sectionDatas   : [
      {
        id   : 'top',
        name : 'TOP',
        color: 'linear-gradient(to bottom, #192c38, #0b1926 30%,  #0a1d28);',
      },
      {
        id   : 'vision',
        name : 'VISION',
        color: 'linear-gradient(to bottom, #0a1d28, #192c38 30%,  #15324f);',
      },
      {
        id   : 'service',
        name : 'SERVICE',
        color: 'linear-gradient(to bottom, #192c38, #15324f 34%,  #31527b);',
      },
      {
        id   : 'information',
        name : 'INFORMATION',
        color: 'linear-gradient(to bottom, #31527b, #246495 66%,  #31527b);',
      },
      {
        id   : 'contact',
        name : 'CONTACT',
        color: '#B5BBC9',
      },
    ],
  }
},
  mounted() {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
    this.screenStatus = window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
    window.addEventListener('resize', this.registrationScrollEvent)
    const panelsContainer = document.querySelector('#sectionsContainer')
    const panels = gsap.utils.toArray(`.${this.$style.section}`)
    const tween = gsap.to(panels, {
      xPercent: -100 * ( panels.length - 1 ),
      ease: 'none',
      scrollTrigger: {
        trigger: '#sectionsContainer',
        pin: true,
        start: 'top top',
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: {min: 0.1, max: 0.1}
        },
        end: () => `+=${panelsContainer.offsetWidth - innerWidth}`
      }
    })
    document.querySelectorAll('.anchor').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const targetElem = document.querySelector(e.target.getAttribute('href'))
        let y = targetElem
        if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
          const totalScroll   = tween.scrollTrigger.end - tween.scrollTrigger.start
          const totalMovement = (panels.length - 1) * targetElem.offsetWidth
          y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll)
        }
        gsap.to(window, {
          scrollTo: {
            y: y,
            autoKill: false
          },
          duration: 1
        })
      })
    })
  },
  methods: {
    registrationScrollEvent() {
      window.addEventListener('scroll', this.checkIsScreenLandscape)
    },
    checkIsScreenLandscape() {
      const currrentScreenStatus = window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
      if (this.screenStatus !== currrentScreenStatus) location.reload()
      else window.removeEventListener('scroll', this.checkIsScreenLandscape)
    },
  }
}
</script>
<style lang="scss" module>
.frontpage {
  overscroll-behavior-y: none;
  overflow             : hidden;
  background-color     : #ccc;
}
.sections_container {
  height   : 100vh;
  display  : flex;
  flex-wrap: nowrap;
  overflow : hidden;
}
.section {
  display : flex;
  width   : 100%;
  height  : 100vh;
  overflow: hidden;
  position: relative;
}
</style>