<template>
  <div class="hero z-0 overflow-hidden">
    <div class="container">
      <div class="hero__inner flex justify-between pt-[146rem] gap-[46px]">
        <div class="hero__info max-w-[516px]">
          <img
            class="hero__icon mb-[32rem] max-w-[516rem] max-h-[81rem] w-full h-full"
            src="@/assets/images/hero-icon.png"
            alt="logo"
          />
          <p
            class="hero__text mb-[41rem] mont font-semibold text-[18px] leading-[23px]"
          >
            Aholining shahar hokimligi bilan qulay bog’lanishi uchun zarur va
            tezkor vosita yaratish maqsadida UIC Group tomonidan HokimQabuli
            tizimi yaratildi.
          </p>


          <ButtonIcon
          class="bot-button"
            v-bind="{
              text: '@HokimQabulBot',
              iconName: 'telegram_icon',
              customBgClass: 'bg-[#255491]',
              customFontClass:'font-bold'
            }"
          />
        </div>

        <div class="hero__image relative h-[410px] w-[716px] bottom-[-25px]">
          <img
            class="w-full h-full"
            src="@/assets/images/hero-device.png"
            alt="devices"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonIcon from '~/components/actions/ButtonIcon.vue'

export default {
  components: {
    ButtonIcon,
  },
}
</script>

<style lang="scss" scoped>
.hero {
  &__inner {
    @media screen and (min-width: 370px) and (max-width: 960px) {
      display: block;
    }
    @media screen and (min-width: 370px) and (max-width: 640px) {
      padding-top: 41px;
    }
  }
  &__info {
    @media screen and (min-width: 370px) and (max-width: 960px) {
      max-width: none;
      padding-bottom: 32px;
      text-align: center;
    }
  }

  &__icon {
    @media screen and (min-width: 370px) and (max-width: 960px) {
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and (min-width: 370px) and (max-width: 640px) {
     width: 225px;
     height: 35px;
    }

  }

  &__image {
    @media screen and (min-width: 640px) and (max-width: 1100px) {
      width: 450px;
      height: 330px;
    }
    @media screen and (min-width: 370px) and (max-width: 960px) {
      margin: 0 auto;
    }
    @media screen and (min-width: 370px) and (max-width: 640px) {
      display: none;
    }
  }

  &__text{
    @media screen and (min-width: 370px) and (max-width: 640px) {
      font-size:14px;
      line-height: 18px;;
    }
  }
}

.bot-button{
   @media screen and (min-width: 370px) and (max-width: 960px) {
    .button-span{
      // TODO:button span still olmayapti
      font-size: 16px;
      line-height: 20px;
    }
      margin: 0 auto;
      height: 44px;
    }
}
</style>
