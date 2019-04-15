<template>
  <div class="home">
    <!-- Section: intro -->
    <section id="intro" class="intro">
      <div class="slogan">
        <img :src="image_src" alt="logo">
      </div>
    </section>
    <!-- /Section: intro -->
  </div>
</template>

<style scoped>
.home {
  height: 100%;
}
.intro {
  height: 100%;
}
</style>

<script>
export default {
    data () {
        return {
            image_src: require("../assets/logo.png")
        }
    }
}
</script>