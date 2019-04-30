<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    router
    >
    <el-menu-item index="home" :route="{ name:'home' }" style="height: 100%">Home</el-menu-item>
    <el-menu-item index="about" :route="{ name:'about' }" style="height: 100%">About</el-menu-item>
    <el-menu-item index="works" :route="{ name:'works' }" style="height: 100%">Works</el-menu-item>
    <el-menu-item index="skil" :route="{ name:'skil' }" style="height: 100%">Skil</el-menu-item>
  </el-menu>
</template>

<style scoped>
.fa {
  padding-right: 3px;
}
</style>

<script>
export default {
  data() {
      return {
          activeIndex: 'home'
      }
  },
  mounted() {
      // 読み込まれたページをアクティブ
      this.activeIndex = this.$route.name;
  }
}
</script>
