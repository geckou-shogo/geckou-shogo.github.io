<template>
  <div
    :class="$style.section"
  >
    <div
      :class="$style.section_content"
    >
      <div
        :class="$style.content_box"
      >
        <div :class="$style.container">
          <h2 :class="[$style.content_box_title, $style.stewp]">
            STEWP
          </h2>
          <p :class="$style.content_box_text">
            現行のサイトにワードプレスの記事を表示することができるサービスです。
          </p>
        </div>
      </div>
      <div
        :class="$style.content_box"
      >
        <div :class="$style.container">
          <h2 :class="$style.content_box_title">
            WEBサイト制作
          </h2>
          <p :class="$style.content_box_text">
            ランディングページからコーポレートサイトまで、量産されたテンプレートではなく、目的に合わせたデザインで制作します。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'SectionVision',
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

.section_content {
  display: flex;
  gap: 0 10rem;
}

.content_box {
  position: relative;
}

.container {
  display: flex;
  width: calc(10rem * 1.16 + 5rem );
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stewp {
  font-family: f.family('stewp');
}

</style>
