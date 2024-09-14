<template>
  <div class="footer">
    <!-- 底部 -->
    <div class="footerNav">
      <!-- 底部导航栏 -->
      <el-row type="flex" justify="center" align="middle">
        <el-col :xs='{span:5}' :sm='{span:3}' v-for="(item, index) in footer_list" :key="index">
          <span class="footer_bar" type="flex" justify="space-around" align="middle" @click="footerNavList(index)">
            <!-- 底部列表 -->
            <a href="javascript:;">{{ item }}</a>
          </span>
        </el-col>
      </el-row>
    </div>
    <!-- 底部信息 -->
    <div class="footerMsg">
      <el-row>
        <!-- 底部右侧 -->
        <el-col :span="12" class="footMsg_right">
          模块待开发
        </el-col>
        <!-- 底部左侧 -->
        <el-col :span="12" class="footMsg_left">
          <p>
            © 2009-2021
            Stride.fun 版权所有 ICP主体备案号： 苏ICP备2021007111号
          </p>
          <a href="javascript:;">
            <span>网站备案信息</span>
          </a>
          <p>

            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011402010859" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="@/assets/image/beian.png" style="float:left;" />
              <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">苏公网安备 32011402010859号</p>
            </a>
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footer_list: [
        "关于我们",
        "联系我们",
        "院长信箱",
        "人才招聘",
      ],
      followRoutes: [ // 改动 正确的
        "/about",
        "/advisory",
        "/partner",
        "/terms",
      ],
    };
  },
  methods: {
    footerNavList (val) {
      this.$router.push(this.followRoutes[val]);
    },
  },
};
</script>

<style lang="scss" scoped>
$mainColor: #007399;
.footer {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding-top: 28px;
  padding-bottom: 20px;
  background: $mainColor;
  color: #fff;
}
.footerNav {
  width: 100%;
}

.footer_bar {
  min-width: 110px;
  cursor: pointer;
  display: inline-block;
  a {
    color: #fff;
    text-decoration: none;
  }
}

// 底部信息
.footerMsg {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  padding-top: 40px;
  margin-bottom: 20px;
}

.footMsg_left {
  position: relative;
  padding: 0 30px;
  // border: 1px solid red;
}
.footMsg_right {
  padding-left: 30px;
}
.footMsg_left::after {
  position: absolute;
  top: 0;
  right: 10px;
  content: "";
  display: inline-block;
  width: 1px;
  height: 87px;
  background-color: #e5e5e5;
}
</style>