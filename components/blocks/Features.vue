<template>
  <div class="features pt-[40rem] pb-[68rem]">
    <div class="container">
      <h3
        class="features__title mb-[2px] text-center mont font-bold text-[32rem] leading-[41rem]"
      >
      {{$t('features.title_main')}}
      </h3>
      <p
        class="features__text mb-[44rem] text-center mont font-semibold text-[20rem] leading-[26rem] opacity-50"
      >
        {{$t('features.text_main')}}
      </p>

      <div data-aos="zoom-in-up" data-aos-duration="700" data-aos-easing="easy-in-out"  class="features__card-wrapper flex gap-[28rem]">
        <!-- text: $t('statistics.revenue') -->
        <FeatureCard
          v-for="(item, index) in features"
          :key="index"
          v-bind="{
            name: item.name,
            title: item.title,
            text: item.text,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FeatureCard from '@/components/cards/FeatureCard'
export default {
  components: {
    FeatureCard,
  },
  data() {
    return {
      features: [
        {
          name: 'edit_message',
          title:this.$t('features.data_title_one'),
          text:this.$t('features.data_text_one'),
        },
        {
          name: 'doc_writing',
          title: this.$t('features.data_title_two'),
          text:this.$t('features.data_text_two') ,
        },
        {
          name: 'config_message',
          title: this.$t('features.data_title_three'),
          text: this.$t('features.data_text_three'),
        },
        {
          name: 'security',
          title: this.$t('features.data_title_four'),
          text:this.$t('features.data_text_four') ,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.features {
  background-image: url(@/assets/images/pattern-bg.png);
  background-size: cover;
  @media screen and (min-width: 370px) and (max-width: 639px) {
    background-image:none;
    background-color:#0E3B76 ;
    padding: 25px 1px 25px 1px;

    .features__title, .features__text {
      display: none;
    }
  }

  &__card-wrapper {
  @media screen and (min-width: 370px) and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (min-width: 370px) and (max-width: 639px) {
      gap: none;
  }
}
}
</style>
