<template>
<div class="header py-[25rem]" :class="customBg">
  <div class="container">
    <div class="flex-center-between">
      <nuxt-link class="logo-link" :to="localePath('/')">
        <Icon class="block max-w-[207px] w-full h-[34px]" name="logo" />
      </nuxt-link>

      <LanguageDropdown />
    </div>
  </div>
</div>
</template>

<script>
import LanguageDropdown from '~/components/actions/LanguageDropdown.vue';
export default {
  props: {
    customBg:String
  },

  components: {
    LanguageDropdown
  },
}
</script>

<style lang="scss" scoped>
// -----------------------------------------------------
.header {
  backdrop-filter: blur(8px);

  .logo-link {
    @media screen and (min-width: 370px) and (max-width: 640px) {
      max-width: 152px;
    }
  }
}
</style>
