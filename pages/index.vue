<template>
  <div>
    <div class="site-top">
      <Header />
      <Hero />
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import Header from '~/components/others/Header.vue'
import Hero from '@/components/blocks/Hero.vue'

import 'aos/dist/aos.css'
export default {
  components: {
    Hero,
    Header,
  },
  mounted() {
    AOS.init()
  },
}
</script>
<style lang="scss">
.site-top {
  background-image: url(@/assets/images/hero-bg.png),
    linear-gradient(
      99.62deg,
      rgba(35, 78, 133, 0.6) 0%,
      rgba(52, 110, 186, 0.24) 110.7%
    );
  background-size: cover;
  background-position: center;
  height: 594px;
}
</style>
