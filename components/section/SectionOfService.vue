<template>
  <div
    :class="$style.container"
  >
    <div
      :class="$style.contents"
    >
      <SpotlightContainer
        :class="$style.content"
      >
        <template
          #heading
        >
          <h3
            :class="$style.stewp"
          >
            STEWP
          </h3>
        </template>
        <p
          :class="$style.text"
        >
          現行のサイトにワードプレスの記事を<br>表示することができるサービスです。
        </p>
      </SpotlightContainer>
      <div
        :class="$style.link_content"
      >
        <SpotlightContainer>
          <div
            :class="$style.link"
          >
            <a
              href="https://stewp.app/"
              target="_blank"
            >
              詳細はこちら
            </a>
          </div>
        </SpotlightContainer>
      </div>
    </div>
    <div
      :class="$style.contents"
    >
      <SpotlightContainer
        :class="$style.content"
      >
        <template
          #heading
        >
          <h3>
            WEBサイト制作
          </h3>
        </template>
        <p
          :class="$style.text"
        >
          ランディングページからコーポレートサイトまで、
          量産されたテンプレートではなく、目的に合わせたデザインで制作します。
        </p>
      </SpotlightContainer>
    </div>
    <div
      :class="$style.contents"
    >
      <SpotlightContainer
        :class="$style.content"
      >
        <template
          #heading
        >
          <h3>
            WEBサービス開発
          </h3>
        </template>
        <p
          :class="$style.text"
        >
          自社アプリやECサイトなどのWEB開発も承っております。<br>
          あなたのアイディアの実現や、抱えている問題の解決など、私たちにお手伝いさせてください。
        </p>
      </SpotlightContainer>
    </div>
    <div
      :class="$style.contents"
    >
      <SpotlightContainer
        :class="$style.content"
      >
        <SquareText
          :htmlString="message"
        />
      </SpotlightContainer>
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
  data() {
    return {
      message: 'Geckouは<a :class="$style.stove" href="https:teamstove.co.jp" target="_blank">株式会社STOVE</a>と業務提携をしており、バックエンドのシステムにノーコードツール"CORE"を使用し、迅速な開発を可能としています。<br>まずはお気軽にご相談ください',
    }
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;
@use '~/assets/scss/color' as c;

.container {
  padding: 0 v.$val * 51 0 v.$val * 32;
  height : 100%;
  display: flex;
  gap    : v.$val * 24;
  height : 100%;

  @include v.media ('portrait') {
    padding       : v.$val * 4;
    flex-direction: column;
    align-items   : center;
    gap           : v.$val * 10 0;
  }
}

.contents {
  flex    : 0 0 auto;
  position: relative;

  > * {
    position: relative;
  }

  &:first-child {
    .content {
      top: 8%;
    }
  }

  &:nth-child(2) {
    .content {
      top: 12%;
    }
  }

  &:nth-child(3) {
    .content {
      top: 7%;
    }
  }

  &:nth-child(4) {
    .content {
      top: 10%;
    }
  }
}

.text {
  max-width: 35em;
  padding  : v.$val * 2 v.$val * 8 0;
}

.link_content {
  width: v.$val * 24;
  top  : - v.$val * 12;
  left : calc(100% - #{v.$val} * 12);

  .link {
    display        : flex;
    justify-content: center;
    align-items    : center;
    width          : 100%;
    height         : 100%;

    > a {
      display       : block;
      width         : 100%;
      padding-bottom: v.$val;
      text-align    : center;
      border-bottom : 1px solid rgba(c.$accent, .28);
    }
  }
  @include v.media ('portrait') {
    left: 50%;
  }
}

.stewp {
  font-family   : f.family('stewp');
  font-weight   : normal;
  letter-spacing: .1em;
}
</style>
