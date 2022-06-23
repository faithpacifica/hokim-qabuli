<template>
  <div class="header py-[25rem]">
    <div class="container">
      <div class="flex-center-between">
        <nuxt-link class="logo-link" :to="localePath('/')">
          <Icon class="block" name="logo" />
        </nuxt-link>

        <div class="language-dropdown w-[140px] -640:w-[130px]">
          <div class="flex-center gap-[4rem] relative language-options">
            <Icon name="language_icon" class="w-[24px] h-[20px]" />
            <div
              class="flex-center gap-[4rem] cursor-pointer group"
              @click="showLang = !showLang"
            >
              <span
                class="mr-[4px] ml-[8px] text-[#373A43] dark:text-white dark:opacity-60 text-[14px] font-semibold leading-[20rem]"
                >{{ currentLang }}</span
              >
              <Icon
                name="lang_arrow"
                class="w-[16px] h-[16px] ease-in-out duration-300"
                :class="{ 'rotate-180': showLang }"
              />
            </div>

            <transition name="lang">
              <div
                v-if="showLang"
                v-click-outside="externalClick"
                class="language-options transition-all duration-200 absolute top-[45rem] w-[126px]"
              >
                <div
                  class="bg-white border-[1px] border-[#E2E3E6] dark:bg-[#1A1D27] rounded-[10rem] overflow-hidden"
                >
                  <div
                    v-for="(item, index) in langs"
                    :key="index"
                    class="whitespace-nowrap flex-center gap-[8rem]"
                    :class="{ 'lang-active': showLang }"
                  >
                    <span
                      class="language-span border-b-[1px] border-b-[#E2E3E6] w-full dark:border-b-[#CED1D9] dark:bg-[#1A1D27] dark:text-white hover:bg-[#F3F3F4] cursor-pointer transition duration-200 flex justify-start pr-[15px] pl-[12px] py-[8px] inter font-medium text-[#373A43] text-[14px] leading-[20px]"
                      :class="{
                        'border-b-[0px]': index === langs.length - 1,
                      }"
                      @click="
                        _i18n.setLocale(`${item.short}`)
                        showLang = false
                      "
                    >
                      {{ item.title }}
                      <Icon
                        class="click-icon ml-[11px] opacity-0 transition duration-400"
                        name="click_icon"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  components: {},
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      showLang: false,
      language: false,
      langs: [
        {
          title: 'English',
          icon: 'english',
          short: 'en',
        },
        {
          title: 'Russian',
          icon: 'russia',
          short: 'ru',
        },
        {
          title: 'Uzbek',
          icon: 'uzbek',
          short: 'uz',
        },
      ],
    }
  },

  computed: {
    currentLang() {
      switch (this.$i18n.locale) {
        case 'uz':
          return "O'zbekcha"
        case 'ru':
          return 'Русский'
        case 'en':
          return 'English'
        default:
          return 'English'
      }
    },
  },
  methods: {
    externalClick(event) {
      console.log('External click. Event: ', event)
      this.showLang = false
    },
  },
}
</script>

<style lang="scss">
.lang-enter-active {
  animation: lang 0.4s ease-out;
}

.lang-leave-active {
  animation: lang 0.4s ease-in reverse;
}

.language-span:hover .click-icon {
  transition: 0.4s ease-in-out;
  opacity: 1;
}

@keyframes lang {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.header {
  background-color: rgba(244, 248, 247, 0.1);
  backdrop-filter: blur(8px);
}

@media screen and (min-width: 370px) and (max-width: 767px) {
  .header {
    padding-left: 15px;
    padding-right: 15px;

    .language-dropdown {
      width: 120px;
    }

    .logo-link {
      width: 80px;
    }
  }
}
</style>
