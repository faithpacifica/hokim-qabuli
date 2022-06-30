<template>
<div>
  <div class="site-top overflow-hidden">
    <Header v-bind="{
              customBg: 'bg-[#f4f8f71a]',
            }" />
    <Hero />
  </div>
  <Features />
  <CTA />
  <JoinBot />
  <AdminPanel />
  <Contact />

</div>
</template>

<script>
import AOS from 'aos'
import Header from '~/components/others/Header.vue'
import Hero from '@/components/blocks/Hero.vue'
import Features from '@/components/blocks/Features.vue'
import CTA from '@/components/blocks/CTA.vue'
import JoinBot from '@/components/blocks/JoinBot.vue'
import AdminPanel from '@/components/blocks/AdminPanel.vue'
import Contact from '@/components/blocks/Contact.vue'


import 'aos/dist/aos.css'
export default {
  components: {
    Hero,
    Header,
    Features,
    CTA,
    JoinBot,
    AdminPanel,
    Contact,

  },
  mounted() {
    AOS.init()
  },
}
</script>

<style lang="scss">
.site-top {
  background-image:
    linear-gradient(99.62deg, rgba(35, 78, 133, 0.6) 0%, rgba(52, 110, 186, 0.24) 110.7%), url(@/assets/images/hero-bg.png);
  background-size: cover;
  background-position: center;
}
</style>
