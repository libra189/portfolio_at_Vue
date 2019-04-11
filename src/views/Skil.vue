<template>
  <div class="works">
    <!-- Section: skill -->
    <section id="works" class="home-section">
      <div class="container">
        <small class="text-warning">Skill</small>
        <div class="wow bounceInDown" data-wow-delay="0.2s">
          <h2>スキルセット</h2>
        </div>
        <div class="annotation">※カッコは経験年数</div>
        <table class="table">
            <tr>
                <th rowspan="2">言語</th>
                <td>Ruby(0.5)</td>
                <td>PHP(5:0.5, 7:1)</td>
                <td>HTML5(3)</td>
                <td>CSS3(3)</td>
                <td>JavaScript(ES5:3, ES2015:1)</td>
            </tr>
            <tr>
                <td>Golang(0.3)</td>
                <td>C(5)</td>
                <td>C++(2)</td>
                <td>Python3(3)</td>
                <td>Java8(1)</td>
            </tr>
            <tr>
                <th rowspan="2">Cloud(AWS)</th>
                <td>EC2(1)</td>
                <td>EBS(1)</td>
                <td>S3(1)</td>
                <td>RDS(1)</td>
                <td>Lambda(1)</td>
            </tr>
            <tr>
              <td>Cloud9(0.5)</td>
              <td>CodeCommit(0.5)</td>
            </tr>
            <tr>
                <th rowspan="2">FW,ライブラリ</th>
                <td>Rails(0.5)</td>
                <td>CakePHP3(1)</td>
                <td>Gensim(0.5)</td>
                <td>Vue.js(0.1)</td>
                <td>React.js(0.5)</td>
            </tr>
            <tr>
              <td>jQuery(3)</td>
              <td>Bootstrap4(0.5)</td>
            </tr>
            <tr>
                <th rowspan="2">開発環境</th>
                <td>Docker(0.5)</td>
                <td>Vagrant(3)</td>
                <td>Apache(3)</td>
                <td>Nginx(0.5)</td>
                <td>Vim(4)</td>
            </tr>
            <tr>
                <td>MySQL5(3)</td>
                <td>MariaDB(1)</td>
            </tr>
            <tr>
                <th>その他</th>
                <td>Github(3)</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
      </div>
    </section>
    <!-- /Section: skill -->
  </div>
</template>

<style>
.annotation {
    text-align: left;
}
.table {
  width: 100%;
}
.table tr {
  border-collapse:collapse;
  border-bottom:1px #eee solid;
}
.table th {
  width: 20%;
  vertical-align: top;
}
.table td {
  text-align: left;
}
</style>
