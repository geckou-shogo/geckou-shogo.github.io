<template>
  <div :class="$style.wrapper">
    <nav :class="$style.container">
      <ul :class="$style.list">
        <li v-for="section in sections" :key="section.idName">
          <a :href="`#${section.idName}`" data-scroll-to>
            <GlobalNavItem
              :text="section.name"
              :current="currentSection === section.idName"
            />
            {{ sectionProgress(section.idName) }}
            <div v-if="progress === '10'" :class="$style.dummy" />
          </a>
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
  width: 0;
  position: absolute;
  bottom: v.$val * 6;
  z-index: v.zIndex("nav");

  @include v.media("mobile") {
    display: none;
  }
}

.container {
  width: 100vw;
}

.list {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: v.$desktopScreenSize;
  margin: 0 auto;
  gap: v.$val * 6;
}

.progress {
  position: fixed;
  bottom: v.$val * 6;
  .bar {
    width: 100%;
    height: 1px;
    background-color: c.$white;
  }
}

.dummy {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 9999;
}
</style>
