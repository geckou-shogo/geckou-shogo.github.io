<template>
  <main id="frontpage" class="scroll">
    <div class="scroll_wrapper">
      <GlobalNavigation></GlobalNavigation>
      <section
        v-for="item in sectionDatas"
        :class="[$style.section, 'scroll_item']"
        :key="item.id"
        :data-color="item.color"
      >
        <CommonContainer
          sectionData="item"
        >
        </CommonContainer>
      </section>
      <div :class="$style.center_marker"></div>
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
        sectionDatas: [
          {
            id: 'top',
          },
          {
            id: 'vision',
          },
          {
            id: 'service',
          },
          {
            id: 'information',
          },
          {
            id: 'contact',
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
      checkIsScreenLandscape() {
        const currrentScreenStatus = window?.innerWidth > window?.innerHeight ? 'landscape' : 'portrait'
        if (this.screenStatus !== currrentScreenStatus) location.reload()
        else window.removeEventListener('scroll', this.checkIsScreenLandscape)
      },
      scrollPreference() {
        const area  = document.querySelector(".scroll");
        const wrap  = document.querySelector(".scroll_wrapper");
        const items = document.querySelectorAll(".scroll_item");
        const num   = items.length;

        gsap.set(wrap,  { width: num * 100 + "%" });
        gsap.set(items, { width: 100 / num + "%" });

        gsap.to(items, {
        xPercent: -100 * ( num - 1 ), //x方向に移動させる
        ease: "none",
        scrollTrigger: {
          trigger: area, //トリガー
          start: "top top", //開始位置
          end: "+=1000", //終了位置
          pin: true, //ピン留め
          scrub: true, //スクロール量に応じて動かす
        }
      });
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
