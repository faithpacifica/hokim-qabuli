<template>
  <div class="hero">
    <div class="container">HERO</div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.hero {
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
