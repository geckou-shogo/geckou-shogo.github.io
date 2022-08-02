<template>
  <main id="frontpage">
    <GradationBackground
      :class="$style.screen"
      :sectionDatas="sectionDatas"
    />
    <GlobalNavigation
      :sectionDatas="sectionDatas"
    />
    <div class="scroll_wrapper">
      <div :class="$style.scroll" class="scroll">
        <section 
          v-for="item in sectionDatas"
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
    </div>
    <div :class="$style.center_marker"></div>
  </main>
</template>

<script>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  export default {
  data() {
    return {
      screenStatus: '',
      sectionDatas: [
        {
          id: 'top',
          name: 'TOP',
          color: 'linear-gradient(to bottom, #192c38, #0b1926 30%,  #0a1d28);',
        },
        {
          id: 'vision',
          name: 'VISION',
          color:  'linear-gradient(to bottom, #0a1d28, #192c38 30%,  #15324f);',
        },
        {
          id: 'service',
          name: 'SERVICE',
          color:  'linear-gradient(to bottom, #192c38, #15324f 34%,  #31527b);',
        },
        {
          id: 'information',
          name: 'INFORMATION',
          color:  'linear-gradient(to bottom, #31527b, #246495 66%,  #31527b);',
        },
        {
          id: 'contact',
          name: 'CONTACT',
          color:  '#B5BBC9',
        },
      ],
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
          // const screens  = document.getElementsByClassName('screen')
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
            gsap.to(sct, {
              scrollTrigger: {
                trigger: sct,
                start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (this.maxWidth / (this.maxWidth - window.innerWidth)),
                end: () => '+=' + sct.offsetWidth * (this.maxWidth / (this.maxWidth - window.innerWidth)),
              }
            })
            //   gsap.to(screens,{
            //   y: '-100vh',
            //   scrollTrigger: {
            //     trigger: '.scroll',
            //     start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (this.maxWidth / (this.maxWidth - window.innerWidth)),
            //     end: () => '+=' + sct.offsetWidth * (this.maxWidth / (this.maxWidth - window.innerWidth)),
            //     scrub: true,
            //   }
            // })  
          })
        } else {
          const sections = gsap.utils.toArray('.scroll_item')
          sections.forEach((sct) => {
            gsap.to(sct, {
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
  border: solid 2px #fff;
}

.center_marker {
  position: fixed;
  width: 2px;
  height: 100vh;
  background: tomato;
  top: 0;
  left: calc(50vw - 1px);
}

</style>
