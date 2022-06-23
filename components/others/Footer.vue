<template>
  <div class="footer bg-[#0E3B76] pt-[41rem] pb-[32rem] text-white">
    <div class="container">
      <div class="footer-top flex items-center">
        <nuxt-link
          :to="localePath('/')"
          class="inline-block w-[147rem] h-[34rem]"
          @click="scrollToTop()"
        >
          <Icon class="logo inline" name="logo" />
        </nuxt-link>
        <div
          class="vertical-stick mx-[32rem] h-[32rem] w-[1px] bg-[#808191] opacity-20"
        ></div>

        <ul class="footer__links flex gap-[24rem]">
          <li>
            <nuxt-link
              class="poppins-font text-[16rem] leading-[31rem] transition hover:text-[#6D35E1] active:opacity-60"
              :to="localePath('/')"
            >
              BIz haqimizda
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="poppins-font text-[16rem] leading-[31rem] transition hover:text-[#6D35E1] active:opacity-60"
              :to="localePath('/')"
            >
              Ilovalar haqida
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              class="poppins-font text-[16rem] leading-[31rem] transition hover:text-[#6D35E1] active:opacity-60"
              :to="localePath('/')"
            >
              Foydalanish qoidlari
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div
        class="horizontal-stick mt-[28rem] mb-[21rem] h-[1rem] w-full bg-[#808191] opacity-20"
      ></div>

      <div class="footer-bottom flex-center justify-between">
        <p class="reserved poppins-font text-[13px] leading-[17px] opacity-50">
          © 2020.
          <span>
            <!-- Barcha huquqlar himoyalangan. -->
            <!-- {{ $t('footer.all_rights')}} -->
          </span>
        </p>

        <div class="footer-socials flex items-center">
          <div class="hero-socials_wrapper flex gap-[9rem] mr-[8rem]">
            <!-- INSTA -->
            <a
              class="bg-[#808191] rounded-[50%] px-[5px] pb-[4px] pt-[6px] hover:bg-[#C013CA] transition duration-500 ease"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.00004 6.50003C5.8285 6.50003 6.50006 5.82847 6.50006 5.00001C6.50006 4.17155 5.8285 3.49999 5.00004 3.49999C4.17158 3.49999 3.50002 4.17155 3.50002 5.00001C3.50002 5.82847 4.17158 6.50003 5.00004 6.50003ZM5.00004 7.50005C6.38076 7.50005 7.50008 6.38073 7.50008 5.00001C7.50008 3.61928 6.38076 2.49997 5.00004 2.49997C3.61931 2.49997 2.5 3.61928 2.5 5.00001C2.5 6.38073 3.61931 7.50005 5.00004 7.50005Z"
                  fill="white"
                />
                <path
                  d="M8.00002 2.49995C8.00002 2.77609 7.77616 2.99995 7.50001 2.99995C7.22385 2.99995 7 2.77609 7 2.49995C7 2.2238 7.22385 1.99994 7.50001 1.99994C7.77616 1.99994 8.00002 2.2238 8.00002 2.49995Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.99999 0.999924H2.99993C1.89534 0.999924 0.999894 1.89537 0.999894 2.99996V7.00002C0.999894 8.10459 1.89534 9.00005 2.99993 9.00005H6.99999C8.10456 9.00005 9.00002 8.10459 9.00002 7.00002V2.99996C9.00002 1.89537 8.10456 0.999924 6.99999 0.999924ZM2.99993 -9.15527e-05C1.34304 -9.15527e-05 -0.00012207 1.34307 -0.00012207 2.99996V7.00002C-0.00012207 8.65689 1.34304 10.0001 2.99993 10.0001H6.99999C8.65686 10.0001 10 8.65689 10 7.00002V2.99996C10 1.34307 8.65686 -9.15527e-05 6.99999 -9.15527e-05H2.99993Z"
                  fill="white"
                />
              </svg>
            </a>
            <!-- youtube -->
            <a
              class="bg-[#808191] rounded-[50%] px-[5px] pt-[7px] pb-[6.5] hover:bg-[#FF0000] transition duration-500 ease"
              href="https://www.youtube.com/"
              target="_blank"
            >
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.79045 1.57729C9.73399 1.36466 9.62266 1.1706 9.4676 1.01454C9.31254 0.858471 9.11919 0.745887 8.90693 0.688056C7.61068 0.531853 6.30553 0.461466 5 0.477353C3.69447 0.461466 2.38931 0.531853 1.09306 0.688056C0.8808 0.745887 0.687457 0.858471 0.532396 1.01454C0.377335 1.1706 0.265999 1.36466 0.209538 1.57729C0.065177 2.37668 -0.00488009 3.18772 0.000263939 4.00002C-0.00488009 4.81233 0.065177 5.62336 0.209538 6.42275C0.265999 6.63538 0.377335 6.82945 0.532396 6.98551C0.687457 7.14157 0.8808 7.25416 1.09306 7.31199C2.38931 7.46819 3.69447 7.53858 5 7.52269C6.30553 7.53858 7.61068 7.46819 8.90693 7.31199C9.11919 7.25416 9.31254 7.14157 9.4676 6.98551C9.62266 6.82945 9.73399 6.63538 9.79045 6.42275C9.93482 5.62336 10.0049 4.81233 9.99973 4.00002C10.0049 3.18772 9.93482 2.37668 9.79045 1.57729V1.57729ZM3.97719 5.48709V2.51296L6.59063 4.00002L3.97719 5.48709Z"
                  fill="white"
                />
              </svg>
            </a>
            <!-- telegram -->
            <a
              class="bg-[#808191] rounded-[50%] px-[5px] py-[6px] hover:bg-[#279FDA] transition duration-500 ease"
              href="https://www.telegram.org/"
              target="_blank"
            >
              <svg
                width="11"
                height="9"
                viewBox="0 0 11 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.43241 1.50461C5.53678 1.87713 3.7468 2.64816 1.06245 3.81768C0.626551 3.99103 0.39821 4.1606 0.377423 4.32642C0.342292 4.60665 0.693216 4.71699 1.17109 4.86726C1.23609 4.8877 1.30344 4.90887 1.37249 4.93132C1.84264 5.08415 2.47507 5.26294 2.80385 5.27004C3.10208 5.27648 3.43494 5.15353 3.80243 4.90119C6.3105 3.20817 7.60518 2.35243 7.68646 2.33399C7.74381 2.32097 7.82327 2.30461 7.87711 2.35246C7.93095 2.40032 7.92566 2.49094 7.91996 2.51526C7.88519 2.66346 6.50768 3.94412 5.79482 4.60686C5.57259 4.81347 5.41495 4.96002 5.38272 4.99349C5.31054 5.06847 5.23697 5.1394 5.16626 5.20756C4.72948 5.62862 4.40193 5.94437 5.18439 6.46C5.56041 6.70779 5.8613 6.9127 6.16148 7.11712C6.48931 7.34037 6.81628 7.56304 7.23933 7.84036C7.34712 7.91101 7.45006 7.9844 7.55032 8.05588C7.93183 8.32786 8.27458 8.57221 8.69803 8.53324C8.94408 8.5106 9.19824 8.27924 9.32732 7.5892C9.63237 5.95843 10.232 2.42506 10.3706 0.96904C10.3827 0.841473 10.3674 0.678215 10.3552 0.606548C10.3429 0.53488 10.3173 0.43277 10.2241 0.357181C10.1138 0.26766 9.94346 0.248782 9.86729 0.250059C9.52096 0.256225 8.98959 0.440988 6.43241 1.50461Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="made-by flex items-center">
          <p
            class="mr-[8rem] poppins-font text-[13px] leading-[17px] ring-opacity-50 hover:text-[#B69AF0]"
          >
            <!-- {{ $t('footer.created_by')}} -->
            :
          </p>
          <Icon name="uic_icon" class="w-[33rem] h-[17rem]" />
        </div>
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

<style lang="scss">
.footer {
  .made-by {
    .icon svg {
      transition: 0.5s linear;
    }

    &:hover .icon svg {
      transform: translateX(20px);
    }
  }
}
</style>
