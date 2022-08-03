<template>
  <div :class="$style.navi">
    <div :class="$style.navi_inner">
      <ul :class="$style.navi_list">
        <li
          v-for="list in sections"
          :id="`navi-${list.id}`"
          :key="list.id"
          :class="[$style.navi_li, 'navi_li']"
        >
          <a
            :href="`#${list.id}`"
            :class="[$style.navi_link, 'anchor']"
          >
            {{ list.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    sections: {
      required: true,
      type    : Array,
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
    width: 100%;
    bottom:  64px;
    z-index: v.zIndex(navi);
  }
  .navi_inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .navi_list {
    display: flex;
    gap: 0 60px;
    align-items: center;
    font-size: f.size(small);
    font-family: f.family(english);
    color: c.$white;
  }
  .navi_li {
    position: relative;
    transition: opacity .3s;
    &:hover {
      opacity: .7;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      right: auto;
      transform: translate(-50% , -50%);
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: rgba(224, 224, 228, 0.08);
      opacity: 0;
      transition: all .5s;
    }
  }
</style>

<style lang="scss">
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.navi_li.current {
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
      pointer-events: none;
    }
  }
}

</style>
