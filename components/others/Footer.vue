<template>
  <div
    class="footer bg-[#0E3B76] pt-[41rem] pb-[32rem] text-white"
  >
    <div class="container  overflow-hidden">
      <div class="footer-top flex flex-col items-center justify-center">
        <nuxt-link
          to="/"
          class="logo inline-block w-[211rem] h-[33rem] mb-[41rem]"
          @click="scrollToTop()"
        >
          <Icon class="logo inline" name="logo" />
        </nuxt-link>

        <ul class="footer__links flex gap-[48rem]">
          <li>
            <nuxt-link
              class="mont font-semibold text-[14px] leading-[18px] transition hover:opacity-80 active:opacity-60"
              to="/"
            >
              {{ $t('footer.link_one')}} 
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="mont font-semibold text-[14px] leading-[18px] transition hover:opacity-80 active:opacity-60"
              to="/ "
            >
               {{ $t('footer.link_two')}} 
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              class="mont font-semibold text-[14px] leading-[18px] transition hover:opacity-80 active:opacity-60"
              to="/static"
            >
               {{ $t('footer.link_three')}} 
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="horizontal-stick mt-[40rem] mb-[24rem] w-full"></div>

      <div class="footer-bottom flex-center justify-between ">
        <p
          class="reserved mont font-semibold text-[14px] leading-[18px] text-[#8A96B1]"
        >
          © <span>  {{ $t('footer.rights_reserved')}} </span>2021-2022
        
        </p>

        <div class="footer-socials w-[205px] flex items-center justify-end">
          <div class="socials_wrapper  flex gap-[12rem] mr-[8rem]">
    
            <a
              class="socials__link block relative w-[28px] h-[28px] transition duration-500 ease"
              href="https://www.telegram.org/"
              target="_blank"
            >
             <span class="socials-tooltip absolute ">Telegram</span>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                class="hover:transition duration-300 "
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 14C28 21.732 21.732 28 14 28C6.26803 28 0 21.732 0 14C0 6.26803 6.26803 0 14 0C21.732 0 28 6.26803 28 14ZM9.37504 12.7175C7.97259 13.3299 6.53164 13.959 5.21398 14.6848C4.52595 15.1886 5.44039 15.545 6.29831 15.8792C6.43469 15.9323 6.56962 15.9849 6.69649 16.0374C6.80207 16.0699 6.90941 16.1041 7.0182 16.1387C7.97236 16.4427 9.03624 16.7817 9.96258 16.2718C11.4843 15.3977 12.9203 14.3871 14.3552 13.3773C14.8253 13.0464 15.2953 12.7157 15.7681 12.3898C15.7903 12.3756 15.8153 12.3594 15.8426 12.3418C16.2454 12.0806 17.1514 11.4934 16.8163 12.3026C16.0239 13.1692 15.1751 13.9362 14.3217 14.7076C13.7465 15.2274 13.1693 15.7491 12.6058 16.3045C12.115 16.7032 11.6054 17.5051 12.1549 18.0636C13.4207 18.9496 14.7062 19.8143 15.991 20.6784C16.4091 20.9596 16.8272 21.2407 17.2444 21.5226C17.9515 22.0872 19.0566 21.6305 19.2121 20.7483C19.2812 20.3425 19.3506 19.9367 19.42 19.5309C19.8036 17.2881 20.1874 15.0446 20.5263 12.7945C20.5724 12.4416 20.6246 12.0886 20.6769 11.7356C20.8035 10.8797 20.9304 10.0229 20.97 9.16247C20.8679 8.30381 19.8267 8.49263 19.2474 8.68572C16.2693 9.8189 13.3211 11.0361 10.3844 12.2747C10.0518 12.4221 9.71454 12.5693 9.37504 12.7175Z"
                  fill="#F5F7FB"
                  fill-opacity="0.7"
                />
              </svg>

            </a>

            <a
              class=" socials__link inline-block relative w-[28px] h-[28px] transition duration-500 ease"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <span class="socials-tooltip absolute ">Facebook</span>

              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                 class="hover:transition duration-300 "
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14ZM15.4592 22.2317V14.615H17.5618L17.8404 11.9902H15.4592L15.4628 10.6765C15.4628 9.99188 15.5279 9.62507 16.5111 9.62507H17.8255V7H15.7227C13.1968 7 12.3078 8.2733 12.3078 10.4146V11.9905H10.7333V14.6153H12.3078V22.2317H15.4592Z"
                  fill="#F5F7FB"
                  fill-opacity="0.7"
                />
              </svg>
            </a>

            <a
              class=" socials__link  relative w-[28px] h-[28px] transition duration-500 ease"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <span class="socials-tooltip absolute ">Instagram</span>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                 class="hover:transition duration-300 "
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14ZM14.0007 6.53333C11.9729 6.53333 11.7184 6.5422 10.9219 6.57844C10.127 6.61485 9.58443 6.74069 9.10967 6.92534C8.61858 7.11605 8.20199 7.37116 7.78697 7.78635C7.37163 8.20137 7.11652 8.61795 6.92518 9.10889C6.74007 9.58381 6.61407 10.1265 6.57829 10.9211C6.54267 11.7176 6.53333 11.9722 6.53333 14.0001C6.53333 16.0279 6.54236 16.2816 6.57844 17.0781C6.615 17.873 6.74085 18.4156 6.92534 18.8903C7.11621 19.3814 7.37132 19.798 7.7865 20.213C8.20137 20.6284 8.61795 20.8841 9.10874 21.0748C9.58381 21.2595 10.1265 21.3853 10.9213 21.4217C11.7177 21.458 11.9721 21.4668 13.9998 21.4668C16.0278 21.4668 16.2815 21.458 17.0779 21.4217C17.8728 21.3853 18.416 21.2595 18.8911 21.0748C19.382 20.8841 19.798 20.6284 20.2129 20.213C20.6282 19.798 20.8833 19.3814 21.0747 18.8905C21.2582 18.4156 21.3842 17.8728 21.4216 17.0782C21.4573 16.2818 21.4667 16.0279 21.4667 14.0001C21.4667 11.9722 21.4573 11.7177 21.4216 10.9213C21.3842 10.1264 21.2582 9.58381 21.0747 9.10905C20.8833 8.61795 20.6282 8.20137 20.2129 7.78635C19.7975 7.37101 19.3822 7.11589 18.8906 6.92534C18.4146 6.74069 17.8717 6.61485 17.0768 6.57844C16.2804 6.5422 16.0268 6.53333 13.9984 6.53333H14.0007Z"
                  fill="#F5F7FB"
                  fill-opacity="0.7"
                />
                <path
                 class="hover:transition duration-300 "
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3309 7.8789C13.5297 7.87859 13.7515 7.8789 14.0007 7.8789C15.9943 7.8789 16.2306 7.88606 17.0179 7.92184C17.7459 7.95513 18.141 8.07677 18.4042 8.17897C18.7527 8.31431 19.0011 8.47609 19.2623 8.73742C19.5236 8.99876 19.6854 9.24765 19.821 9.5961C19.9232 9.85899 20.045 10.2541 20.0782 10.9821C20.1139 11.7692 20.1217 12.0057 20.1217 13.9984C20.1217 15.9911 20.1139 16.2275 20.0782 17.0146C20.0449 17.7426 19.9232 18.1377 19.821 18.4006C19.6857 18.7491 19.5236 18.9972 19.2623 19.2584C19.0009 19.5197 18.7528 19.6815 18.4042 19.8168C18.1413 19.9195 17.7459 20.0408 17.0179 20.0741C16.2308 20.1099 15.9943 20.1177 14.0007 20.1177C12.0069 20.1177 11.7706 20.1099 10.9835 20.0741C10.2555 20.0405 9.86039 19.9189 9.59703 19.8167C9.24858 19.6813 8.99969 19.5196 8.73836 19.2582C8.47702 18.9969 8.31524 18.7486 8.17959 18.4C8.07739 18.1371 7.95559 17.742 7.92246 17.014C7.88668 16.2269 7.87952 15.9904 7.87952 13.9965C7.87952 12.0026 7.88668 11.7674 7.92246 10.9802C7.95575 10.2522 8.07739 9.85712 8.17959 9.59392C8.31493 9.24547 8.47702 8.99658 8.73836 8.73524C8.99969 8.47391 9.24858 8.31213 9.59703 8.17648C9.86023 8.07382 10.2555 7.95248 10.9835 7.91904C11.6723 7.88792 11.9393 7.87859 13.3309 7.87704V7.8789ZM17.9864 9.11869C17.4917 9.11869 17.0904 9.51956 17.0904 10.0144C17.0904 10.5091 17.4917 10.9104 17.9864 10.9104C18.4811 10.9104 18.8824 10.5091 18.8824 10.0144C18.8824 9.51972 18.4811 9.11869 17.9864 9.11869ZM14.0007 10.1656C11.8831 10.1656 10.1662 11.8825 10.1662 14.0001C10.1662 16.1177 11.8831 17.8338 14.0007 17.8338C16.1183 17.8338 17.8346 16.1177 17.8346 14.0001C17.8346 11.8825 16.1183 10.1656 14.0007 10.1656Z"
                  fill="#F5F7FB"
                  fill-opacity="0.7"
                />
                <path
                 class="hover:transition duration-300 "
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0007 11.5112C15.3752 11.5112 16.4896 12.6254 16.4896 14.0001C16.4896 15.3746 15.3752 16.489 14.0007 16.489C12.626 16.489 11.5118 15.3746 11.5118 14.0001C11.5118 12.6254 12.626 11.5112 14.0007 11.5112Z"
                  fill="#F5F7FB"
                  fill-opacity="0.7"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Site razrabotan -->
        <a
          href="https://uic.group/uz"
          target="_blank"
          class="made-by flex items-center cursor-pointer"
        >
          <div class="made-by__inner flex">
            <p
              class="mr-[8rem] mont font-semibold text-[#9FAAC1] text-[16px] leading-[21px] min-w-[140px] opacity-50"
            >
                {{ $t('footer.created')}}:
            </p>
            <Icon
              class="uic-icon w-[44px] h-[23px] transition duration-300 ease-in-out"
              name="uic_icon"
            />
          </div>
          <div class="uic-name ml-[15px] transition duration-300 ease-in-out">
            <Icon class="uic-icon" name="uic_name" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  .horizontal-stick {
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
}

.uic-name {
  visibility: invisible;
}

.made-by {
  transition: 0.6s ease-in-out;
  transform: translateX(107px);

  &:hover {
    transition: 0.6s ease-in-out;
    transform: translateX(0);

    .uic-name {
      visibility: visible;
      transition: 0.6s ease-in-out;
    }
  }
}


.socials__link {
  &:hover {
     transition: 0.5s ease-in-out;
    svg {
      path {
        transition: 0.5s ease-in-out;
        fill: #fff;
        fill-opacity: 1;
      }
    }
  }
}
// TOOLTIP for socials
.socials__link:hover  {
   .socials-tooltip{
      transition: 0.5s ease-in-out;
     opacity: 1;
  }
}
  .socials-tooltip {
    width: 70px;
    height: 25px;
    position: absolute;
    top: -35px;
    left: -20px;
    opacity: 0;
    background-color: #1f1f1f;
    font-size: 12px;
    display: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 100;
    @media screen and (min-width: 370px) and (max-width: 640px){
      display:none;
    }
    &::before {
      position: absolute;
      content: '';
      background-color: #1f1f1f;
      height: 10px;
      width: 10px;
      bottom: -5px;
      left: 47%;
      transform: translateX(-50%) rotate(45deg);
    }
  }

@media screen and (min-width: 370px) and (max-width: 952px) {
  .footer {
    padding-bottom: 50px;
    padding-top: 26px;
  }

  .logo {
    margin-bottom: 20px;
  }

  .footer__links {
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .horizontal-stick {
    margin-bottom: 16rem;
    margin-top: 28rem;
  }

  .footer-bottom {
    flex-direction: column;
  }

  .reserved {
    margin-bottom: 13px;
  }

  .footer-socials {
    order: -1;
    margin-bottom: 12px;
    width: 112px;
  }

  .made-by {
    cursor: unset;
    transform: translateX(0px);

    &:hover {
      transition: unset;
      transform: unset;
    }
  }

  .uic-name {
    display: none;
  }
}
</style>
