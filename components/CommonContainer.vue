<template>
  <div 
      class="background_color"
      :class="$style[sectionData.id]"
  >
    <div 
    :class="$style.container"
    >
      <h2 class="heading" :class="$style.heading">
        {{ sectionData.heading }}
      </h2>
      <p :class="$style.description">
        {{ sectionData.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionData: {
      required: true,
      default: () => {},
    }
    
  }
} 
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;


.heading {
  font-size: 100px;
}
.container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: c.$black;

}
.vision {
  /* background-color: c.$blue;  */
}

.service {
  background-color: #3C62C9;
}
.information {
  background-color: #798EC9;
}
.contact {
  background-color: #B5BBC9;
}
</style>
