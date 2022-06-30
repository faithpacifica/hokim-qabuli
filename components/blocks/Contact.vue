<template>
  <div class="contact bg-[#285EA4] py-[40px]">
    <div
      class="contact__inner max-w-[982rem] pt-[40px] px-[40px] pb-[32px] w-full rounded-[16px] bg-white mx-auto"
    >
      <h3
        class="uppercase mb-[12px] text-[#1F1F1F] inter font-semibold text-[36rem] leading-[50rem] tracking-[0.02]"
      >
        Qayta aloqa
      </h3>

      <p class="inter text-[16px] leading-[24px] text-[#1f1f1fbf]">
        Qanday savol, muammo va takliflaringiz bo‘lsa biz bilan bog‘lanishingiz
        mumkin. Kerakli formani to‘ldirib o‘z izohingizni yozib yuboring
      </p>

      <div class="stick my-[24px] w-full h-[1px] bg-[#11111133]"></div>

      <div class="contact__details grid grid-cols-12 gap-[32px] mb-[24px]">
        <div class="col-span-4">
          <div class="input-wrapper mb-[20px]">
            <label
              class="mb-[10px] inline-block mont font-semibold text-[14px] leading-[18px] text-[#111111]"
              for=""
              >F.I.Sh</label
            >
            <input
              class="h-[44px] bg-[#F4F4F4] focus:outline-[1.5px] focus:outline-[#01387E] border border-solid border-[#0e3b7614] mont font-semibold text-[14px] leading-[18px] text-[#6e7177e6] rounded-[8px] py-[13px] px-[16px] w-full"
              type="text"
              v-model="form.name"
              placeholder="To‘liq ism sharifingizni kiriting"
              :error="$v.form.name.$error"
              maxlength="100"
              :class="{ _error: $v.form.name.$error }"
            />
          </div>
          <!--  -->
          <div class="input-wrapper">
            <label
              class="mb-[10px] inline-block mont font-semibold text-[14px] leading-[18px] text-[#111111]"
              for=""
              >Telefon raqam</label
            >
            <input
              class="h-[44px] bg-[#F4F4F4] focus:outline-[1.5px] focus:outline-[#01387E] rounded-[8px] mont font-semibold text-[14px] text-[#6e7177e6] leading-[18px] py-[13px] px-[16px] w-full border border-solid border-[#0e3b7614]"
              v-mask="'+998(##) ###-##-##'"
              type="tel"
              v-model="form.phone"
              :placeholder="'+998 (__) ___-__-__'"
              :error="$v.form.phone.$error"
              :class="{ _error: $v.form.phone.$error }"
            />
          </div>
        </div>

        <div class="col-span-8">
          <div class="input-wrapper relative">
            <label
              class="mb-[10px] inline-block mont font-semibold text-[14px] leading-[18px] text-[#111111]"
              for=""
              >Izoh qoldiring</label
            >
            <!-- TODO:Error quyish -->
            <textarea
              class="h-[140px] resize-none bg-[#F4F4F4] focus:outline-[1.5px] focus:outline-[#01387E] mont font-semibold text-[14px] leading-[18px] rounded-[8px] py-[13px] px-[16px] w-full text-[#6e7177e6] border border-solid border-[#0e3b7614]"
              placeholder="Izohingizni qoldiring"
              v-model="form.comment"
              @keyup="countWords()"
              maxlength="maxWordsLength"
              :error="$v.form.comment.$error"
              :class="{ _error: $v.form.comment.$error }"
            ></textarea>
            <div
              class="word-count absolute bottom-[15px] left-[16px] mont font-semibold text-[12px] leading-[15px] text-[#ACACAC]"
            >
              <span><span>{{totalWords}}</span> /300</span>
            </div>
          </div>
        </div>
      </div>

      <button
        class="flex ml-auto text-white inter font-semibold text-[14px] leading-[20px] transition duration-300 ease-in-out hover:bg-[#2C61A6] bg-[#194D8F] rounded-[8px] py-[12px] px-[40px] outline-none"
        @click="send()"
      >
        Yuborish
      </button>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      form: {
        name: '',
        comment: null,
        phone: null,
        maxWordsLength: 300,
      },
       totalWords:0,
        emptySpace:0
    }
  },
  validations: {
    form: {
      name: { required },
      phone: { required, minLength: minLength(18) },
      comment: { required, minLength: minLength(20) },
    },
  },
  methods: {
    countWords(){
    this.totalWords = this.form.comment.split('').length
    // TODO:1 son qolib ketyapti

    },

    send() {
      this.$v.$touch()
      if (!this.$v.$anyError ) {
       this.form.comment.split('').length > 20
        console.log(this.form.name, this.form.phone, this.form.comment)

        this.$v.$reset
      }
    },
  }
}
</script>

<style lang="scss">
.contact {
  background-image: url(@/assets/images/contact-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
}

@media screen and (min-width: 370px) and (max-width: 780px) {
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
</style>
