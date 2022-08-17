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
        <div
          :class="[$style.container ,$style.container_link]"
        >
          <div
            :class="$style.content_box_link"
          >
            <a href="https://teamstove.co.jp/">詳細はこちら</a>
          </div>
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
  margin: 5rem 2rem;
  display: flex;
  gap: 0 10rem;
}

.content_box {
  position: relative;
  &_title {
    position: relative;
    padding-bottom: 1em;
    width: 100%;
    font-size: f.size('max');
    text-align: center;
      &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: rgba($color: c.$white, $alpha: .28);
    }
  }
}

.container {
  position: relative;
  padding: 2rem;
  display: flex;
  width: calc(10rem * 1.16 + 14rem );
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba($color: c.$blue, $alpha: .05);
    mix-blend-mode: screen;
  }
  &_link {
    top: -5rem;
    left: 15rem;
    width: calc(10rem * 1.16 + 2rem );
  }
}

.stewp {
  font-family: f.family('stewp');
}

</style>
