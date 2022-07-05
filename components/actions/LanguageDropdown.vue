<template>
  <div class="language-dropdown w-[140px] z-30">
    <div
      class="
        flex-center
        gap-[4rem]
        relative
        language-options-box
        group
        justify-end
      "
    >
      <div
        class="flex-center gap-[4rem] cursor-pointer z-20"
        @click="showLang = !showLang"
      >
        <span
          class="
            language-dropdown__span
            mr-[4px]
            text-white text-[14px]
            inter
            leading-[17rem]
            z-20
          "
          >{{ currentLang }}</span
        >
        <Icon
          name="lang_arrow"
          class="lang-arrow w-[20px] h-[20px] ease-in-out duration-500"
          :class="{ 'rotate-180': showLang }"
        />
      </div>

      <transition name="lang">
        <div
          v-if="showLang"
          v-click-outside="externalClick"
          class="
            language-options
            transition-all
            duration-500
            absolute
            top-[24px]
            w-[120px]
            z-20
          "
        >
          <div class="language-options-window rounded-[4px] overflow-hidden">
              <span
              v-for="(item, index) in langs"
              :key="index"
              :class="[{ 'lang-active': showLang }, index === 0 ? '!border-t-[0px]': '', index === 2 ? '!border-b-[0px]': '']"
                class="
                  language-span
                  w-full
                  bg-[#0E3B76]
                  hover:bg-[#6280A6]
                  cursor-pointer
                  transition
                  duration-500
                  flex
                  justify-start
                  pl-[12px]
                  py-[10px]
                  inter
                  text-[#ffffff80]
                  hover:text-[#fff]
                  active:text-white
                  text-[14px]
                  leading-[17px]
                  backdrop-filter backdrop-blur-[44px]
                "

                @click="
                  _i18n.setLocale(`${item.short}`)
                  showLang = false
                  checkedIcon = true
                "
              >
                {{ item.title }}
                <Icon
                  v-if="$i18n.locale === item.short"
                  class="click-icon ml-[11px]"
                  name="click_icon"
                />
              </span>
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
      checkedIcon: false,
      langs: [
        {
          title: 'English',
          icon: 'english',
          short: 'en',
        },
        {
          title: 'Русский',
          icon: 'russia',
          short: 'ru',
        },
        {
          title: "O'zbekcha",
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
  border-top: 1px solid #0E3B76;
  border-bottom: 1px solid #0E3B76;
}
.language-span:hover:nth-child(1) {
  border-bottom: 1px solid #EBEEF5;
}

.language-span:hover:nth-child(2) {
  border-top: 1px solid #EBEEF5;
  border-bottom: 1px solid #EBEEF5;
}

.language-span:hover:nth-child(3) {
  border-top: 1px solid #EBEEF5;
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

</style>
