<template>
  <span :class="$style.category_icon">
    <i :class="['bx', categoryIcon]" />
  </span>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'

export default Vue.extend({
  props: {
    category: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    categoryIcon() {
      switch (this.category) {
        case 'develop': {
          return 'bx-code-block'
        }
        case 'design': {
          return 'bx-palette'
        }
        default: {
          return 'bxs-file-blank'
        }
      }
    },
  },
})
</script>

<style lang="scss" module>
@use '~/assets/scss/font' as f;

.category_icon {
  line-height: 1;

  > i {
    font-size: f.size('medium');
  }
}
</style>
