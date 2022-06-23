<template>
  <h3
    class="inter font-semibold text-[36rem] leading-[50.4rem] tracking-[-0.02px]"
    :class="weight"
  >
    {{ title }}
  </h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.weight {
  font-weight: 600;
}
</style>
