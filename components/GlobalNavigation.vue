<template>
<div>
  <div :class="$style.navi">
    <div :class="$style.navi_inner">
      <ul :class="$style.navi_list">
      <li
        v-for="list in sections"
        :class="$style.navi_li"
        :key="list.id"
      >
        <a 
          :href="`#${list.id}`"
          :class="[$style.item, 'anchor']"
          
        >
          {{list.name}}
        </a>
      </li>
        
      </ul>
    </div>
  </div>
</div>
</template>

<script>

  export default {
    props: {
      sections: {
        required: true,
        type: Array,
      }
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