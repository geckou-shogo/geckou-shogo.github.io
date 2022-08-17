<template>
  <section
    id="js-scroll"
  >
    <div>
      <span data-scroll>アニメーションさせたい要素</span>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      lmS: null,
    }
  },
  mounted() {
    this.lmS = new this.LocomotiveScroll({
      el    : document.querySelector('#js-scroll'),
      smooth: true,
    })
    console.log('lmS', this.lmS)
  },
}
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
