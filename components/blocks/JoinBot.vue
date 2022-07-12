<template>
<div class="container-fluid max-w-[1660px] w-full mx-auto"> 
  <div class="relative join-bot ">
    <img class="absolute top-0 left-0 patterns w-[115px] h-full" src=" @/assets/images/pattern-left.png" alt="">
    <div class="container ">
      <div class="container-inner ">
        <div class="join-bot__inner   flex gap-[83rem]">

          <div class="absolute bottom-0 iphone-wrapper ">
            <img data-aos="zoom-in-up" data-aos-duration="700" data-aos-easing="easy-in-out" class="iphone w-[443px] "
              src="@/assets/images/iphone-big.png" alt="iphone" />
          </div>

          <div
            class="join-bot__info flex flex-col  ml-auto absolute top-0 right-[115px]  max-w-[677px] pt-[44px] pb-[50px] w-full">
            <h3 class="mb-[8px] inter font-semibold text-[36rem] leading-[50rem] tracking-[0.02]">
              {{ $t('cta.title') }}
            </h3>

            <p class="mb-[24px] inter font-medium text-[20px] leading-[24px]">
              {{ $t('cta.text') }}
            </p>

            <ButtonIcon class="bot-button" v-bind="{
              link: 'https://t.me/hokimqabulibot',
              text: '@HokimQabulBot',
              iconName: 'telegram_icon',
              customBgClass: 'bg-[#ffffff1f]',
              customFontClass: 'font-semibold',
            }" />
          </div>

        </div>
      </div>
    </div>
    <img class="absolute top-0 right-0 patterns " src="@/assets/images/pattern-right.png" alt="">
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
.join-bot {
  min-height: 363px;
  background-color: #0E3B76;
  background-image: url(@/assets/images/telegram.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right 115px top -8px;
}

.bot-button {
  @media screen and (min-width: 370px) and (max-width: 1160px) {
    height: 44px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 370px) and (max-width: 1224px) {
  .patterns {
    width: 0;
  }
}

@media screen and (min-width: 960px) and (max-width: 1224px) {

  .iphone-wrapper {
    width: 350px;
  }

  .join-bot__info {
    max-width: 520px;

    h3 {
      text-align: center;
      font-size: 30px;
      line-height: 38px;
    }

    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
}


@media screen and (min-width: 370px) and (max-width: 960px) {
  .container {
    padding: 0;
  }

  .iphone-wrapper {
    width: unset;
    position: relative;
    top: -45px;

    img {
      margin: 0 auto;
    }
  }

  .container-inner {
    background-color: #0E3B76;
    border: 2px solid rgba(14, 59, 118, 0.16);
    box-shadow: 0px 16px 44px rgba(14, 59, 118, 0.16);
    border-radius: 16px;
    padding: 0 16px 0;
    background-image:
      url(@/assets/images/telegram.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right top;
  }

  .join-bot {
    background-image: unset;
    min-height: 343px;
  }

  .join-bot__info {
    padding: 0;
    margin-right: auto;
    position: static;
    text-align: center;
    position: relative;
    z-index: 20;
    right: 0;
    left: 0;
    margin-top: -60px;
    padding-bottom: 32px;
  }

  .join-bot__inner {
    display: block;
    gap: 0;
  }

  .iphone {
    width: 237px;
    height: 257px;
  }
}

@media screen and (min-width: 640px) and (max-width: 959px) {
  .join-bot__info {
    h3 {
      font-size: 25px;
      line-height: 32px;
    }

    p {
      font-size: 16px;
      line-height: 20px;
    }
  }


}

@media screen and (min-width: 370px) and (max-width: 639px) {
  .join-bot {
    margin-bottom: 42px;
    margin-top: 20px;
  }

  .join-bot__info {
    padding-top: 0;
    max-width: unset;
    text-align: center;


    h3 {
      font-size: 20px;
      line-height: 26px;
    }

    p {
      font-size: 14px;
      line-height: 18px;
    }
  }

}
</style>
