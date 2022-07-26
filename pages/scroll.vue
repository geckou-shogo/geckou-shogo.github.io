<template>
  <main id="frontpage" style="position: relateive;">
    <GradationBackground
      :class="$style.screen"
      :sectionDatas="sectionDatas"
    />
    <GlobalNavigation
      :sectionDatas="sectionDatas"
    >
    </GlobalNavigation>
    <div :class="$style.scroll" class="scroll">
      <div :class="$style.scroll_container" class="scroll_container">
        <div :class="$style.scroll_list" class="scroll_list">
          <section
            v-for="item in sectionDatas"
            :id="item.id"
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
        const scrollWrapperEl = document.querySelector('.scroll_container');
        const scrollItemEl = document.querySelector('.scroll_list');
          if (window.innerWidth > window.innerHeight) {
            gsap.to(scrollItemEl, {
            x: () => -(scrollItemEl.clientWidth - scrollWrapperEl.clientWidth),
            ease: 'none',
            scrollTrigger: {
              trigger: '.scroll',
              start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
              end: () => `+=${scrollItemEl.clientWidth - scrollWrapperEl.clientWidth}`,
              scrub: true,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        } else {
          gsap.to(scrollItemEl, {
            x: () => -(scrollItemEl.clientWidth - scrollWrapperEl.clientWidth),
            ease: 'none',
            scrollTrigger: {
              start: 'top center',
              end: 'bottom center',
              markers: true,
            },
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
  display: flex;
  transition: all .3s;
  @include v.mq(md) {
    display: block;
  }
  &_container {
    position: relative;
    width: 100%;
    height: 100vh;
    @include v.mq(md) {
      position: static;
    }
  }
  &_list {
    position: absolute;
    display: flex;
    @include v.mq(md) {
      position: static;
      display: block;
    }
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
