<template>
  <div id="app">
    <Header id="header"/>
    <div id="contents">
      <router-view/>
    </div>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header {
  height: 5vh;
}
#contents {
  padding-top: 5px;
  padding-bottom: 5px;
  height: 90vh;
}
#footer {
  height: 5vh;
}
#contents {
  padding-top: 0;
}
</style>
