<template>
  <div :class="$style.wrapper">
    <nav :class="$style.container">
      <ul :class="$style.list">
        <li
          v-for="section in sections"
          :key="section.idName"
          :class="$style.list_item"
        >
          <a :href="`#${section.idName}`" data-scroll-to>
            <GlobalNavItem
              :text="section.name"
              :current="currentSection === section.idName"
            />
            {{ sectionProgress(section.idName) }}
            <div
              :class="container"
              :v-if="section.idName !== 'top'"
            >
              <div
                v-for="i in footprintsNumber"
                v-show="i * 10 <= sectionProgress(section.idName)"
                :key="i"
                :class="$style.dummy"
              >
                {{ i * 10 }}
              </div>
            </div>
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
  data() {
    return {
      footprintsNumber: 5,
    }
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
  display        : flex;
  justify-content: center;
  align-items    : center;
  max-width      : v.$desktopScreenSize;
  margin         : 0 auto;
  gap            : v.$val * 6;

  &_item {
    position: relative;
  }
}

.progress {
  position: fixed;
  bottom  : v.$val * 6;

  .bar {
    width           : 100%;
    height          : 1px;
    background-color: c.$white;
  }
}

.dummy {
  bottom          : 0;
  left            : v.$val * 10;
  width           : 30px;
  height          : 30px;
  background-color: c.$white;
  border-radius   : 50%;
}
</style>
