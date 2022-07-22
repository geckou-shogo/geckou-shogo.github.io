<template>
<div>
  <div :class="$style.navi">
    <div :class="$style.navi__inner">
      <ul :class="$style.navi__list">
        <li :class="$style.navi__li">TOP</li>
        <li :class="$style.navi__li">VISION</li>
        <li :class="$style.navi__li">SERVICE</li>
        <li :class="$style.navi__li">INFORMATION</li>
        <li :class="$style.navi__li">CONTACT</li> 
      </ul>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    
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