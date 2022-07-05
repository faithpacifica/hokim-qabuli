<template>
<div class="join-bot  ">
  <div class="container ">
    <div class="container-inner ">
      <div class="join-bot__inner  flex gap-[83rem]">

        <div class="iphone-wrapper relative w-[443px] ">
          <img data-aos="zoom-in-up" data-aos-duration="700" data-aos-easing="easy-in-out" class="iphone w-full absolute bottom-0 -top-[127px]" src="@/assets/images/iphone-big.png" alt="iphone" />
        </div>

        <div class="join-bot__info flex flex-col ml-auto pt-[44px] pb-[50px]  max-w-[677px] w-full">
          <h3 class="mb-[8px] inter font-semibold text-[36rem] leading-[50rem] tracking-[0.02]">
              {{ $t('cta.title') }}
          </h3>
    
          <p class="mb-[24px] inter font-medium text-[20px] leading-[24px]">
              {{ $t('cta.text') }}
          </p>

          <ButtonIcon class="bot-button"
           v-bind="{
                link:'https://t.me/hokimqabulibot',
                text: '@HokimQabulBot',
                iconName: 'telegram_icon',
                customBgClass: 'bg-[#ffffff1f]',
                customFontClass: 'font-semibold',
              }" />
        </div>
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
.join-bot {
  height: 100%;
  background-image:
    url(@/assets/images/telegram-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 1160px) and (max-width: 1580px) {
    background-size: 135%;
    height: none;
  }

  @media screen and (min-width: 370px) and (max-width: 1159px) {
    background-image: none;
  }
}

.bot-button {
  @media screen and (min-width: 370px) and (max-width: 1160px) {
    height: 44px;
    margin-right: auto;
    margin-left: auto;
  }
}

@media screen and (min-width: 1160px) and (max-width: 1438px) {
  .iphone-wrapper {
    width: 370px;

    .iphone {
      top: -97px;
    }
  }

  .join-bot__info {
    h3 {
      font-size: 32px;
      line-height: 40px;
    }

    p {
      font-size: 18px;
      line-height: 22px;
    }
  }
}

@media screen and (min-width: 960px) and (max-width: 1159px) {
  .container-inner {
    padding: 35px 16px 0;
  }

  .iphone-wrapper {
    width: 350px;

    .iphone {
      left: -40px;
      top: -103px;
    }
  }

  .join-bot__info {
    padding-bottom: 50px;
    max-width: 600px;

    h3 {
      text-align: center;
    }
  }
}

@media screen and (min-width: 370px) and (max-width: 960px) {
  .iphone {
    width: 237px;
    height: 257px;
  }
}

@media screen and (min-width: 640px) and (max-width: 1159px) {
  .container-inner {
    background-color: #0E3B76;
    border: 2px solid rgba(14, 59, 118, 0.16);
    box-shadow: 0px 16px 44px rgba(14, 59, 118, 0.16);
    border-radius: 16px;
    // padding: 170px 16px 0;
  }

  .join-bot {
    background-color: #E7EBEE;
    padding-bottom: 42px;
    padding-top: 20px;
  }

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

  .join-bot__inner {
    display: block;
    gap: 0;
  }
}

@media screen and (min-width: 370px) and (max-width: 959px) {
  .container-inner {
    background-color: #0E3B76;
    border: 2px solid rgba(14, 59, 118, 0.16);
    box-shadow: 0px 16px 44px rgba(14, 59, 118, 0.16);
    border-radius: 16px;
    padding: 170px 16px 0;
      background-image:
    url(@/assets/images/telegram.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  }



  .join-bot {
    background-color: #E7EBEE;
    padding-top: 20px;
    padding-bottom: 42px;
  }

  .iphone-wrapper {
    width: unset;
    img{
      top:-210px;
    }
  }

  .join-bot__info {
    max-width: unset;
    text-align: center;
    padding-bottom: 32px;

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

.join-bot__inner {
  display: block;
  gap: 0;
}

  .iphone-wrapper img{
   @media screen and (min-width: 700px) and (max-width: 959px){
     left: 36%;
    }

   @media screen and (min-width: 600px) and (max-width: 699px){
     left: 28%;
  }
   @media screen and (min-width:460px) and (max-width: 599px){
      left: 20%;
  }
   @media screen and (min-width:370px) and (max-width: 459px){
      left: 10%;
  }
}
</style>
