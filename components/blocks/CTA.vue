<template>
<div class="cta bg-[#E7EBEE] pt-[64px] pb-[180px]">
  <div class="container h-[452px] overflow-hidden rounded-[16px]">
    <div class="cta__inner rounded-[16px] pt-[98px] pr-[67px]">
      <div class="cta__wrapper flex justify-end gap-[34px] top-[98rem] ml-auto">
        <img class="cta__phone w-[230px] max-h-[464px] h-full" src="@/assets/images/cta-phone.png" alt="iphone" />

        <div class="cta__info flex flex-col justify-start max-w-[592px] w-full">
          <h3 class="mb-[8px] inter font-semibold text-[36rem] leading-[50rem] tracking-[0.02] relative">
             {{ $t('cta.title') }}
            <span class="title-line absolute top-[40px] left-0"><img src="@/assets/images/cta-vector.png" alt="blue-line"></span>
          </h3>

          <p class="mb-[24px] inter text-[18px] text-[#ffffffbf] leading-[28px]">
             {{ $t('cta.text') }}
          </p>

          <div class="cta__boxes flex gap-[16px]">

            <a href="/" target="_blank" class="ios__btn relative">
              <div class="store-btn w-[135px] h-[40px]  transition duration-300">
                <img class="w-full" src="@/assets/images/icon-play.png" alt="" />
              </div>
              <div class="android__hover  transition duration-500 ease-in-out">
                <img src="@/assets/images/ios-img.png" alt="" />
              </div>
            </a>

            <a href="/" target="_blank" class="android__btn relative">
              <div class="store-btn transition duration-300  w-[135px] h-[40px]">
                <img  class="w-full" src="@/assets/images/icon-apple.png" alt="" />
              </div>
              <div class="android__hover transition duration-500 ease-in-out">
                <img src="@/assets/images/android-img.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cta {
  background-image: url(@/assets/images/cta-plus.png);
  background-repeat: no-repeat;
  background-size: 153px 166px;
  background-position: right 3% bottom 15%;
  @media screen and (min-width: 370px) and (max-width: 960px){
    padding: 32px 0 108px !important;
    background-position: right 0% bottom 8%;
    // TODO:margin berganim hisobiga pluslari kurinmayapti
    margin-left: 16px;
    margin-right: 16px;
    .container{
      height: 530px;
      border-radius:16px;
      padding: 0;
    }
  }
}

.cta__inner {

  background-image: url(@/assets/images/cta-bg.png),
    linear-gradient(278.38deg, #07264e 9.57%, #1958a8 100%);
  border: 1px solid rgba(14, 59, 118, 0.16);
  box-shadow: 0px 16px 44px rgba(14, 59, 118, 0.16);
  background-size: initial;
  background-position: left -47px top -29px, center;
  background-repeat: no-repeat;

  @media screen and (min-width: 370px) and (max-width: 1130px) {
    background-image: linear-gradient(278.38deg, #07264e 9.57%, #1958a8 100%);
    background-position: left 0 top 0;
  }
   @media screen and (min-width: 370px) and (max-width: 960px){
    padding: 16px 16px 0;
    border-radius:16px;
   }
}

.android__hover {
  opacity: 0;
  width: 120px;
  height: 120px;
  position: absolute;
  top: -124px;
  left: 5px;
  padding: 8px;
  background-color: rgba(13, 33, 68, .7);
  border-radius: 6px;
  transition: .4s ease-in-out;
}

.ios__btn:hover {
  transition: 0.3s ease;

  .android__hover {
    opacity: 1;
  }
}

.android__btn:hover {
  transition: 0.3s ease;

  .android__hover {
    opacity: 1;
  }
}

@media screen and (min-width: 370px) and (max-width: 960px) {
  .cta{
    padding-bottom: 108px;
  }
  .container{
    height: none;
  }
  .cta__wrapper{
    flex-direction: column-reverse;
    align-items: center;
    gap:0;
  }
  .cta__info{
    max-width: none;
    align-items: center;
    text-align: center;
    h3{
      font-size: 20px;
      line-height:26px;
      .title-line{
        top: 25px;
      }
    }
    p{
      font-size: 14px;
      line-height:18px;
      margin-bottom: 18px;

    }
  }
}

.cta__boxes{
  margin-bottom: 32px;
}

@media screen and (min-width: 370px) and (max-width: 500px) {
.cta__phone{
  width: 190px;
}
.cta .container{
  height: 500px;
}
}
</style>
