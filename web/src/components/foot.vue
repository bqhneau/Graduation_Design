<template>
  <div class="foot">
    <!-- Start of Footer -->
    <footer id="footer-wrapper">
      <div id="footer" class="container">
        <div class="row">
          <div class="span3">
            <section class="widget">
              <h3 class="title">📌 主要功能</h3>
              <div class="textwidget">
                <p><strong>信息发布 📢</strong> — 轻松发布求助、闲置交易、学习交流等内容。</p>
                <p><strong>评论互动 💬</strong> — 交流讨论，互帮互助。</p>
                <p><strong>搜索查询 🔍</strong> — 快速找到所需信息。</p>
                <p><strong>通知提醒 🔔</strong> — 重要信息不错过。</p>
              </div>
            </section>
          </div>

          <div class="span3">
            <section class="widget">
              <h3 class="title">📢 通知公告</h3>
              <div class="textwidget">
                <p>欢迎使用本平台，请遵守社区规范，共同维护良好的交流环境。</p>
                <p>如有违规行为，平台有权删除相关内容，严重者将限制账号使用。</p>
                <p>📧 联系管理员：3495825132@qq.com</p>
              </div>
            </section>
          </div>

          <div class="span3">
            <section class="widget">
              <h3 class="title">🔗 友情链接</h3>
              <ul>
                <li>
                  <a href="https://dqxx.neau.edu.cn/" target="_blank">学院官网</a>
                </li>
                <li>
                  <a href="https://graduate.neau.edu.cn/" target="_blank">研究生院</a>
                </li>
                <li>
                  <a href="https://jwc.neau.edu.cn/" target="_blank">教务处</a>
                </li>
              </ul>
            </section>
          </div>

          <div class="span3">
            <section class="widget">
              <h3 class="title">💡 帮助与建议</h3>
              <ul>
                <li>
                  <router-link to="/fankui" title="Lorem ipsum dolor sit amet,"
                    >意见反馈</router-link
                  >
                </li>
                <li>
                  <router-link to="/shensu" title="Lorem ipsum dolor sit amet,"
                    >账号解封</router-link
                  >
                </li>
                <li>
                  <router-link to="/jubao" title="Lorem ipsum dolor sit amet,"
                    >不良行为举报</router-link
                  >
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <!-- end of #footer -->

      <!-- Footer Bottom -->
      <div id="footer-bottom-wrapper">
        <div id="footer-bottom" class="container">
          <div>
            <div>
              <p class="copyright">
                Copyright © 2025 - 个人所有 -
                <a
                  style="color: #858585;"
                  href="http://www.miit.gov.cn/"
                  target="“_blank”"
                  >京ICP备13017019号-13 ｜  京公网安备11010802042325号</a
                >
                -
                <a
                  style="color: #858585;"
                  href="http://www.guoang.xyz/"
                  target="“_blank”"
                  >校园信息发布平台</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Footer Bottom -->
    </footer>
    <!-- End of Footer -->
  </div>
</template>

<script>
export default {
  name: 'foot',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.copyright {
    text-align: center;
    margin: 0 auto;
}
</style>
