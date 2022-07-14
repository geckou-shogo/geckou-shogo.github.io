<template>
  <dl :class="$style.list">
    <div
      v-for="item in company"
      :key="item.term"
      :class="$style.list__item"
    >
      <dt :class="$style.list__term">
        {{ item.term }}
      </dt>
      <dd :class="$style.list__details">
        {{ item.details }}
      </dd>
    </div>
  </dl>
</template>

<script>
export default {
  data() {
    return {
      company: [
        {
          term: '商号',
          details: '合同会社Geckou',
        },
        {
          term: '設立',
          details: '2019年12月25日',
        },
        {
          term: '資本金',
          details: '100万円',
        },
        {
          term: '代表社員',
          details: '野島将吾',
        },
        {
          term: '事業内容',
          details: 'WEBデザイン、WEB開発の受託, WEBサービス開発',
        },
      ],
    }
  },
}
</script>

<style lang="scss" module>
@use '~/assets/scss/value' as v;
@use '~/assets/scss/font' as f;

.list {
  display: block;
  text-align: center;

  &__item {
    padding: v.$val;
    font-size: f.size('small');
  }

  &__term {
    font-weight: bold;
    padding: v.$val;
  }
}
</style>
