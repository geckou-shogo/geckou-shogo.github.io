<template>
  <div :class="$style.wrapper">
    <button
      v-if="screenStatus === 'portrait'"
      type="button"
      :class="[$style.hamburger_button, btnOpen ? $style.open : '']"
      @click="btnOpen=!btnOpen"
    >
      <span />
      <span />
      <span />
    </button>
    <nav :class="[$style.container, btnOpen ? $style.open : '']">
      <ul :class="[$style.list, btnOpen ? $style.open : '']">
        <li
          v-for="section in sections"
          :key="section.idName"
        >
          <a :href="`#${section.idName}`" data-scroll-to>
            <GlobalNavItem
              :text="section.name"
              :current="currentSection === section.idName"
              :sectionProgress="sectionProgress(section.idName)"
              :geckoHideProgress="animationTransitionProgress"
            />
          </a>
          <ProgressFootprints
            v-if="section.idName !== 'contact'"
            :sectionProgress="sectionProgress(section.idName)"
            :startProgress="animationTransitionProgress"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name : 'GlobalNavigation',
  props: {
    sections: {
      required: true,
      type    : Array,
    },
    currentSection: {
      required: true,
      type    : String,
    },
    sectionElements: {
      required: true,
      type    : Object,
    },
    progress: {
      required: true,
      type    : Number,
    },
  },
  data() {
    return {
      animationTransitionProgress: 60,
      btnOpen                    : false,
    }
  },
  computed: {
    currentSectionNth() {
      return this.sections.findIndex(section => section.idName === this.currentSection)
    },
    screenStatus() {
      return this.$store.state?.screen || ''
    },
  },
  methods: {
    sectionProgress(idName) {
      return Math.round(this.sectionElements[idName]?.progress * 100) || 0
    },

  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.wrapper {
  width   : 0;
  position: absolute;
  bottom  : v.$val * 6;
  z-index : v.zIndex('nav');

}

.container {
  width: 100vw;
  @include v.media('portrait') {
    position: fixed;
    top: 0;
    right: -120%;
    transition: right .5s;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    &.open {
      right: 0;
      opacity: 1;
      visibility: visible;
    }
  }
}

.list {
  display        : flex;
  justify-content: center;
  max-width      : v.$desktopScreenSize;
  margin         : 0 auto;

  > li {
    display    : flex;
    align-items: center;
  }
  @include v.media('portrait') {
    display: flex;
    max-width: none;
    width: 50%;
    flex-direction: column;
    opacity: 0;
    visibility: hidden;
    li {
      width: 100%;
    }
    &.open {
      opacity: 1;
      visibility: visible;
    }
  }
}

.hamburger_button {
  position: fixed;
  top: v.$val * 2;
  right: v.$val * 2;
  display: flex;
  width: 2rem;
  height: 2rem;
  gap: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: v.zIndex('max');
  & span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: c.$white;
  }
  &::after {
    content: "MENU";
    position: absolute;
    top: v.$val * 2.8;
    font-size: f.size('smaller');
    text-align: center;
  }
  &.open {
    & span {
      background-color: red;
    }
  }

}

</style>
