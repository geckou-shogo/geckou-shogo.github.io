<template>
  <div :class="$style.wrapper">
    <nav :class="$style.container">
      <ul :class="$style.list">
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
    }
  },
  computed: {
    currentSectionNth() {
      return this.sections.findIndex(section => section.idName === this.currentSection)
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

.wrapper {
  width   : 0;
  position: absolute;
  bottom  : v.$val * 6;
  z-index : v.zIndex('nav');

  @include v.media('portrait') {
    display: none;
  }
}

.container {
  width: 100vw;
}

.list {
  display        : flex;
  justify-content: center;
  max-width      : v.$desktopScreenSize;
  margin         : 0 auto;
  gap            : 0 v.$val * 8;
}
</style>
