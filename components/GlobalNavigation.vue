<template>
<div>
  <div :class="$style.navi">
    <div :class="$style.navi_inner">
      <ul :class="$style.navi_list">
      <li
        v-for="list in sectionDatas"
        :class="$style.navi_li"
        :key="list.id"
        @click.prevent="scrollTo(list.id)"
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
  import { ScrollTrigger } from 'gsap/ScrollTrigger'


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

          const clientLeft = el.offsetLeft  // 親要素から見た要素の位置
          console.log(clientLeft);

          const pageX = window.pageXOffset

          const scrollEl   = document.querySelector('.scroll_list')
          console.log(scrollEl);

          gsap.set(scrollEl,{
            x: pageX,
          }) 
          gsap.to(scrollEl, {
            x: -clientLeft,
          })
          // scrollEl.style.transform = `translate3d(px, 0px, 0px)`
          console.log(scrollEl.clientWidth);
          } else {
            
            }
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