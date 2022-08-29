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
              :class="$style.foot_container"
            >
              <div
                v-for="i in footprintsNumber"
                v-show="i * 10 <= sectionProgress(section.idName)"
                :key="i"
                :class="$style.dummy"
              >
                <Footprints
                  :class="[$style.footprints, sectionProgress && currentSection ? $style.visible : '']"
                />
              </div>
            </div>
            {{ currentSection }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Footprints from '@/assets/images/svg/footprints.svg'

export default {
  name      : 'GlobalNavigation',
  components: {
    Footprints,
  },
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

.foot_container {
  display: flex;
}

.footprints {
  width  : 30px;
  height : 30px;
  opacity: 0;
  fill   : c.$white;

  &.visible {
    opacity: 1;
  }
}
</style>
