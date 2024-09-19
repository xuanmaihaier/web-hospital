<template>
  <main class="overview">
    <div class="overview-body">
      <div class="box">
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <el-menu-item index="1" >
            <span slot="title">前端开发工程师</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content">
        <span class="header">招聘信息</span>
        <div class="main">
          <p>职位信息：中级前端开发工程师</p>
          <p>工作地点：杭州</p>
          <p>薪资标准：15-20k</p>
          <p>岗位职责：三年以上经验,掌握HTML,CSS3,能根据设计图完成页面制作熟练使用JS,ES6完成网页熟练使用VUE全家桶熟练使用Git，使用action或其他工具自动化部署熟练使用Echarts,highchart,datav进行大屏开发熟悉nginx、pm2、xshell、xftp、宝塔等熟悉vue3,vite,ts熟悉react框架，了解其生态了解嵌入式开发，小程序开发了解vuepress，vitepress了解服务端渲染，尝试过nuxt框架等</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

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
      .header {
        min-height: 20px;
        line-height: 20px;
        font-size: 16px;
        font-weight: 600;
        border-bottom: 1px dashed #eeeeee;
        padding: 20px 0px 20px 0px;
        font-family: 宋体;
        font-size: 16px;
        width: 100%;
        display: inline-block;
        color: rgba(51, 51, 51, 1);
      }
      .main{

      }
    }
  }
}

::v-deep .el-menu{
  border-right: none;
  .el-menu-item {
    height: 45px;
    line-height: 45px;
  }
  .el-menu-item.is-active{
    background: rgba(0, 115, 153, 0.05)
  }
}
@media screen and (max-width: 768px) {
  .overview-body .box{
    width: calc(100% - 60px);
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .overview-body{
    flex-direction: column;
  }
  .overview-body .content{
    width: calc(100% - 60px);
    margin: 0 auto;
    padding: 10px 20px;
  }
  img{
    width: 100%;
  }
}
</style>