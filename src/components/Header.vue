<template>
  <ul class="nav nav-tabs nav-justified">
    <li role="presentation">
      <router-link to="/"><i class="fa fa-home" aria-hidden="true"></i>Home</router-link>
    </li>
    <li role="presentation">
      <router-link to="/about"><i class="fa fa-user" aria-hidden="true"></i>About</router-link>
    </li>
    <li role="presentation">
      <router-link to="/works"><i class="fa fa-briefcase" aria-hidden="true"></i>Works</router-link>
    </li>
    <li role="presentation">
      <router-link to="/skil"><i class="fa fa-code" aria-hidden="true"></i>Skil</router-link>
    </li>
  </ul>
</template>

<style scoped>
.fa {
  padding-right: 3px;
}
</style>
