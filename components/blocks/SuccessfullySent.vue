<template>
<div data-aos="fade-up" class="transition duration-500 ease-in-out success">
    <div class="max-w-[982rem] text-center w-full py-[65px] rounded-[16px] bg-white mx-auto">
        <img class="success__icon mb-[24px] mx-auto" src="@/assets/images/success.png" alt="check icon" />

        <h3 class="mx-auto max-w-[508px] w-full uppercase mb-[39px] text-[#1F1F1F] mont font-800 sm:text-[24px] sm:leading-[31px] text-[16px] leading-[20px]">
             {{ $t('success.title') }}
        </h3>

        <button  @click="$emit('close')"  class="inline-block ml-auto text-white inter font-semibold text-[14px] leading-[20px] transition duration-300 ease-in-out hover:bg-[#2C61A6] bg-[#194D8F] rounded-[8px] py-[12px] px-[40px] outline-none">
            {{ $t('success.got_it') }}
        </button>
    </div>
</div>
</template>


<script>
export default{
}
</script>

<style lang="scss">
@media screen and (min-width: 370px) and (max-width: 640px) {
    .success {
        padding-left: 16px;
        padding-right: 16px;

        &__icon {
            width: 100px;
        }
    }
}
</style>
