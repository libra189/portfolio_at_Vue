<template>
  <div class="about">
    <!-- Section: about -->
    <section id="about" class="home-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="section-heading text-center">
              <small class="text-warning">About</small>
              <div class="wow bounceInDown" data-wow-delay="0.2s">
                <h2>山下大輔</h2>
              </div>
              <div class="goal">
                <span>将来の目標</span>
                <p class="lead"><strong>他のエンジニアより三歩リードしたエンジニアになる</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <img :src="image_src" class="img-responsive img-rounded" alt="" />
          </div>
          <div class="col-md-7">
            <p><strong>経歴</strong></p>
            <table id="career">
              <tr>
                <td>2012.3</td>
                <td>龍谷大学 理工学部 電子情報学科 卒業</td>
              </tr>
              <tr>
                <td>2012.4</td>
                <td>龍谷大学 大学院 理工学研究科 電子情報学専攻 入学</td>
              </tr>
              <tr>
                <td>2015.4</td>
                <td>龍谷大学 大学院 理工学研究科 電子情報学専攻 卒業</td>
              </tr>
              <tr>
                <td>2015.11</td>
                <td>Jetrunテクノロジ株式会社 入社</td>
              </tr>
              <tr>
                <td>2016.11</td>
                <td>Jetrunテクノロジ株式会社 退社</td>
              </tr>
              <tr>
                <td>2016.12</td>
                <td>インフォニック株式会社 入社</td>
              </tr>
            </table>
            <hr>
            <div class="text-left">
              WebエンジニアとしてPHP,Ruby,Salesforceを用いたサービス開発に携わる。
              業務では直接お客様との仕様を決めから実装、テスト、チームメイトのコードレビューをしている。
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Section: about -->
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
#career {
  border: 0px #000000 solid;
  border-collapse: separate;
  border-spacing: 5px;
  margin-left: auto;
  margin-right: auto;
}
#career td {
  text-align: left
}
.goal {
  margin-top: 2rem;
}
</style>

<script>
export default {
    data () {
        return {
            image_src: require("../assets/img.jpg")
        }
    }
}
</script>
