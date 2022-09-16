<template>
  <div
    :class="$style.container"
  >
    <form
      method="post"
      action="https://hyperform.jp/api/rTWb9pIX"
      target="_blank"
    >
      <div
        :class="$style.item"
      >
        <label>お名前</label>
        <input
          name="お名前"
          type="text"
          required
          :class="$style.textbox"
        >
      </div>
      <div
        :class="$style.item"
      >
        <label>メールアドレス</label>
        <input
          name="email"
          type="email"
          required
          :class="$style.textbox"
        >
      </div>
      <div
        :class="$style.item"
      >
        <label>お問い合わせ内容</label>
        <textarea
          name="お問い合わせ内容"
          required
          :class="$style.textarea"
        />
      </div>
      <div
        :class="$style.button_area"
      >
        <button
          type="submit"
          :class="$style.button"
        >
          送信する
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name : 'SectionOfContact',
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
    padding: v.$val * 8 v.$val * 12;

    @include v.media('portrait') {
      padding: v.$val * 4 v.$val * 2;
    }
  }
}

.item {
  padding: v.$val * 2;

  label {
    display      : block;
    margin-bottom: v.$val * 2;
  }
}

.textbox {
  width           : 28em;
  max-width       : calc(100% - v.$val * 2);
  margin-left     : v.$val * 2;
  padding         : v.$val * 2;
  background-color: rgba(c.$white, .1);
  border-radius   : v.$val;
  color           : c.$white;
  mix-blend-mode  : overlay;
}

.textarea {
  @extend .textbox;
  height: 8em;
}

.button_area {
  padding        : v.$val * 4 v.$val * 2;
  display        : flex;
  justify-content: flex-end;
}

.button {
  padding         : v.$val * 2;
  background-color: c.$main;
  border-radius   : v.$val;
  line-height     : 1;
  box-shadow      : 2px 2px 2px rgba(c.$black, .5);
}

</style>
