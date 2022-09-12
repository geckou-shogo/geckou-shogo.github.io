<template>
  <div
    :class="$style.container"
  >
    <form
      method="post"
      action="https://hyperform.jp/api/rTWb9pIX"
      target="_blank"
    >
      <div>
        <label>お名前</label>
        <input name="お名前" type="text" required>
      </div>
      <div>
        <label>メールアドレス</label>
        <input name="email" type="email" required>
      </div>
      <div>
        <label>お問い合わせ内容</label>
        <textarea name="お問い合わせ内容" required />
      </div>
      <button type="submit">
        送信する
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name : 'SectionContact',
  props: {
    section: {
      required: true,
      type    : Object,
      default : () => { },
    },
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.container {
  > form {
    display: block;
  }
  @include v.media('portrait') {
    margin: v.$val * 8 0;
    padding: 0 v.$val * 2;
  }
}
</style>
