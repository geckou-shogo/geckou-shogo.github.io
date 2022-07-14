<template>
  <main id="frontpage">
    <div id="scroll" :class="$style.scroll">
      <div id="scroll_container" :class="$style.scroll_container">
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

<script lang="ts">
import { stringify } from 'querystring'
import { booleanLiteral } from '@babel/types'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CommonContainer from '~/components/CommonContainer.vue'

export default {
    data() {
        return {
            windowStatus: "",
            sectionData: [
              {
                id: 'vision',
                heading: '1',
                description: '説明',
              },
               {
                id: 'service',
                heading: '2',
                description: '説明',
              },
              {
                id: 'information',
                heading: '3',
                description: '説明',
              },
              {
                id: 'contact',
                heading: '4',
                description: '説明',
              },
            ],
        };
    },
    mounted() {
        window.addEventListener("load", this.windowWatch);
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.windowResize);
        gsap.registerPlugin(ScrollTrigger);
        this.$nextTick(() => {
            this.windowWatch();
            this.handleScroll();
            this.windowConfirmation();
            this.calculateWindowWidth();
        });
    },
    methods: {
        windowResize() {
            this.handleScroll, this.calculateWindowWidth, this.handleScroll;
        },
        windowWatch() {
            this.windowStatus =
                window.innerWidth > window.innerHeight ? "landscape" : "portrait";
            console.log(this.windowStatus);
        },
        handleScroll() {
            window.addEventListener("scroll", this.windowConfirmation);
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
        calculateWindowWidth() {
            if (window.innerWidth > window.innerHeight) {
                const area = document.querySelector("#scroll");
                const container = document.querySelector("#scroll_container");
                const items = document.querySelectorAll(".scroll_item");
                const num = items.length;
                gsap.set(container, { width: num * 100 + "%" });
                gsap.set(items, { width: 100 / num + "%" });
                gsap.to(items, {
                    horizontal: "true",
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
                });
            }
        },
    },
    components: { CommonContainer }
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
    @media (max-width: 768px) {
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

.vision {
  background-color: c.$black;
  .subttl {
    color: c.$white;
  }
}

.service {
  background-color: aqua;
}

.company {
  background-color: #707070;
}

.contact {
  background-color: red;
}
</style>
