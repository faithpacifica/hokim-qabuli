<template>
<div>
  <Header v-bind="{ customBg: 'bg-[#0E3B76] blue-header' }" />

  <div class="breadcrump-wrapper py-[20px] bg-white">
    <div class="container">
      <Breadcrump class="text-blue rule" :navs="breadcrumb" />
    </div>
  </div>

  <div class="container">
    <div class="static-section my-[32px] bg-white rounded-[16px]">
      <div class="wrapper max-w-[778px] w-full mx-auto pt-[33px] pb-[40px]">
        <nuxt-link to="/" class="block mx-auto">
          <Icon class=" blue-logo block max-w-[211px] w-full h-[33px] text-center mb-[32px] mx-auto" name="blue_logo" />
        </nuxt-link>

        <SectionTitle class="mont font-800 mb-[12px] text-[#121E22] sm:text-[32px] text-[20px]  sm:leading-[42px] leading-[26px0]" 
        :title="$t('static_page.main_title')" />
        <h5 class="sm:mb-[32px] mb-[13px] mont font-800 text-[#121E22] sm:text-[24px] sm:leading-[31px]  text-[16px] leading-[21px]">
            {{ $t('static_page.title') }}
        </h5>

        <p class="mont font-medium sm:text-[18rem] sm:leading-[23rem] text-[14px] leading-[18px] text-[#121E22] text-justify mb-[32px]">
         {{ $t('static_page.text') }}
        </p>

        <div class="socials-link flex items-center justify-between ml-auto py-[8px] pl-[12px] pr-[4px] w-[280px] bg-[#F2F5F9] backdrop-blur-[44px] rounded-[6px]">
          <div v-if="windowLocation" class="mr-[11px] ">
            <p class=" mont font-semibold text-[#0E3B76]  leading-[20px] text-[16px] opacity-75 bg-transparent">
              {{ windowLocation }}
            </p>
          </div>

          <button @click="copyUrl()" class="rounded-[6px] relative transition duration-500  copy-button  p-[6px] bg-[#0E3B76] ">
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.21213 2.87988H0.639648V15.3599H10.2396V6.9074L6.21213 2.87988ZM6.07965 3.65236L9.46717 7.03988H6.07965V3.65236Z" fill="white"/>
          <path d="M11.3322 0.640015H5.75977V2.24001H6.21225H6.47721L6.66473 2.42753L10.6922 6.45505L10.8798 6.64257V6.90753V13.12H15.3598V4.66753L11.3322 0.640015ZM11.1998 4.80001V1.41249L14.5873 4.80001H11.1998Z" fill="white"/>
          </svg>

            <div v-if="copied" class="tooltip-customed absolute bg-[#121E22]  p-[4px] ease-linear transition duration-500  text-[12px] rounded-[4px] text-white  top-[-45px] right-0">
              {{ $t('static_page.copied') }}
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle.vue'
import Breadcrump from '~/components/common/Breadcrump.vue'
import Header from '~/components/others/Header.vue'
export default {
  components: {
    SectionTitle,
    Header,
    Breadcrump,
  },
  data() {
    return {
      breadcrumb: [{
        title:  this.$t('breadcrumb.rules'),
      }],
       windowLocation: '',
      copied: false,
    }
  },
  mounted() {
    this.windowLocation = window.location.href;
  },
  methods: {
    copyUrl() {
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.value = window.location.href;
      input.select();
      input.focus();
      document.execCommand('copy');
      input.remove();
      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 1800);
    }
  }
}
</script>

<style lang="scss">

.tooltip-customed {
  transition: all 0.3s ease-in-out;

  &::after {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    content: '';
    border: 8px solid transparent;
    border-top-color: black;
    left: 70%;
  }
}

@media screen and (min-width: 370px) and (max-width: 860px) {
  .wrapper {
    padding: 16px 16px 20px;
  }
}

@media screen and (min-width: 370px) and (max-width: 640px) {
  .breadcrump-wrapper {
    display: none;
  }

  .static-section {
    padding-top: 20px;
  }

  .blue-logo {
    width: 150px;
    height: 23px;
  }

  .socials-link{
    min-width: 311px;
    width: 100%;
    justify-content: center;
  }
}
</style>
