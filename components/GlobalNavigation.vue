<template>
<div>
  <div :class="$style.navi">
    <div :class="$style.navi__inner">
      <ul :class="$style.navi__list">
        <li :class="$style.navi__li"><nuxt-link to="#top">TOP</nuxt-link></li>
        <li :class="$style.navi__li"><nuxt-link to="#vision">VISION</nuxt-link></li>
        <li :class="$style.navi__li"><nuxt-link to="#service">SERVICE</nuxt-link></li>
        <li :class="$style.navi__li">INFORMATION</li>
        <li :class="$style.navi__li">CONTACT</li> 
      </ul>
    </div>
  </div>
</div>
</template>

<script>

  export default {

    // methods: {
    //   smoothScroll() {
    //       window.addEventListener('DOMContentLoaded', () => {
    //       const anchorLinks = document.querySelectorAll('a[href^="#"]');
    //       const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

    //       anchorLinksArr.forEach(link => {
    //         link.addEventListener('click', e => {
    //           e.preventDefault();
    //           const targetId = link.hash;
    //           const targetElement = document.querySelector(targetId);
    //           const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
    //           window.scrollTo({
    //             top: targetOffsetTop,
    //             behavior: "smooth"
    //           });
    //         });
    //       });
    //     });
    //   }
    // }
  }
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

  .navi {
    position: fixed;
    width: calc(100% / 2);
    left: calc(100% - 78%);
    bottom:  64px;
    z-index: v.zIndex(navi);
  }
  .navi__list {
    display: flex;
    gap: 0 calc(100% - 85%);
    align-items: center;
    font-size: f.size(small);
    font-family: f.family(english);
    color: c.$white;
  }
  .navi__li {
    cursor: pointer;
    transition: opacity .3s;
    &:hover {
      opacity: .7;
    }
    
  }

</style>