<template>
  <div
    :class="$style.container"
  >
    <dl
      :class="$style.list"
    >
      <div
        v-for="item in company"
        :key="item.name"
        :class="$style.item"
      >
        <SpotlightContainer
          :class="$style.content_wrapper"
        >
          <div
            :class="$style.content"
          >
            <dt
              :class="$style.team"
            >
              {{ item.name }}
            </dt>
            <dd :class="$style.item_dd">
              <component
                :is="item.name === '住所' ? 'address' : 'span'"
                v-if="typeof item.description === 'object'"
                :class="$style.item_address"
              >
                <div
                  v-for="value in item.description"
                  :key="value"
                >
                  {{ value }}
                </div>
              </component>
              <div
                v-else
              >
                {{ item.description }}
              </div>
            </dd>
          </div>
        </SpotlightContainer>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name : 'SectionOfFacts',
  props: {
    section: {
      required: true,
      type    : Object,
      default : () => { },
    },
  },
  data() {
    return {
      company: [
        {
          name       : '商号',
          description: '合同会社Geckou',
        },
        {
          name       : '設立',
          description: '2019年12月25日',
        },
        {
          name       : '代表社員',
          description: '野島将吾',
        },
        {
          name       : '資本金',
          description: '100万円',
        },
        {
          name       : '住所',
          description: {
            postcode: '〒1800006',
            address1: '東京都武蔵野市',
            address2: '中町２丁目８番１４号',
            building: 'ＷＩＬＬ吉祥寺３０２',
          },
        },
        {
          name       : '事業内容',
          description: [
            'WEBデザイン、',
            'WEB開発の受託',
            'WEBサービス開発',
          ],
        },
      ],
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

  @include v.media('portrait') {
    margin: v.$val * 4 0;
    padding: 0 v.$val * 4;
  }
}

.list {
  height : 100%;
  display: flex;
  gap    : v.$val * 20;

  @include v.media('portrait') {
    flex-direction: column;
    gap           : v.$val * 4 0;
  }

  .item {
    position: relative;

    .content_wrapper {
      position: relative;
    }

    &:nth-child(odd) {
      > * {
        top: 32%;
      }
    }

    &:nth-child(even) {
      > * {
        top: 24%;
      }
    }
  }
}

.content {
  display        : flex;
  flex-direction : column;
  justify-content: center;
  height         : 100%;
  padding        : v.$val * 8;
}

.team {
  margin-bottom: v.$val;
  font-weight  : bold;
}
</style>
