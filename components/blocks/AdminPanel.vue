<template>
<div class="admin-panel bg-[#E7EBEE] py-[64px]">
  <div class="container">
    <div class="admin-panel__inner rounded-[16px] pt-[29rem] pl-[52rem] pr-[36rem] flex gap-[16px] bg-[#285EA4]">
      <div class="admin-panel__info flex flex-col justify-start pt-[20px]">
        <h3 class="admin-panel__title uppercase mb-[8px] inter font-semibold text-[36rem] leading-[50rem] tracking-[0.02]">
           {{ $t('admin.title') }}
        </h3>

        <p class="admin-panel__text mb-[66rem] mont font-semibold text-[20px] leading-[26px] opacity-75">
           {{ $t('admin.text') }}
        </p>

        <ButtonIcon class="admin-button" v-bind="{
              text: 'hokimqabuli.uz',
              customBgClass: 'bg-[#ffffff1f]',
              customFontClass: 'font-semibold',
            }" />
      </div>

      <img class="admin-panel__image max-w-[483rem] w-full max-h-[407rem] h-full" src="@/assets/images/imac.png" alt="iphone" />
<!-- TODO:link bir ishlab bir ishlamayapti -->
       <ButtonIcon
            class="admin-button__mobile"
            v-bind="{
              link:'https://toshvil.uz/',
              text: 'hokimqabuli.uz',
              customBgClass: 'bg-[#ffffff1f]',
              customFontClass: 'font-semibold',
            }"
          />
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
.admin-button__mobile{
  display:none;
}
.admin-panel {
  background-image: url(@/assets/images/admin-plus.png);
  background-repeat: no-repeat;
  background-position: left 7% bottom 4%;

  &__inner {
    @media screen and (min-width: 370px) and (max-width: 860px) {
      flex-direction: column;
      padding: 16px 16px 32px;
      align-items: center;
      text-align: center;
    }
  }
}

@media screen and (min-width: 641px) and (max-width: 1060px) {
  .admin-panel__text {
    font-size: 18px;
    margin-bottom: 30px;
  }

  .admin-panel__image {
    max-width: 370px;
  }
}

@media screen and (min-width: 370px) and (max-width: 1060px) {
  .admin-button {
    height: 44px;

    span {
      font-size: 18px !important;
      line-height: 23px !important;
    }
  }

  .admin-panel__text {
    font-size: 14px;
    line-height: 18px;
  }
}

@media screen and (min-width: 370px) and (max-width: 860px) {
  .admin-button {
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 370px) and (max-width: 640px) {
  .admin-panel {
    //TODO: ORQA FON, SHADOW, BORADIUS lani uzgartirish
    padding-bottom: 117px;
    padding-top: 0;
    background-image: url(@/assets/images/admin-mobile.png);
    background-repeat: no-repeat;
    background-position: left 0% bottom 7%;
  }

  .admin-panel__info {
    padding-top: 0;
    @media screen and (min-width: 370px) and (max-width: 640px){
      padding-top: 0;
    }
  }

  .admin-panel__image {
    max-width: 265px;
    max-height: 223px;
    margin-bottom: 28px;
  }

  .admin-panel__text {
    margin-bottom: 20px;
  }

  .admin-panel__title {
    font-size: 20px;
    line-height: 26px;
  }

  .admin-button {
    display:none;
  }

  .admin-button__mobile{
    padding: 11px 62px 11px 62px;
    display:block;
    height: 44px;
  }
}
.admin-panel__inner{
  @media screen and (min-width: 370px) and (max-width: 640px){
    background-color: #0E3B76;
    border: 2px solid rgba(14, 59, 118, 0.16);
    box-shadow: 0px 16px 44px rgba(14, 59, 118, 0.16);
    border-radius: 16px;
    gap:0;
  }
}

</style>
