<template>
  <div class="static-section pt-[144rem] pb-[64rem] dark:bg-[#1A1D27]">
    <div class="container">
      <div
        data-aos="fade-left"
        class="static__text lg:mx-[200rem] sm:mx-[15px]"
      >
        <SectionTitle
          class="text-center mb-[33rem] mt-[38rem] dark:text-white"
          :title="'Qanday qilib Dubaydan uy sotib olib yashash mumkin?'"
        />
        <p
          class="inter text-[16rem] leading-[22rem] text-[#373A43] dark:text-white text-justify mb-[24rem]"
        >
          Ishlab topish — eng asosiy sabab sifatida Har bir kishi o'z hayotida
          ehtiyojlarining katta qismini qanoatlantirishga qodir ish haqi olishga
          intilishi sir emas.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/common/SectionTitle.vue'
export default {
  components: {
    SectionTitle,
  },
}
</script>
