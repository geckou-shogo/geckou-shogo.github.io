<template>
<main id="scrollPage">
  <div class="wrapper d-flex flex-nowrap">
    <section :class="$style.section" class="section section--large flex-shrink-0 vw-100 vh-100 d-flex justify-content-center align-items-center">
      Part One
    </section>
    <section :class="$style.section" class="section section--dark section--small vh-100 flex-shrink-0 d-flex justify-content-center align-items-center">
      Part Two
    </section>
    <section :class="$style.section" class="section section--small vh-100 flex-shrink-0 d-flex justify-content-center align-items-center">
      Part Three
    </section>
    <section :class="$style.section" class="section section--large flex-shrink-0 vw-100 vh-100 d-flex justify-content-center align-items-center">
      Part Four
    </section>
</div>

<div class="center-marker"></div>
</main>
</template>

<script>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  export default {
    mounted() {
      gsap.registerPlugin(ScrollTrigger);
      this.backGroundColor()
    },
    methods: {
      backGroundColor() {
        const sections = gsap.utils.toArray("section");
        let maxWidth = 0;
        const getMaxWidth = () => {
        maxWidth = 0;
        sections.forEach((section) => {
          maxWidth += section.offsetWidth;
          });
        };
        getMaxWidth();
        ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
        gsap.to(sections, {
          x: () => `-${maxWidth - window.innerWidth}`,
          ease: "none",
          scrollTrigger: {
            trigger: ".wrapper",
            pin: true,
            scrub: true,
            end: () => `+=${maxWidth}`,
            invalidateOnRefresh: true
          }
        });
        sections.forEach((sct, i) => {
        ScrollTrigger.create({
          trigger: sct,
          start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
          end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
          toggleClass: {targets: sct, className: "active"}
        });
      });
      }
    }
  }
</script>


<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;


.section {
  font-size: 5rem;
}

</style>

<style lang="scss">
  body {
    overflow-x: hidden;
  }
  .wrapper {
    display: flex;
  }
  .section {
    font-size: 5rem;
  }
  .section--large {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    background-color: #e4002b;
    color: white;
  }
  .section--small {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
  }
  .section--dark {
    color: white;
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

  section {
    font-weight: 900;
    transition: color 0.3s;
  }

  section.active {
    color: orange;
  }
</style>

