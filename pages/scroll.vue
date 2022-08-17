<template>
  <main :class="$style.frontpage">
    <LoadingScreen
      :vIf="isShow"
      :class="[$style.loading, isShow ? '' : $style.hide]"
    />
    <!-- <GradationBackground
      :sections="sections"
    /> -->
    <GlobalNavigation :sections="sections" :currentSection="currentSection" />
    <div
      id="js-scroll"
      :class="[
        $style.sections_container,
        'sections_container',
        isShow ? '' : $style.show
      ]"
      data-scroll-container
    >
      <section
        v-for="(section, index) in sections"
        :id="section.idName"
        :key="section.idName"
        v-inview:enter="
          () => {
            currentSection = section.idName;
          }
        "
        class="section"
        data-scroll-section
      >
        <SectionContainer :section="section" />
      </section>
    </div>
  </main>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default {
  data() {
    return {
      lmS: null,
      isShow: true,
      currentSection: "top",
      screenStatus: "",
      sections: [
        {
          idName: "top",
          name: "TOP",
          component: "SectionOfTop",
          color: "linear-gradient(to bottom, #192c38, #0b1926 30%,  #0a1d28);"
        },
        {
          idName: "vision",
          name: "VISION",
          component: "SectionOfVision",
          color: "linear-gradient(to bottom, #0a1d28, #192c38 30%,  #15324f);"
        },
        {
          idName: "service",
          name: "SERVICE",
          component: "SectionOfService",
          color: "linear-gradient(to bottom, #192c38, #15324f 34%,  #31527b);"
        },
        {
          idName: "information",
          name: "INFORMATION",
          component: "SectionOfInfo",
          color: "linear-gradient(to bottom, #31527b, #246495 66%,  #086c92);"
        },
        {
          idName: "contact",
          name: "CONTACT",
          component: "SectionOfContact",
          color: "linear-gradient(to bottom, #31527b, #246495 66%,  #086c92);"
        }
      ]
    };
  },
  mounted() {
    this.screenStatus =
      window?.innerWidth > window?.innerHeight ? "landscape" : "portrait";
    window.addEventListener("resize", this.registrationScrollEvent);
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = false;
      }, 3000);
    });
    this.$nextTick(() => {
      this.locomotiveScroll();
    });
  },

  methods: {
    registrationScrollEvent() {
      window.addEventListener("scroll", this.checkIsScreenLandscape);
    },
    checkIsScreenLandscape() {
      const currentScreenStatus =
        window?.innerWidth > window?.innerHeight ? "landscape" : "portrait";
      if (this.screenStatus !== currentScreenStatus) {
        location.reload();
      } else {
        window.removeEventListener("scroll", this.checkIsScreenLandscape);
      }
    },
    locomotiveScroll() {
      this.lmS = new this.LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        direction: "horizontal",
        multiplier: 1,
        horizontalGesture: true
      });
      console.log("lmS", this.lmS);
    }
  }
};
</script>
<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.frontpage {
  overscroll-behavior-y: none;
  overflow: hidden;
  background-color: c.$black;
}

.loading {
  transition: all 1s;
  &.hide {
    opacity: 0;
    visibility: hidden;
    z-index: v.zIndex("off");
  }
}

.sections_container {
  position: relative;
  overflow: hidden;
}
</style>
