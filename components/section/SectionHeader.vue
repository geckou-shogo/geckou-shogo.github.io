<template>
  <div
    :class="$style.section_header"
  >
    <div
      :class="$style.marker"
    />
    <div
      :class="$style.inner"
    >
      <h2
        v-inview:on="change"
        :class="[$style.heading, status ? $style.fadeInLeft : '']"
      >
        {{ heading }}
      </h2>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    heading: {
      required: true,
      type    : String,
    },
  },
  data () {
    return {
      status: false,
    }
  },
  moutend () {
    this.$nextTick(() => {
      this.change()
    },)
  },
  methods: {
    change () {
      this.status = true
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.section_header {
  position: relative;
  width: 50%;
  background-color: c.$bgBlack;
}

.inner {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.heading {
  font-size: 60px;
  font-family: f.family('english');
  color: c.$white;
  letter-spacing: f.letterSpacing(normal);
  &::first-letter {
    color: c.$blue;
  }
}

.marker {
  position: absolute;
  left: 0;
  width: 2px;
  height: 100vh;
  background: tomato;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(1);
  }
}

.fadeInLeft {
  animation-name: fadeIn;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  color: c.$blue;
}

</style>

<style lang="scss">
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

</style>
