<template>
<main id="frontpage">
  <div :class="$style.scroll" class="scroll">
    <section 
      class="scroll_item"
      v-for="item in sectionData"
      :class="$style.section"
      :key="item.id"
      :data-color="item.color"
    >
      <CommonContainer
        :sectionData="item"
      >
      </CommonContainer>
    </section>
</div>

<div class="center-marker"></div>
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
    }
  },
    mounted() {
      gsap.registerPlugin(ScrollTrigger);
      this.scrollPreference();
      this.screenStatus =
      window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
      window.addEventListener('resize', this.registrationScrollEvent)
      console.log(this.screenStatus);
    },
    methods: {
      registrationScrollEvent() {
      window.addEventListener('scroll', this.checkIsScreenLandscape)
      },
      checkIsScreenLandscape() {
      const currrentScreenStatus =
        window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
      if (this.screenStatus !== currrentScreenStatus) location.reload()
      else window.removeEventListener('scroll', this.checkIsScreenLandscape)
      },
      scrollPreference() {
        if (window.innerWidth > window.innerHeight) {
          const sections = gsap.utils.toArray('.scroll_item');
          let maxWidth = 0;
          const getMaxWidth = () => {
          maxWidth = 0;
          sections.forEach((section) => {
            maxWidth += section.offsetWidth;
            });
          };
          getMaxWidth();
          ScrollTrigger.addEventListener('refreshInit', getMaxWidth);
          gsap.to(sections, {
            x: () => `-${maxWidth - window.innerWidth}`,
            ease: "none",
            scrollTrigger: {
              trigger: ".scroll",
              pin: true,
              scrub: true,
              end: () => `+=${maxWidth}`,
              invalidateOnRefresh: true
            }
          });
            sections.forEach((sct) => {
            let color = sct.dataset.color
            console.log(color);
            gsap.to(sct, {
              backgroundColor: color,
              scrollTrigger: {
                trigger: sct,
                start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
                end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
                toggleClass: {targets: sct, className: 'active'}
              }
            })
          });
        } else {
            const sections = gsap.utils.toArray('.scroll_item');
            sections.forEach((sct) => {
            let color = sct.dataset.color
            console.log(color);
            gsap.to(sct, {
              backgroundColor: color,
              scrollTrigger: {
                trigger: sct,
                start: 'top center',
                end: 'bottom center',
                markers: true
              }
            })
          });
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

<style lang="scss">
  body {
    overflow-x: hidden;
  }
  .section--large {
    background-color: #e4002b;
  }
  .section--dark {
    background-color: black;
  }

  .center-marker {
    position: fixed;
    width: 2px;
    height: 100vh;
    background: tomato;
    top: 0;
    left: calc(50vw - 1px);
  }

  section.active {
    color: orange;
  }
</style>

