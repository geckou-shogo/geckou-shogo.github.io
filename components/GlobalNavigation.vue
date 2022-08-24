<template>
  <div :class="$style.nav">
    <div :class="$style.nav_inner">
      <ul :class="$style.nav_list">
        <li
          v-for="section in sections"
          :id="`nav-${section.idName}`"
          :key="section.idName"
          :class="[$style.nav_li, currentSection === section.idName ? $style.current : '']"
        >
          <a
            :href="`#${section.idName}`"
            :class="[$style.nav_link, $style.anchor]"
            data-scroll-to
          >
            {{ section.name }}
          </a>
        </li>
      </ul>
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
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.nav {
  width   : 0;
  position: absolute;
  bottom  : v.$val * 8;
  z-index : v.zIndex('nav');

  @include v.media('mobile') {
    display: none;
  }
}

.nav_inner {
  width: 100vw;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
}

.nav_list {
  display: flex;
  gap: 0 v.$val * 16;
  align-items: center;
  font-size: f.size(small);
  font-family: f.family(english);
  color: c.$white;
}

.nav_li {
  position: relative;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    right: auto;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: rgba(224, 224, 228, 0.08);
    opacity: 0;
    transition: opacity 0.8s;
    pointer-events: none;
  }

  &.current {
    &::after {
      content: "";
      opacity: 1;
    }

    .anchor {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: 2px;
        background-color: c.$white;
      }
      &::after {
        content: "";
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 54px;
        height: 54px;
        background-image: url("../assets/img/gecko.png");
        background-size: 100%;
      }
    }
  }
}
</style>

<style lang="scss">
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

</style>
