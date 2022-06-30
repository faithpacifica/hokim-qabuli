<template>
<div class="language-dropdown w-[140px] z-30">
  <div class="flex-center gap-[4rem] relative language-options-box group justify-end">
    <div class="flex-center gap-[4rem] cursor-pointer z-20 " @click="showLang = !showLang">
      <span class=" language-dropdown__span mr-[4px] text-white text-[14px] inter leading-[17rem] z-20">{{ currentLang }}</span>
      <Icon name="lang_arrow" class="lang-arrow w-[20px] h-[20px]  ease-in-out duration-500" :class="{ 'rotate-180': showLang }" />
    </div>

    <transition name="lang">
      <div v-if="showLang" v-click-outside="externalClick" class="language-options transition-all duration-500 absolute top-[24px] w-[120px] z-20">
        <div class="language-options-window rounded-[4px] overflow-hidden">
          <div v-for="(item, index) in langs" :key="index" class="whitespace-nowrap flex-center" :class="{ 'lang-active': showLang }">
            <!-- TODO:text, bg hover, active,backdrop lani tekshirish -->
            <span class="language-span w-full bg-[#0E3B76] hover:bg-[#6280A6] cursor-pointer transition duration-500 flex justify-start pl-[12px] py-[10px] inter text-[#ffffff80] hover:text-[#fff] active:text-white text-[14px] leading-[17px] backdrop-filter backdrop-blur-[44px]" :class="{
                        'border-b-[0px]': index === langs.length - 1,
                      }" @click="
                        _i18n.setLocale(`${item.short}`)
                        showLang = false
                      ">
              {{ item.title }}
              <Icon class="click-icon ml-[11px] opacity-0 " name="click_icon" />
            </span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      showLang: false,
      language: false,
      langs: [{
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

<style lang="scss" scoped>
.language-options-window {
  background-color: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(44px);
}

.lang-enter-active {
  animation: lang 0.4s ease-out;
}

.lang-leave-active {
  animation: lang 0.4s ease-in reverse;
}

.language-span:active .click-icon {
  transition: 0.1s ease;
  opacity: 1;
}

.language-span {
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;

  &:hover {
    border-top: 1px solid #EBEEF5;
    border-bottom: 1px solid #EBEEF5;
  }
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

//  .language-options-box {
//     transition: 0.4s ease;
//     &:hover {
//       & .language-dropdown__span {
//         transition: 0.2s ease;
//         color: white !important;
//         opacity: 0.8;
//       }
//       & .lang-arrow {
//         transition: 0.3s ease;
//         svg {
//           transition: 0.2s ease;
//           path {
//             transition: 0.2s ease;
//             stroke: white;
//             opacity: 0.8;
//           }
//         }
//       }
//     }
//   }

// .language-options-box:hover {
//   transition: 0.4s ease;

// .language-dropdown__span {
//     transition: 0.2s ease;
//     color: #033473;
//   }
// i {
//     transition: 0.3s ease;
//     svg {
//       transition: 0.2s ease;
//       path {
//         transition: 0.2s ease;
//         stroke: #033473 !important;
//         fill: green;
//       }
//     }
//   }
// }
</style>
