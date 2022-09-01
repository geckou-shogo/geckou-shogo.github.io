<template>
  <div :class="$style.wrapper">
    <nav :class="$style.container">
      <ul :class="$style.list">
        <li
          v-for="(section, index) in sections"
          :key="section.idName"
          :class="$style.list_item"
        >
          <a :href="`#${section.idName}`" data-scroll-to>
            <GlobalNavItem
              :text="section.name"
              :current="currentSection === section.idName"
            />
            <!-- デバッグ用 -->
            <!-- {{ sectionProgress(section.idName) }} -->
            <div :class="$style.foot_container">
              <div
                v-for="i in footprintsNumber"
                :key="i"
                :class="[
                  $style.footprints,
                  i * 10 <= sectionProgress(section.idName) || index < currentSectionNth
                    ? $style.show
                    : '',
                ]"
              >
                <Footprints />
              </div>
            </div>
            <!-- デバッグ用 -->
            <!-- {{ currentSection }}
            {{ currentSectionNth }} -->
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
      footprintsNumber: 12,
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
  max-width: v.$desktopScreenSize;
  margin: 0 auto;
  gap: 0 v.$val * 8;

  &_item {
    position: relative;
    &:nth-of-type(2) {
      .foot_container {
        margin: 0 7rem;
      }
    }
    &:nth-of-type(3) {
      .foot_container {
        margin: 0 7.5rem;
      }
    }
    &:nth-of-type(4) {
      .foot_container {
        margin: 0 6.8rem;
      }
    }
    &:last-of-type {
      .foot_container {
        display: none;
      }
    }
  }
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

.foot_container {
  position: absolute;
  top: v.$val * 6.5;
  margin: 0 6.2rem;
  display: flex;
  pointer-events: none;
}

.foot_list {
  opacity: 0;
  &.show {
    opacity: 1;
  }
}

.footprints {
  width: 8px;
  height: 8px;
  opacity: 0;
  transform: scale(-1, 1) rotate(-65deg);
  &:nth-of-type(2n) {
    transform: rotate(112deg);
  }
  fill: c.$white;
  &.show {
    opacity: 1;
  }
}
</style>
