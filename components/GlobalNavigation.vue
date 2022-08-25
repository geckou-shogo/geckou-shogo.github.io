<template>
  <div :class="$style.wrapper">
    <nav :class="$style.container">
      <ul :class="$style.list">
        <li
          v-for="section in sections"
          :key="section.idName"
        >
          <a
            :href="`#${section.idName}`"
            data-scroll-to
          >
            <GlobalNavItem
              :text="section.name"
              :current="currentSection === section.idName"
            />
          </a>
        </li>
      </ul>
    </nav>
    <div
      :class="$style.progress"
    >
      <pre>

      {{ sectionElements[idName] }}
    </pre>
      <div
        :class="$style.bar"
      />
    </div>
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

  @include v.media('mobile') {
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
</style>
