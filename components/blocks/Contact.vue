<template>
  <div class="contact bg-[#285EA4] py-[40px]">
    <transition v-if="successfully == false" name="fade">
      <div class="contact__inner max-w-[982rem] pt-[40px] px-[40px] pb-[32px] w-full rounded-[16px] bg-white mx-auto">
        <h3 class="mb-[12px] text-[#1F1F1F] inter font-semibold text-[36rem] leading-[50rem] tracking-[0.02]">
           {{ $t('contact.title') }}
        </h3>

        <p class="inter text-[16px] leading-[24px] text-[#1f1f1fbf]">
             {{ $t('contact.text') }}
        </p>

        <div class="stick my-[24px] w-full h-[1px] bg-[#11111133]"></div>

        <div class="contact__details grid grid-cols-12 gap-[32px] mb-[24px]">
          <div class="col-span-4">
            <div class="input-wrapper mb-[20px]">
              <label class="mb-[10px] inline-block mont font-semibold text-[14px] leading-[18px] text-[#111111]"
                >    {{ $t('contact.name') }}
                
                </label>
              <input
                class="h-[44px] bg-[#F4F4F4] focus:outline-[1.5px] focus:outline-[#01387E] border border-solid border-[#0e3b7614] mont font-semibold text-[14px] leading-[18px] text-[#6e7177e6] rounded-[8px] py-[13px] px-[16px] w-full"
                type="text"
                 v-model="form.name" 
                 :placeholder="$t('contact.name_placeholder')"
                :error="$v.form.name.$error"
                 maxlength="100"
                :class="{ _error: $v.form.name.$error }" />
            </div>
            <!--  -->
            <div class="input-wrapper">
              <label class="mb-[10px] inline-block mont font-semibold text-[14px] leading-[18px] text-[#111111]"
                > {{ $t('contact.phone') }}</label>
              <input
                class="h-[44px] bg-[#F4F4F4] focus:outline-[1.5px] focus:outline-[#01387E] rounded-[8px] mont font-semibold text-[14px] text-[#6e7177e6] leading-[18px] py-[13px] px-[16px] w-full border border-solid border-[#0e3b7614]"
                v-mask="'+998(##) ###-##-##'"
                 type="tel" 
                 v-model="form.phone" 
                 :placeholder="'+998 (__) ___-__-__'"
                :error="$v.form.phone.$error" 
                :class="{ _error: $v.form.phone.$error }" />
            </div>
          </div>
          <div class="col-span-8">
            <div class="input-wrapper relative">
              <label class="mb-[10px] inline-block mont font-semibold text-[14px] leading-[18px] text-[#111111]"
                > {{ $t('contact.comment_label') }}
              </label>
              <div class=" text-[red] text-[12px] absolute top-0 right-[0px]" 
              v-if="$v.form.comment.$error">
                 {{ $t('contact.error_message') }}
              </div>
              <textarea
                class="h-[140px] relative resize-none bg-[#F4F4F4] focus:outline-[1.5px] focus:outline-[#01387E] mont font-semibold text-[14px] leading-[18px] rounded-[8px] py-[13px] px-[16px] w-full text-[#6e7177e6] border border-solid border-[#0e3b7614]"
                :placeholder="$t('contact.comment_placeholder')"
                 v-model="form.comment" @keyup="countWords()"
                maxlength="maxWordsLength" 
                :error="$v.form.comment.$error" :class="{ _error: $v.form.comment.$error }">

                </textarea>
              <div
                class="word-count absolute bottom-[15px] left-[16px] mont font-semibold text-[12px] leading-[15px] text-[#ACACAC]">
                <span><span>{{ totalWords }}</span> /1000</span>
              </div>
            </div>
          </div>
        </div>

        <button
          class="flex ml-auto text-white inter font-semibold text-[14px] leading-[20px] transition duration-300 ease-in-out hover:opacity-80 bg-[#194D8F] rounded-[8px] py-[12px] px-[40px] outline-none"
          @click="send()" :disabled="isDisable" :class="disabled ? 'bg-[#777777]' : 'bg-[#194D8F]'">
            {{ $t('contact.send') }}
        </button>
      </div>
    </transition>
    <div v-else-if="successfully == true" class="contact-success">
      <SuccessfullySent @close="successfully = false" />
    </div>

  </div>
</template>

<script>
import SuccessfullySent from '@/components/blocks/SuccessfullySent.vue'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  components: {
    SuccessfullySent,
  },
  data() {
    return {
      form: {
        name: '',
        comment: null,
        phone: null,
        maxWordsLength: 1000,
      },
      totalWords: 0,
      emptySpace: 0,
      successfully: false,
      disabled: true
    }
  },
  validations: {
    form: {
      name: {
        required,
      },
      phone: {
        required,
        minLength: minLength(18),
      },
      comment: {
        required,
        minLength: minLength(100),
      },
    },
  },
  computed: {
    isDisable() {
      if (this.form.comment?.length > 100) {
        return this.disabled = false
      }
    },
  },
  methods: {
    countWords() {
      if (this.form.comment) {
        this.totalWords = this.form.comment.split('').length
      } else {
        this.totalWords = 0
      }
    },

    send() {
      this.$v.$touch()
      if (!this.$v.$anyError) {

        this.successfully = true
        this.form.name = ''
        this.form.comment = ''
        this.form.phone = ''
        this.totalWords = 0
        this.$v.$reset()
      }
    },
  },
}
</script>

<style lang="scss">
// .fade-enter-active {
//   animation: fade 0.1s ease-out;
// }

// @keyframes fade {
//   0% {
//     opacity: 0;
//     transform: translateX(-30px);
//   }

//   100% {
//     opacity: 1;
//     transform: translateX(0);
//   }
// }

.contact {
  background-image: url(@/assets/images/contact-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
}

@media screen and (min-width: 370px) and (max-width: 820px) {
  .contact {
    background-image: none;
    background-color: #285ea4;
    padding: 0;
  }

  .contact__inner {
    border-radius: 0;
    padding: 20px 16px 32px;
    background-color: #285ea4;

    h3 {
      color: white;
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 6px;
    }

    p {
      color: rgba(255, 255, 255, 0.75);
      font-size: 14px;
      line-height: 18px;
    }

    .stick {
      background: rgba(229, 231, 235, 0.2);
      margin: 16px 0;
    }

    label {
      color: #ffffff;
    }

    button {
      // background-color: #194d8f;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .contact__details {
    display: block;
    gap: 0;

    .input-wrapper {
      margin-bottom: 16px;
    }
  }
}

@media screen and (min-width: 370px) and (max-width: 820px) {
  .contact-success {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>
