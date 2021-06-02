<template>
  <div :class="[$style.navi, openClassName]" @click="openStatus = !openStatus">
    <div :class="$style.navi__button">
      <MenuIcon :close-status="openStatus" />
    </div>
    <nav>
      <WhiteLogo :class="$style.navi__logo" />
      <ul :class="$style.navi__list">
        <li>
          <NuxtLink to="/" :class="$style.navi__list__link">TOP</NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink to="/blog/" :class="$style.navi__list__link">
            BLOG
          </NuxtLink>
        </li> -->
        <li>
          <NuxtLink to="/works/" :class="$style.navi__list__link">
            WORKS
          </NuxtLink>
        </li>
        <li>
          <a
            :class="$style.navi__icon"
            href="https://twitter.com/okou_joe"
            target="_blank"
          >
            <i class="bx bxl-twitter" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openStatus: false,
    }
  },
  computed: {
    openClassName() {
      return this.openStatus ? this.$style.open : ''
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/color' as c;
@use '~/assets/scss/font' as f;

.navi {
  width: v.$val * 7;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: v.zIndex('navi');
  transition: background-color 0.1s;
  cursor: pointer;

  &__button {
    display: flex;
    align-items: center;
    height: 100%;
    padding: v.$val;
    background-color: c.$mainColor;
    position: absolute;
    right: 0;
    z-index: v.zIndex('navi') + 2;

    @include v.mediaScreen('mobile') {
      height: v.$val * 7;
      bottom: v.$val * 4;
    }
  }

  &__logo {
    width: v.$val * 23;
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;

    @include v.mediaScreen('tablet') {
      width: v.$val * 22;
    }
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: v.$val * 4;
    height: v.$val * 4;
    padding: v.$val;
    background-color: c.$baseColor;

    > i {
      font-size: v.$val * 3;
      width: v.$val * 3;
      color: c.$mainColor;
    }
  }

  &__list {
    margin-bottom: v.$val * 4;
    padding: v.$val * 4;

    li {
      padding: v.$val * 2 v.$val * 2 v.$val * 2 v.$val * 3;
    }

    &__link {
      color: c.$white;
      padding: v.$val v.$val v.$val 0;
      font-family: f.family('english');
      font-size: f.size('large');
      text-decoration: none;
      line-height: 1;
      position: relative;

      &::after {
        content: '';
        width: 0;
        height: 3px;
        background-color: c.$baseColor;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: width 0.3s;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }

  nav {
    display: flex;
    align-items: flex-end;
    width: 0;
    background-color: c.$mainColor;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    transition: width 0.1s;
    z-index: v.zIndex('navi') + 1;
  }

  &.open {
    width: 100vw;
    background-color: rgba(c.$black, 0.3);

    nav {
      width: v.$val * 40;

      @include v.mediaScreen('mobile') {
        width: 100vw;
      }
    }
  }
}
</style>
