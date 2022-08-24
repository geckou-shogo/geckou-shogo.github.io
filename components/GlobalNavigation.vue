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
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;

.wrapper {
  width   : 0;
  position: absolute;
  bottom  : v.$val * 8;
  z-index : v.zIndex('nav');

  @include v.media('mobile') {
    display: none;
  }
}

.container {
  width          : 100vw;
  display        : flex;
  align-items    : center;
  justify-content: center;
}

.list {
  display        : flex;
  justify-content: space-between;
  align-items    : center;
  width          : 100%;
  max-width      : v.$desktopScreenSize;
  margin         : 0 auto;
}
</style>
