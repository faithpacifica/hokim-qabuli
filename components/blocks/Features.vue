<template>
  <div class="features pt-[40rem] pb-[68rem]">
    <div class="container">
      <h3
        class="features__title mb-[2px] text-center mont font-bold text-[32rem] leading-[41rem]"
      >
        Ilova va bot umumiy ko‘rinishi
      </h3>
      <p
        class="features__text mb-[44rem] text-center mont font-semibold text-[20rem] leading-[26rem] opacity-50"
      >
        Ushbu ilova va bot orqali o'zingizni qiziqtirayotgan masala bo'yicha yechim topishingiz mumkin.
      </p>

      <div class="features__card-wrapper flex gap-[28rem]">
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
          title: 'Murojaat qilish',
          text: "O'zingizga kerakli bo'lgan qismni topishingiz uchun qulay qilib ishlangan",
        },
        {
          name: 'doc_writing',
          title: 'Qabulga yozilish',
          text: 'Yoqimli ekanligini yanada yaxshiroq his qilasiz (qiling)',
        },
        {
          name: 'config_message',
          title: 'Oson sozlash',
          text: "Murakkab bo'lmagan sozlash panelida o'zingizga moslash imkoniyati",
        },
        {
          name: 'security',
          title: "Qo'llab-quvvatlash",
          text: 'Malakali xodimlar tomonidan doimiy savollaringizga javoblar olish imkoniyati',
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
