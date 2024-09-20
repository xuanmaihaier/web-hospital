<template>
  <main class="overview">
    <div class="overview-body">
      <div class="box">
        <el-menu :router="true" :default-active="$route.meta.pPath?$route.meta.pPath:$route.path" class="el-menu-vertical-demo">
          <el-menu-item index="/trends/news">
            <span slot="title">医院新闻</span>
          </el-menu-item>
          <el-menu-item index="/trends/nurse">
            <span slot="title">护理园地</span>
          </el-menu-item>
          <el-menu-item index="/trends/insurance">
            <span slot="title">医保政策</span>
          </el-menu-item>
          <el-menu-item index="/trends/notice">
            <span slot="title">通知公告</span>
          </el-menu-item>
          <el-menu-item index="/trends/finance">
            <span slot="title">财务公开</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
$mainColor: #007399;
.overview {
  &-body {
    display: flex;
    .box {
      width: 250px;
      padding: 10px 20px;
      border: 1px solid #eee;
      margin-right: 20px;
    }
    .content {
      width: 840px;
      height: 100%;
      border: 1px solid #eee;
      padding: 10px 30px;
      span {
        font-family: 宋体;
        font-size: 18px;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}

::v-deep .el-menu {
  border-right: none;
  .el-menu-item {
    height: 45px;
    line-height: 45px;
  }
  .el-menu-item.is-active {
    background: rgba(0, 115, 153, 0.05);
  }
}
@media screen and (max-width: 768px) {
  .overview-body .box {
    width: calc(100% - 60px);
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .overview-body {
    flex-direction: column;
  }
  .overview-body .content {
    width: calc(100% - 60px);
    margin: 0 auto;
    padding: 10px 20px;
  }
  img {
    width: 100%;
  }
}
</style>
