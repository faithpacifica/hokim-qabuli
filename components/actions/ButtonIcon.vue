<template>
<a :href="(link)" class="
      cursor-pointer
      flex
      gap-[13rem]
      button-link
      flex-center-center
      hover:bg-[#174C90]
      hover:translate-y-[-4rem]
      active:scale-[0.95]
      transition
      rounded-[10px]
      h-[54px]
      w-[264px]

    "
     target="_blank"
    :class="customBgClass"
    >
  <Icon :name="iconName" />
  <span class="md:text-[20px] mont text-[15px] textFontWeight hover:text-white leading-[26px] text-center opacity-80" :class="customFontClass">
  {{ text }}
  </span>
</a>
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
    iconName: String,
    customStyle: String,
    customBgClass: String,
    customFontClass: String
  },
};
</script>

<style lang="scss" scoped>
.button-link {
  &:hover {
    backdrop-filter: blur(44px);
  }
}

@media screen and (min-width: 370px) and (max-width: 1100px){
  .button-span{
    font-size: 18px;
    line-height: 23px;
  }
}
</style>
