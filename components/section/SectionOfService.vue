<template>
  <div
    :class="$style.section"
  >
    <div
      :class="$style.section_container"
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
              <a href="" target="_blank">詳細はこちら</a>
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
      <div
        :class="$style.section_content"
      >
        <div
          :class="$style.content_box"
        >
          <div :class="$style.container">
            <h2 :class="$style.content_box_title">
              WEBサービス開発
            </h2>
            <p :class="$style.content_box_text">
              自社アプリやECサイトなどのWEB開発も承っております。<br>
              あなたのアイディアの実現や、抱えている問題の解決など、私たちにお手伝いさせてください。
            </p>
          </div>
        </div>
        <div
          :class="$style.content_box"
        >
          <div :class="$style.container">
            <p :class="$style.content_box_text">
              Geckouは<a :class="$style.content_box_text_link" href="https://teamstove.co.jp/" target="_blank">株式会社STOVE</a>と業務提携をしており、バックエンドのシステムにノーコードツール”CORE”を使用し、迅速な開発を可能としています。<br>
              まずはお気軽にご相談ください
            </p>
          </div>
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

.section_container {
  display: flex;
  gap: 0 15rem;
}

.section_content {
  margin: 8rem 2rem;
  display: flex;
  gap: 0 10rem;
  &:nth-of-type(2) {
    margin: 4rem;
    gap: 0;
    .content_box {
      &:nth-of-type(2) {
        top: 10rem;
        left: -4rem;
      }
    }
  }

}

.content_box {
  position: relative;
  &_title {
    position: relative;
    padding-bottom: 1rem;
    width: 100%;
    font-size: clamp(1.5rem, 1.25rem + 1.25vw, 2.188rem);
    text-align: center;
      &::after {
      content: "";
      position: absolute;
      bottom: 0;
      display: block;
      width: 100%;
      height: 1px;
      background-color: rgba($color: c.$white, $alpha: .28);
    }
  }
  &_text {
    padding-top: 1rem;
    white-space: normal;
    &_link {
      color: c.$yellow;
      position: relative;
      z-index: 1;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0.2rem;
        width: 0%;
        height: 1px;
        background-color: c.$yellow;
        z-index: -1;
        transition: width .5s;
      }
      &:hover::after {
        width: 100%;
      }
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
    pointer-events: none;
  }
  &_link {
    top: -5rem;
    left: 15rem;
    width: calc(10rem * 1.16 + 2rem );
    a {
      position: relative;
      color: c.$yellow;
      z-index: 1;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0.2rem;
        width: 0%;
        height: 1px;
        background-color: c.$yellow;
        z-index: -1;
        transition: width .5s;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }
}

.stewp {
  font-size: clamp(1.5rem, 1.023rem + 2.39vw, 2.813rem);
  font-family: f.family('stewp');
}

</style>
