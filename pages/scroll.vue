<template>
  <main id="scroll">
    
  </main>
</template>

<script>
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  export default {
    data() {
      
    }
  }
</script>


<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.scroll {
  overflow: hidden;
  display: flex;

  @include v.mq(md) {
    display: block;
  }
}

.section {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  font-size: 5rem;
  font-weight: 900;
  border: solid 2px #fff;
}

.center_marker {
  position: fixed;
  width: 2px;
  height: 100vh;
  background: tomato;
  top: 0;
  left: calc(50vw - 1px);
}

</style>
