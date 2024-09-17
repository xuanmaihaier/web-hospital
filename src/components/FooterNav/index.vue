<template>
  <div class="footer">
    <!-- 底部 -->
    <div class="footerNav">
      <!-- 底部导航栏 -->
      <el-row type="flex" justify="center" align="middle">
        <div v-for="(item, index) in footer_list" :key="index">
          <span
            class="footer_bar"
            type="flex"
            justify="space-around"
            align="middle"
            @click="footerNavList(index)"
          >
            <!-- 底部列表 -->
            <a href="javascript:;">{{ item }}</a>
          </span>
        </div>
      </el-row>
    </div>
    <!-- 底部信息 -->
    <div class="footerMsg">
      <el-row style="width: 1080px; margin: 0 auto">
        <el-col :span="6" class="footMsg_left">
          <img
            src="@/assets/image/logo.png"
            width="300px"
            height="155px"
            alt=""
          >
        </el-col>
        <el-col :span="8" class="footMsg_left address">
          <div class="content">
            <label>医院地址：</label>
            <div>
              <span>南京江北新区xxxx号（xx院区）</span>
              <span>南京浦东新区xxxx号（xx院区）</span>
              <span>南京雨花台区xxxx号（xx院区）</span>
            </div>
          </div>

          <div class="content">
            <label>联系电话：</label>
            <div>
              <span>025-xxxxxxxx</span>
            </div>
          </div>
        </el-col>
        <el-col :span="10" class="footMsg_right">
          <div class="chat">
            <div>
              <img
                src="@/assets/image/chat.png"
                width="110px"
                height="110px"
                alt=""
              >
            </div>
            医院官网
          </div>
          <div class="chat">
            <div>
              <img
                src="@/assets/image/chat.png"
                width="110px"
                height="110px"
                alt=""
              >
            </div>
            微信公众号
          </div>
          <div class="chat">
            <div>
              <img
                src="@/assets/image/chat.png"
                width="110px"
                height="110px"
                alt=""
              >
            </div>
            微信服务号
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="footerMsg Copyright">
      <span>Copyright © 2019-2024 Stride.fun 版权所有 </span>
      <span>苏ICP备2021007111号</span>
      <span>
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011402010859"
          style="
            display: inline-block;
            text-decoration: none;
            height: 20px;
            line-height: 20px;
          "
        ><img src="@/assets/image/beian.png" style="float: left">
          <p
            style="
              float: left;
              height: 20px;
              line-height: 20px;
              margin: 0px 0px 0px 5px;
              color: #939393;
            "
          >
            苏公网安备 32011402010859号
          </p>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer_list: ['关于我们', '联系我们', '院长信箱', '人才招聘'],
      followRoutes: [
        // 改动 正确的
        '/about',
        '/advisory',
        '/partner',
        '/terms'
      ]
    }
  },
  methods: {
    footerNavList(val) {
      this.$router.push(this.followRoutes[val])
    }
  }
}
</script>

<style lang="scss" scoped>
$mainColor: #007399;
.footer {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding-top: 28px;
  background: $mainColor;
  color: #fff;
}
.footerNav {
  width: 100%;
  > div {
    div:last-child {
      .footer_bar {
        &::after {
          display: none;
        }
      }
    }
  }
}

.footer_bar {
  min-width: 110px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  a {
    color: #fff;
    text-decoration: none;
  }
  &::after {
    position: absolute;
    top: 3px;
    right: 0;
    bottom: 2px;
    content: "";
    display: inline-block;
    width: 1px;
    background-color: #fff;
  }
}

// 底部信息
.footerMsg {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  margin-top: 35px;
}

.footMsg_left {
  position: relative;
  padding: 0 30px;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    width: 100%;
    display: flex;
    padding-bottom: 12px;
    // justify-content: space-between;
    label {
      width: 90px;
      align-self: start;
    }
    > div {
      display: flex;
      flex-direction: column;
      span {
        padding-bottom: 12px;
      }
    }
  }

  // border: 1px solid red;
}
.footMsg_right {
  padding-left: 30px;
  padding-top: 18px;
  display: flex;
  font-size: 14px;
  .chat {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    > div {
      background: #fff;
      width: 120px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 6px;
    }
  }
}
.footMsg_left::after {
  position: absolute;
  top: 0;
  right: 10px;
  content: "";
  display: inline-block;
  width: 1px;
  height: 155px;
  background-color: #338fad;
}

.Copyright{
  font-size: 14px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  span{
    padding-bottom: 12px;
  }
}
.address{
  padding-top: 18px;
}
</style>
