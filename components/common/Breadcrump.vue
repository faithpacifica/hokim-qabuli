<template>
<div class="
      breadcrumb
      flex-center
      gap-[8px]
    ">
  <nuxt-link v-for="(item, index) in breads" :key="index" :to="localePath(item.link)" class="breadcrumb-link flex-center gap-[8px]">
    <h6 class="
          mont
          font-semibold
          text-[#6E7A7E] text-[16px]
          leading-[20px]
         last:text-[#A4ABAE]
        ">
      {{ item.title }}
    </h6>
    <div v-if="index !== breads.length - 1" >
 <Icon class="bread_arrow " name="bread_arrow" />

    </div>
  </nuxt-link>
</div>
</template>

<script>
export default {
  props: {
    navs: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    breads() {
      return [{
        title: this.$t('breadcrumb.home'),
        link: "/"
      }, ...this.navs];
    },
  },
};
</script>

