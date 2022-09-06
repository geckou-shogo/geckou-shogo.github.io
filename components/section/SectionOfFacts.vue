<template>
  <div
    :class="$style.section"
  >
    <div
      :class="$style.section_container"
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
            :class="$style.contents"
          >
            <dt :class="$style.item_dt">
              {{ item.name }}
            </dt>
            <dd :class="$style.item_dd">
              <address
                v-if="item.name === '住所'"
                :class="$style.item_address"
              >
                <div
                  v-for="(value, key) in item.description"
                  :key="key"
                >
                  {{ value }}
                </div>
              </address>
              <div
                v-else-if="item.name === '事業内容'"
              >
                <div
                  v-for="text in item.description"
                  :key="text"
                >
                  {{ text }}
                </div>
              </div>
              <div
                v-else
                :class="$style.item_description"
              >
                {{ item.description }}
              </div>
            </dd>
          </SpotlightContainer>
        </div>
      </dl>
    </div>
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

address {
  font-style: normal;
}

.section {
  width: 100%;
  height: 100%;
  &_container {
    padding: 0 v.$val * 4;
    display: flex;
    height: 100%;
    align-items: center;
  }
  @include v.media('portrait') {
    &_container {
      flex-direction: column;
    }
  }
}

.list {
  display: flex;
  gap: 0 v.$val * 4;
}

.contents {
  padding: v.$val * 6;
}
</style>
