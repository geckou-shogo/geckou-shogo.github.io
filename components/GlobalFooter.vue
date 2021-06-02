<template>
  <footer :class="$style.footer">
    <small>&copy; Geckou</small>
  </footer>
</template>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;

.footer {
  margin-top: v.$val * 4;
  padding: v.$val * 2;
  text-align: center;

  > small {
    font-size: f.size('min');
  }
}
</style>
