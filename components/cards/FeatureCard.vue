<template>
<nuxt-link to="/" class="feature-card max-w-[275px] w-full transition text-center flex flex-col justify-start items-center pt-[12px] px-[8px] pb-[38px]">
  <div class="icon-wrapper bg-[#30609D] hover:bg-[#174C91] hover:border-[#0E4388] w-[100px] h-[100px] flex items-center justify-center mb-[16px] rounded-[10px] border border-solid border-[#ffffff33] transition duration-300">
    <Icon class="logo inline w-[40px] h-[40px]" :name="name" />
  </div>

  <div class="feature-card__info flex flex-col">
    <h4 class="mont font-semibold text-[20px] leading-[26px] mb-[12px]">
      {{ title }}
    </h4>

    <p class="mont font-semibold text-[16px] leading-[20px] text-[#ffffffbf] line-clamp-3">
      {{ text }}
    </p>
  </div>
</nuxt-link>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
  components: {
    Icon,
  },
  props: {
    name: String,
    title: String,
    text: String,
  },
}
</script>

<style lang="scss">
.feature-card {
  @media screen and (min-width: 370px) and (max-width: 639px) {
    max-width: none;
    width: 100%;
    flex-direction: row;
    text-align: start;
    align-items: start;
    padding: 0;
    padding-bottom: 16px;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    }
  }
}

@media screen and (min-width: 370px) and (max-width: 639px) {
  .icon-wrapper {
    margin-bottom: 0;
    margin-right: 16px;
    width: 82px;
    min-width: 82px;
    height: 82px;
    min-height: 82px;
  }

  .feature-card__info {
    text-align-last: left;

    h4 {
      margin-bottom: 4px;
    }

    p {
      font-size: 14px;
      line-height: 18px;

    }
  }
}
</style>
