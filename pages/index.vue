<template>
  <main id="frontpage" >
    <div id="scroll" :class="$style.scroll">
      <div id="scroll_container" 
        class="page"
        :class="$style.scroll_container"
      >
        <section
          class="scroll_item"
          v-for="data in sectionData"
          :class="$style.vision"
          :key="data.id"
        >
          <CommonContainer
            :sectionData="data"
          ></CommonContainer>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  data() {
    return {
      windowStatus: "",
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
      window.addEventListener('load', this.windowWatch)
      window.addEventListener('resize', this.handleScroll)
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.calculateWindowWidth)
      window.addEventListener('resize', this.windowResize)
      gsap.registerPlugin(ScrollTrigger);
      this.$nextTick(() => {
          this.windowWatch();
          this.handleScroll();
          this.windowConfirmation();
          this.calculateWindowWidth();
          this.backGroundColor();
      });
  },
  methods: {
    windowWatch() {
        this.windowStatus =
            window.innerWidth > window.innerHeight ? "landscape" : "portrait";
        console.log(this.windowStatus);
    },
    windowResize() {
        this.handleScroll, this.calculateWindowWidth;
    },
    windowConfirmation() {
        const status = window.innerWidth > window.innerHeight ? "landscape" : "portrait";
        if (status === this.windowStatus) {
            removeEventListener("scroll", this.windowConfirmation);
        }
        else {
            window.location.reload();
        }
    },
    handleScroll() {
      window.addEventListener("scroll", this.windowConfirmation);
    },
    calculateWindowWidth() {
      if (window.innerWidth > window.innerHeight) {
        const area = document.querySelector("#scroll")
        const container = document.querySelector("#scroll_container")
        const items = document.querySelectorAll(".scroll_item")
        const num = items.length

        gsap.set(container, { width: num * 100 + "%" })
        gsap.set(items, { width: 100 / num + "%" })
        gsap.to(items, {
          xPercent: -100 * (num - 1),
          ease: "none",
          scrollTrigger: {
            trigger: area,
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: true,
            snap: {
              // キリの良い位置へ移動させる
              snapTo: 1 / (num - 1),
              duration: 0.5,
            },
          },
        })
      }
    },
    backGroundColor() {
      const area = document.querySelector("#scroll")
      const backgroundColorChange = document.querySelector(".background_color");
      console.log(backgroundColorChange);
      
      // const color = this.sectionData.color;

      gsap.to(backgroundColorChange, {
        duration: '1s', //５秒後かけてアニメーションさせる
        backgroundColor: "red", //背景色を赤にする
        scrollTrigger: {
          trigger: area,
          start: "top center",
          end: "bottom center",
          toggleActions: "play pause reverse reset",
        }
      })
      console.log('カラーを変更するよ')
    }
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.scroll {
  overflow: hidden;
  &_container {
    display: flex;
    @include v.mq(md) {
      display: block;
    }
  }
}

.subttl {
  font-size: 100px;
  color: c.$black;
}

.container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

</style>
