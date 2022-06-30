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
        <nuxt-link to="/" class="mx-auto block">
          <Icon class=" blue-logo block max-w-[211px] w-full h-[33px] text-center mb-[32px] mx-auto" name="blue_logo" />
        </nuxt-link>

        <SectionTitle class="mont font-800 mb-[12px] text-[#121E22] sm:text-[32px] text-[20px]  sm:leading-[42px] leading-[26px0]" :title="'Bu 1-sarlavhaning namoyishi'" />
        <h5 class="sm:mb-[32px] mb-[13px] mont font-800 text-[#121E22] sm:text-[24px] sm:leading-[31px]  text-[16px] leading-[21px]">
          Va 2-sarlavha shunday ko'rinishga ega bo'ladi
        </h5>

        <p class="mont font-medium sm:text-[18rem] sm:leading-[23rem] text-[14px] leading-[18px] text-[#121E22] text-justify mb-[32px]">
          1. Ushbu Nizom “Mahalliy davlat hokimiyati to’g’risida”gi
          O’zbekiston Respublikasi Qonuniga va O’zbekiston Respublikasi
          Prezidentining 2016 yil 22 dekabrdagi “Mahalliy ijroiya hokimiyati
          organlari faoliyatini yanada takomillashtirish to’g’risida”gi
          PQ-2691-sonli qaroriga muvofiq tuman hokimligi boshqaruv
          apparatining (keyingi o’rinlarda boshqaruv apparati deb ataladi)
          vazifalari, funksiyalari, huquqlari, mas’uliyatini hamda faoliyatini
          tashkil etish tartibini belgilaydi. 2. Boshqaruv apparati o’z
          faoliyatida O’zbekiston Respublikasi Konstitutsiyasiga, “Mahalliy
          davlat hokimiyati to’g’risida”gi O’zbekiston Respublikasi Qonuniga
          va boshqa qonunlarga, O’zbekiston Respublikasi Oliy Majlisi
          palatalarining qarorlariga, O’zbekiston Respublikasi Prezidentining
          farmon, qaror va farmoyishlariga, Vazirlar Mahkamasi va viloyat
          hokimining qaror va farmoyishlariga, boshqa qonun hujjatlariga, xalq
          deputatlari tuman Kengashi va hokimning hujjatlariga, shuningdek
          ushbu Nizomga amal qiladi. 3. Boshqaruv apparati hokimlik
          faoliyatini axborot-tahliliy, huquqiy, tashkiliy-texnik va
          moliyaviy-xo’jalik jihatidan ta’minlaydi, xalq deputatlari tuman
          Kengashi majlislarini uning reglamentiga muvofiq tayyorlaydi, xalq
          deputatlari tuman Kengashi va hokimning hujjatlari loyihalarini
          tayyorlaydi, ularni amalga oshirish yuzasidan amaliy
          chora-tadbirlarni ishlab chiqadi va ijroni muntazam ravishda
          tekshiradi. Boshqaruv apparati xalq deputatlari tuman Kengashi
          faoliyatiga tashkiliy, texnik va boshqa xizmatlar ko’rsatilishini
          ta’minlaydi. 4. Boshqaruv apparati o’z faoliyatini hokimning
          rahbarligida amalga oshiradi. 5. Boshqaruv apparati o’ziga yuklangan
          vazifalar va funksiyalarni bajarishda O’zbekiston Respublikasi Oliy
          Majlisining palatalari, O’zbekiston Respublikasi Prezidenti
          Devonining tegishli xizmatlari, O’zbekiston Respublikasi Vazirlar
          Mahkamasi, viloyat hokimligi, shuningdek davlatning boshqa organlari
          hamda boshqa tashkilotlar bilan o’zaro hamkorlik qiladi. Quyidagilar
          boshqaruv apparatining vazifalari hisoblanadi: hokimning O’zbekiston
          Respublikasi Konstitutsiyasi, “Mahalliy davlat hokimiyati
          to’g’risida”gi O’zbekiston Respublikasi Qonuni va boshqa qonunlar,
          O’zbekiston Respublikasi Prezidentining farmon, qaror va
          farmoyishlarida, Vazirlar Mahkamasi xamda viloyat hokimining qaror
          va farmoyishlarida belgilangan vakolatlari amalga oshirilishini
          davlat organlari va boshqa tashkilotlar bilan birgalikda ta’minlash;
          tumanni ijtimoiy-iqtisodiy rivojlantirish tendensiyalarini kompleks
          tahlil qilish, asosiy iqtisodiy ko’rsatkichlar dinamikasi, tarkibiy
          va institutsional o’zgartirishlar, mahalliy byudjetlar ijrosining
          tizimli monitoringini olib borish; O’zbekiston Respublikasi
          Prezidenti tomonidan belgilanadigan eng muhim ustuvor vazifalarga
          muvofiq tumanni kompleks rivojlantirish bo’yicha takliflar ishlab
          chiqish. Quyidagilar boshqaruv apparatining vazifalari hisoblanadi:
          hokimning O’zbekiston Respublikasi Konstitutsiyasi, “Mahalliy davlat
          hokimiyati to’g’risida”gi O’zbekiston Respublikasi Qonuni va boshqa
          qonunlar, O’zbekiston Respublikasi Prezidentining farmon, qaror va
          farmoyishlarida, Vazirlar Mahkamasi xamda viloyat hokimining qaror
          va farmoyishlarida belgilangan vakolatlari amalga oshirilishini
          davlat organlari va boshqa tashkilotlar bilan birgalikda ta’minlash;
          tumanni ijtimoiy-iqtisodiy rivojlantirish tendensiyalarini kompleks
          tahlil qilish, asosiy iqtisodiy ko’rsatkichlar dinamikasi, tarkibiy
          va institutsional o’zgartirishlar, mahalliy byudjetlar ijrosining
          tizimli monitoringini olib borish;
        </p>

        <!-- TODO:COPY ni olib kelish -->

        <div class="socials-link flex items-center justify-between ml-auto py-[8px] pl-[12px] pr-[4px] w-[280px] bg-[#F2F5F9] backdrop-blur-[44px] rounded-[6px]">
          <div v-if="windowLocation" class="mr-[11px] ">
            <p class=" mont font-semibold text-[#0E3B76]  leading-[20px] text-[16px] opacity-75 bg-transparent">
              {{ windowLocation }}
            </p>
          </div>

          <button @click="copyUrl()" class="rounded-[6px] relative transition duration-500  copy-button  p-[6px] bg-[#0E3B76] ">
           <Icon  class="w-[16px] h-[16]" name="copy"/>
            <div v-if="copied" class="tooltip-customed absolute bg-[#121E22]  p-[4px] ease-linear transition duration-500  text-[12px] rounded-[4px] text-white  top-[-45px] right-0">
              Nusxalandi
              <!-- {{ $t('copied')}} -->
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
        title: 'Foydalanish qoidalari',
        link: '/static'
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
