<template>
  <main id="frontpage">
    <div id="scroll" :class="$style.scroll">
    <div id="scroll_wrap" :class="$style.scroll_wrap">
      <section id="vision" :class="$style.vision">
        <div  :class="[$style.container, 'item']">
            <h2 :class="$style.subttl">1</h2>
        </div>
      </section> 
      <section id="service" :class="$style.service">
        <div  :class="[$style.container, 'item']">
            <h2 :class="$style.subttl">2</h2>
        </div>
      </section>
      <section id="company" :class="$style.company">
        <div  :class="[$style.container, 'item']">
            <h2 :class="$style.subttl">3</h2>
        </div>
      </section>
      <section id="contact" :class="$style.contact">
        <div  :class="[$style.container, 'item']">
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
  methods: {
    scroll() {
      const area  = document.querySelector('#scroll');
      const wrap  = document.querySelector('#scroll_wrap');
      const items = document.querySelectorAll('.item');
      const num   = items.length;

      gsap.set(wrap,  { width: num * 100 + "%" });
      gsap.set(items, { width: 100 / num + "%" });

      console.log(area)
      console.log('.item')

      gsap.to(this.$style.scroll,  {
        xPercent: -100 * ( num - 1 ), //x方向に移動させる
        ease: "none",
        scrollTrigger: {
          trigger: area,
          start: "top top", //開始位置
          end: "+=8000", //終了位置
          pin: true, //ピン留め
          scrub: true, //スクロール量に応じて動かす
        },
      });
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.$nextTick(() => {
      this.scroll();
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
  width: 100%;
  background-color: c.$black;
  .subttl {
    color: c.$white;
  }
}

.service {
  width: 100%;
  background-color: aqua;
}

.company {
  width: 100%;
  background-color: .707070;
}

.contact {
  width: 100%;
  background-color: red;
}

</style>
