<template>
  <div class="works">
    <!-- Section: works -->
    <section id="works" class="home-section">
      <div class="container">
        <small class="text-warning">Works</small>
        <div class="wow bounceInDown" data-wow-delay="0.2s">
          <h2>開発実績</h2>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="panel panel-default">
              <div class="panel-heading">
                メンタルヘルス診断サイト
              </div>
              <div class="panel-body">
                <table class="table">
                  <tr>
                    <th>カテゴリ</th>
                    <th>詳細</th>
                  </tr>
                  <tr>
                    <th>概要</th>
                    <td>企業に義務化されたストレスチェックを実施、分析を行うWebサービス
                    </td>
                  </tr>
                  <tr>
                    <th>担当業務</th>
                    <td>
                      開発、テスト
                    </td>
                  </tr>
                  <tr>
                    <th>役割</th>
                    <td>
                      <div>サーバサイド：70%</div>
                      <div>フロントサイド：30%</div>
                    </td>
                  </tr>
                  <tr>
                    <th>開発環境</th>
                    <td>
                      <div>OS：CentOS7</div>
                      <div>言語：PHP7.1, HTML, CSS, ES5</div>
                      <div>FW,ライブラリ：CakePHP3, Bootstrap4, jQuery</div>
                      <div>DB：MariaDB</div>
                      <div>その他：Vagrant</div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="panel panel-default">
              <div class="panel-heading">
                部屋貸しポータルサイト
              </div>
              <div class="panel-body">
                <table class="table">
                  <tr>
                    <th>カテゴリ</th>
                    <th>詳細</th>
                  </tr>
                  <tr>
                    <th>概要</th>
                    <td>利用していない一軒家や賃貸、トランクルームを1時間単位で貸し出すWebサービス</td>
                  </tr>
                  <tr>
                    <th>担当業務</th>
                    <td>
                      詳細設計、開発、テスト、運用
                    </td>
                  </tr>
                  <tr>
                    <th>役割</th>
                    <td>
                      <div>計画：10%</div>
                      <div>設計：30%</div>
                      <div>サーバサイド：30%</div>
                      <div>フロントサイド：20%</div>
                      <div>運用：10%</div>
                    </td>
                  </tr>
                  <tr>
                    <th>開発環境</th>
                    <td>
                      <div>OS：AmazonLinux2</div>
                      <div>言語：Ruby, HTML, SCSS, ES5</div>
                      <div>FW,ライブラリ：Rails5, React.js, Bootstrap4, jQuery</div>
                      <div>DB：MySQL5</div>
                      <div>Cloud：AWS(EC2, EBS, S3)</div>
                      <div>その他：Vagrant</div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Section: works -->
  </div>
</template>

<style scoped>
.table {
  width: 100%;
}
.table th {
  width: 20%;
  vertical-align: top;
}
.table td {
  width: 80%;
  text-align: left;
}
</style>
