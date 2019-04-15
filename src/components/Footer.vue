<template>
  <div id="footer">
    <a v-bind:href="wantedly['link']"><img :src="wantedly['img']" alt="wantedly"></a>
    <a v-bind:href="github['link']"><img :src="github['img']" alt="github"></a>
    <a v-bind:href="twitter['link']"><img :src="twitter['img']" alt="twitter"></a>
  </div>
</template>

<script>
import WantedlyImage from "@/assets/wantedly_mark.svg";
import TwitterImage from "@/assets/Twitter_Social_Icon_Circle_Color.svg";
import GithubImage from "@/assets/GitHub-Mark-32px.png";

export default {
  data() {
    return {
      wantedly: {
        link: "https://www.wantedly.com/secret_profiles/dsVa206thfO0voMMHcSelneCaEnB4C7s",
        img: WantedlyImage,
      },
      github: {
        link: "https://github.com/libra189", 
        img: GithubImage,
      },
      twitter: {
        link: "https://twitter.com/libra1895",
        img: TwitterImage,
      },
    };
  }
};
</script>

<style scoped>
img {
  height: 32px;
  margin: 0 5px;
}
#footer {
  margin: 0 auto;
}
</style>
