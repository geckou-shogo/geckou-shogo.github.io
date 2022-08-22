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
          v-for="(item, index) in company"
          :key="company"
          :class="$style.item"
        >
          <dt :class="$style.item_dt">
            {{ item.name }}
          </dt>
          <dd :class="$style.item_dd">
            <div
              v-if="item.name !== '住所' && item.name !== '事業内容' "
              :class="$style.item_description"
            >
              {{ item.description }}
            </div>
            <div
              :class="$style.item_address"
            >
              {{ item.description.postcode }}
              {{ item.description.address1 }}
              {{ item.description.address2 }}
              {{ item.description.building }}
            </div>
            <div
              v-for="text in 1"
              v-if="item.name === '事業内容'"
              :class="$style.item_business"
            >
              {{ item.description[0] }}
              {{ item.description[1] }}
              {{ item.description[2] }}
            </div>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name : 'SectionOfInfo',
  props: {
    section: {
      required: true,
      type    : Object,
      default : () => {},
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
          name       : '設立',
          description: '2019年12月25日',
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

</style>
