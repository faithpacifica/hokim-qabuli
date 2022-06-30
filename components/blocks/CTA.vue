<template>
<div class="cta bg-[#E7EBEE] pt-[64px] pb-[180px]">
  <div class="container h-[452px] overflow-hidden rounded-[16px]">
    <div class="cta__inner rounded-[16px] pt-[98px] pr-[67px]">
      <div class="cta__wrapper flex justify-end gap-[34px] top-[98rem] ml-auto">
        <img class="cta__phone max-w-[222px] w-full max-h-[464px] h-full" src="@/assets/images/cta-phone.png" alt="iphone" />

        <div class="cta__info flex flex-col justify-start max-w-[592px] w-full">
          <h3 class="mb-[8px] inter font-semibold text-[36rem] leading-[50rem] tracking-[0.02] relative">
            Hokimga murojaat qilish yoki qabulga yozilish tizimi mobil ilovasi
            <span class="title-line absolute top-[38px] left-0"><img src="@/assets/images/cta-vector.png" alt="blue-line"></span>
          </h3>

          <p class="mb-[24px] inter text-[18px] text-[#ffffffbf] leading-[28px]">
            Murojaatlar, qabulga yozilish qulayligini yaxshilash va
            kengaytirish uchun mobil versiyadan foydalaning.Bizni mobil
            qurilmangizga Play Market yoki App Store orqali yuklab oling.
          </p>

          <div class="cta__boxes flex gap-[16px]">

            <a href="/" target="_blank" class="ios__btn relative">
              <div class="store-btn">
                <img src="@/assets/images/icon-play.png" alt="" />
              </div>
              <div class="android__hover  transition duration-500 ease-in-out">
                <img src="@/assets/images/ios-img.png" alt="" />
              </div>
            </a>

            <a href="/" target="_blank" class="android__btn relative">
              <div class="store-btn transition duration-300">
                <img src="@/assets/images/icon-apple.png" alt="" />
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
  background-position: right 4% bottom 15%;
  @media screen and (min-width: 370px) and (max-width: 960px){
    padding: 32px 0 108px !important;
    background-position: right 4% bottom 8%;
    .container{
      height: 570px;
      border-radius:16px;
    }
  }
}

.cta__inner {
  // TODO:border,tel height ?
  background-image: url(@/assets/images/cta-bg.png),
    linear-gradient(278.38deg, #07264e 9.57%, #1958a8 100%);
  border: 2px solid rgba(14, 59, 118, 0.16);
  box-shadow: 0px 16px 44px rgba(14, 59, 118, 0.16);
  background-size: cover;
  background-position: left -50px top -30px, center;
  background-repeat: no-repeat;

  @media screen and (min-width: 370px) and (max-width: 1130px) {
    background-image: linear-gradient(278.38deg, #07264e 9.57%, #1958a8 100%);
    background-position: left 0 top 0;
  }
   @media screen and (min-width: 370px) and (max-width: 960px){
    padding: 16px 16px 0;
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
.cta__phone{
  width: 184px;
  height: 385px;
}
.cta__boxes{
  margin-bottom: 32px;
}
</style>
