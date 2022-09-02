<template>
  <div
    :class="[$style.container, inView ? $style.stop : '']"
  >
    <div :class="$style.rain_area">
      <span
        v-for="rain in rainfall"
        :key="rain"
        :style="{
          left: `${(100 / rainfall) * rain + calcRandomNumber(1, 3)}%`,
          top : `-${calcRandomNumber(150, 200)}px`,
          animationDuration: `${calcRandomNumber(5, 15)}s`
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name : 'RainScreen',
  props: {
    inView: {
      required: false,
      type    : Boolean,
      default : false,
    },
  },
  data() {
    return {
      rainfall: 20,
    }
  },
  methods: {
    calcRandomNumber(min, max) {
      return Math.floor(Math.random() * (max + 1 - min)) + min
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
    animation-name           : opacity;
    animation-duration       : 1s;
    animation-timing-function: ease-out;
    animation-fill-mode      : forwards;
  }
}

.rain_area {
  width : 100%;
  height: 100vh;

  span {
    position  : absolute;
    width     : 1px;
    height    : v.$val * 8;
    background: c.$white;
    opacity   : .2;
    animation : rain infinite;
  }
}

@keyframes rain {
  0% { transform: translate(0px, 0px);}
  4% { transform: translate(0px, 1600px);}

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

  100% { transform: translate(0px, 0px);}
}
</style>
