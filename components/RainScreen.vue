<template>
  <div
    :class="[$style.container, inView ? $style.stop : '']"
  >
    <!-- {{ inView }} デバッグ用の記述です  -->
    <div :class="$style.rain_area">
      <span
        v-for="rain in 20"
        :key="rain"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inView: {
      required: false,
      type    : Boolean,
      default : false,
    },
  },

}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

@keyframes opacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.container {
  width: 100%;
  height: 100vh;
  &.stop {
    animation-name: opacity;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }
}

.rain_area {
  position: absolute;
  right:0;
  top:auto;
  width: 100%;
  height:100vh;
  z-index: v.zIndex(off);
  overflow: hidden;
  span {
    position: absolute;
    width:1px;
    height:100px;
    background:c.$white;
    opacity:0.4;
  }
}

.rain_area span:nth-child(1){left:5%; top:-190px; animation: rain-anim 10s infinite;}
.rain_area span:nth-child(2){left:10%; top:-180px; animation: rain-anim 11s infinite;}
.rain_area span:nth-child(3){left:15%; top:-170px; animation: rain-anim 8s infinite;}
.rain_area span:nth-child(4){left:20%; top:-160px; animation: rain-anim 12s infinite;}
.rain_area span:nth-child(5){left:25%; top:-150px; animation: rain-anim 10s infinite;}

.rain_area span:nth-child(6){left:30%; top:-150px; animation: rain-anim 11s infinite;}
.rain_area span:nth-child(7){left:35%; top:-160px; animation: rain-anim 13s infinite;}
.rain_area span:nth-child(8){left:40%; top:-170px; animation: rain-anim 7s infinite;}
.rain_area span:nth-child(9){left:45%; top:-180px; animation: rain-anim 9s infinite;}
.rain_area span:nth-child(10){left:50%; top:-190px; animation: rain-anim 11s infinite;}

.rain_area span:nth-child(11){left:55%; top:-190px; animation: rain-anim 10s infinite;}
.rain_area span:nth-child(12){left:60%; top:-180px; animation: rain-anim 6s infinite;}
.rain_area span:nth-child(13){left:65%; top:-170px; animation: rain-anim 14s infinite;}
.rain_area span:nth-child(14){left:70%; top:-160px; animation: rain-anim 12s infinite;}
.rain_area span:nth-child(15){left:75%; top:-150px; animation: rain-anim 10s infinite;}

.rain_area span:nth-child(16){left:80%; top:-150px; animation: rain-anim 14s infinite;}
.rain_area span:nth-child(17){left:85%; top:-160px; animation: rain-anim 8s infinite;}
.rain_area span:nth-child(18){left:90%; top:-170px; animation: rain-anim 9s infinite;}
.rain_area span:nth-child(19){left:95%; top:-180px; animation: rain-anim 11s infinite;}
.rain_area span:nth-child(20){left:100%; top:-190px; animation: rain-anim9 13s infinite;}

@keyframes rain-anim {

  0% { transform: translate(0px,0px);}
  4% { transform: translate(0px,1600px);}

  5% { transform: translate(200px,0px);}
  9% { transform: translate(200px,1600px);}

  10% { transform: translate(-100px,0px);}
  14% { transform: translate(-100px,1600px);}

  15% { transform: translate(-200px,0px);}
  19% { transform: translate(-200px,1600px);}

  20% { transform: translate(100px,0px);}
  24% { transform: translate(100px,1600px);}

  25% { transform: translate(-150px,0px);}
  29% { transform: translate(-150px,1600px);}

  30% { transform: translate(-80px,0px);}
  34% { transform: translate(-80px,1600px);}

  35% { transform: translate(150px,0px);}
  39% { transform: translate(150px,1600px);}

  40% { transform: translate(-60px,0px);}
  44% { transform: translate(-60px,1600px);}

  45% { transform: translate(90px,0px);}
  49% { transform: translate(90px,1600px);}

  50% { transform: translate(60px,0px);}
  54% { transform: translate(60px,1600px);}

  55% { transform: translate(-60px,0px);}
  59% { transform: translate(-60px,1600px);}

  60% { transform: translate(-40px,0px);}
  64% { transform: translate(-40px,1600px);}

  65% { transform: translate(40px,0px);}
  69% { transform: translate(40px,1600px);}

  70% { transform: translate(-20px,0px);}
  74% { transform: translate(-20px,1600px);}

  75% { transform: translate(-110px,0px);}
  79% { transform: translate(-110px,1600px);}

  80% { transform: translate(20px,0px);}
  84% { transform: translate(20px,1600px);}

  85% { transform: translate(-20px,0px);}
  89% { transform: translate(-20px,1600px);}

  90% { transform: translate(50px,0px);}
  99% { transform: translate(50px,1600px);}

  100% { transform: translate(0px,0px);}

}

</style>
