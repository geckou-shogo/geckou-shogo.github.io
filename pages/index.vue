<template>
  <main id="frontpage">
    <div :class="$style.scroll" class="scroll">
      <section 
        v-for="item in sectionData"
        :class="[$style.section, 'scroll_item']"
        :key="item.id"
        :data-color="item.color"
      >
        <CommonContainer
          :sectionData="item"
        >
        </CommonContainer>
      </section>
    </div>
  </main>
</template>

<script>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  export default {
  data() {
    return {
      screenStatus: '',
      sectionData: [
        {
          id: 'vision',
          heading: '1',
          description: '説明',
          color:  '#1c4ac9',
        },
          {
          id: 'service',
          heading: '2',
          description: '説明',
          color:  '#3C62C9',
        },
        {
          id: 'information',
          heading: '3',
          description: '説明',
          color:  '#798EC9',
        },
        {
          id: 'contact',
          heading: '4',
          description: '説明',
          color:  '#B5BBC9',
        },
      ],
      maxWidth: 0,
    }
  },
    mounted() {
      gsap.registerPlugin(ScrollTrigger)
      this.scrollPreference()
      this.screenStatus =
      window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
      window.addEventListener('resize', this.registrationScrollEvent)
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
      scrollPreference() {
        if (window.innerWidth > window.innerHeight) {
          const sections = gsap.utils.toArray('.scroll_item')

          const getMaxWidth = () => {
            this.maxWidth = 0
            sections.forEach((section) => {
              this.maxWidth += section.offsetWidth
            })
          }

          getMaxWidth()

          ScrollTrigger.addEventListener('refreshInit', getMaxWidth)

          gsap.to(sections, {
            x: () => `-${this.maxWidth - window.innerWidth}`,
              ease: 'none',
              scrollTrigger: {
                trigger: '.scroll',
                pin: true,
                scrub: true,
                end: () => `+=${this.maxWidth}`,
                invalidateOnRefresh: true
              }
          })

          sections.forEach((sct) => {
            const color = sct.dataset.color

            gsap.to(sct, {
              backgroundColor: color,
              scrollTrigger: {
                trigger: sct,
                start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (this.maxWidth / (this.maxWidth - window.innerWidth)),
                end: () => '+=' + sct.offsetWidth * (this.maxWidth / (this.maxWidth - window.innerWidth)),
                toggleClass: {targets: sct, className: 'active'}
              }
            })
          })
        } else {
          const sections = gsap.utils.toArray('.scroll_item')
          sections.forEach((sct) => {
            const color = sct.dataset.color

            gsap.to(sct, {
              backgroundColor: color,
              scrollTrigger: {
                trigger: sct,
                start: 'top center',
                end: 'bottom center',
                markers: true
              }
            })
          })
        }
      }
    }
  }
</script>


<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.scroll {
  overflow: hidden;
  display: flex;

  @include v.mq(md) {
    display: block;
  }
}

.section {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  font-size: 5rem;
  font-weight: 900;
  transition: color .3s, background-color .3s;
}
</style>
