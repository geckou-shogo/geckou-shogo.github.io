<template>
  <main id="frontpage">
    <div id="scroll" :class="$style.scroll">
      <div id="scroll_wrap" :class="$style.scroll_wrap">
        <section id="vision" :class="$style.vision" class="scroll_item">
          <div :class="$style.container">
              <h2 :class="$style.subttl">1</h2>
          </div>
        </section> 
        <section id="service" :class="$style.service" class="scroll_item">
          <div :class="$style.container">
              <h2 :class="$style.subttl">2</h2>
          </div>
        </section>
        <section id="company" :class="$style.company" class="scroll_item">
          <div :class="$style.container">
              <h2 :class="$style.subttl">3</h2>
          </div>
        </section>
        <section id="contact" :class="$style.contact" class="scroll_item">
          <div :class="$style.container">
              <h2 :class="$style.subttl">4</h2>
          </div>
        </section>
        </div>
      </div>
  </main>
</template>

<script lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      scrollY: 0,
    }
  },
  methods: {
    calculateWindowWidth() {
      if (window.innerWidth > window.innerHeight) {
        console.log('横幅が大きい'); 
        const area  = document.querySelector('#scroll');
        const wrap  = document.querySelector('#scroll_wrap');
        const items = document.querySelectorAll('.scroll_item');
        const num   = items.length;

        gsap.set(wrap,  { width: num * 100 + "%" });
        gsap.set(items, { width: 100 / num + "%" });

        gsap.to(items, {
          xPercent: -100 * ( num - 1 ), //x方向に移動させる
          ease: "none",
          scrollTrigger: {
            trigger: area,
            start: "top top",
            end: "+=100%",
            scrub: 1, //スクロール量に応じて動かす
            pin: true, //ピン留め
            snap: { //キリの良い位置へ移動させる
              snapTo: 1 / ( num - 1 ),
              duration: 0.5,
            },
          },
        });
      } 
      console.log('width=' + innerWidth);
      console.log('height=' + innerHeight);
    },
    handleScroll() {
        this.scrollY = window.scrollY;
        console.log(handleScroll);
        
    }
  },
  mounted() {
      window.addEventListener('resize', this.calculateWindowWidth, 'scroll', this.handleScroll)
      gsap.registerPlugin(ScrollTrigger);
      this.$nextTick(() => {
      this.calculateWindowWidth();
    });
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;


.scroll {
  overflow: hidden;
  &_wrap {
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
