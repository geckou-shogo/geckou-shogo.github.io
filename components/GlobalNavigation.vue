<template>
<div>
  <div :class="$style.navi">
    <div :class="$style.navi_inner">
      <ul :class="$style.navi_list">
      <li
        v-for="list in sectionDatas"
        class="anchor"
        :class="$style.navi_li"
        :key="list.id"
        @click="scrollTo(list.id)"
      >
        {{list.name}}
      </li>
        
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

  export default {
    props: {
      sectionDatas: {
        required: true,
        type: Array,
      }
    },
    methods: {
      scrollTo(id) {
        if (window.innerWidth > window.innerHeight) {
          const el         = document.querySelector(`#${id}`) //文書内の一番最初の{ID}を取得
          console.log(el);

          const clientLeft = el.getBoundingClientRect().left // 画面の左端から見た要素の位置
          console.log(clientLeft);

          const scrollEl   = document.querySelector('.scroll')
          console.log(scrollEl);
          scrollEl.style.left = `-${scrollEl.clientWidth}px`
          } else {
            
            }
      },
      smoothScroll() {
        let panelsContainer = document.querySelector(".scroll_container") // スクロールを包括している要素
        document.querySelectorAll(".anchor").forEach(anchor => { //".anchor"の要素を全て取得し、forで回す
        anchor.addEventListener("click", function(e) { //.anchorがクリックされた時、
        e.preventDefault();
        let targetElem = document.querySelector(e.target.getAttribute("href")), // 指定された属性の値を返す記述がされている
          y = targetElem;
        if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
          let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
            totalMovement = (panels.length - 1) * targetElem.offsetWidth;
          y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
        }
        gsap.to(window, {
          scrollTo: {
            y: y,
            autoKill: false
          },
          duration: 1
    });
	});
});

      },
      
    },
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
  .navi_list {
    display: flex;
    gap: 0 calc(100% - 85%);
    align-items: center;
    font-size: f.size(small);
    font-family: f.family(english);
    color: c.$white;
  }
  .navi_li {
    cursor: pointer;
    transition: opacity .3s;
    &:hover {
      opacity: .7;
    }
    
  }

</style>