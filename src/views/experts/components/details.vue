<template>
  <div class="details">
    <div class="content">
      <img style="padding-right:20px" src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg' width="120px" height="150px" class="image">
      <div class="main">
        <div class="form-item">
        <label for="">姓名：</label>
        <p>{{$route.params.name}}</p>
      </div>
      <div class="form-item">
        <label for="">职 称：</label>
        <p>前端开发工程师</p>
      </div>
      <div class="form-item">
        <label for="">科 室：</label>
        <p>产品交付部门</p>
      </div>
      <div class="form-item">
        <label for="">擅 长：</label>
      <p>B端、C端的web开发</p>
      </div>
      </div>
    </div>
    <div class="sub-header">
      <p class="title">详细介绍</p>
    </div>
    <span class="content">
      &nbsp;&nbsp;&nbsp;&nbsp;三年以上经验,掌握HTML,CSS3,能根据设计图完成页面制作熟练使用JS,ES6完成网页熟练使用VUE全家桶熟练使用Git，使用action或其他工具自动化部署熟练使用Echarts,highchart,datav进行大屏开发熟悉nginx、pm2、xshell、xftp、宝塔等熟悉vue3,vite,ts熟悉react框架，了解其生态了解嵌入式开发，小程序开发了解vuepress，vitepress了解服务端渲染，尝试过nuxt框架等
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      doc: [
        {
          name: '张三',
          title: '普外科主任医师、教授，医学博士，硕士生导师',
          sub: '从事普外科临床工作三十余年，对胃肠、肛肠疾病诊治和多种胃肠道良恶性肿瘤根治手术有丰富的临床经验。尤其擅长各类低位直肠癌保肛手术、直肠癌腹会阴联合根治术等难度较高的肛肠外科手术及各类疝修补手术。同时对肝胆疾病、甲状腺疾病的诊断及手术治疗亦颇有造诣。'
        },
        {
          name: '李司',
          title: '普外科副主任兼胃肠外科副主任，副主任医师，博士后',
          sub: '胃肠道恶性肿瘤的微创手术；腹部外伤；肠功能障碍和复杂胃肠道疾病的外科和营养治疗。'
        },
        {
          name: 'YOUNGDO',
          title: '前端开发工程师',
          sub: '擅长C端、B端前端开发'
        }
      ]
    }
  },
  mounted () {
    this.$route.meta.title = this.$route.params.name
  },
}
</script>

<style lang="scss" scoped>
.details {
  .header {
    min-height: 20px;
    line-height: 20px;
    font-size: 15px;
    font-weight: 600;
    border-bottom: 1px dashed #eeeeee;
    // padding: 20px 0px 20px 0px;
    .title {
      text-align: left;
    }
    .sub {
      font-size: 12px;
      text-align: center;
      display: inline-block;
      width: 100%;
      font-weight: 400;
      > span {
        padding-right: 14px;
      }
    }
  }
  .sub-header {
    font-size: 14px;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 32px;
    padding: 10px 0px 3px 0px;
  }
  .content {
    font-size: 14px;
    text-align: left;
    display: flex;
    color: #333;
    flex-wrap: wrap;
  }
}
.card {
  cursor: pointer;
  .bottom {
    width: 246px;
    p {
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin: 5px 0;
    }
    .name,
    .title {
      color: #007399;
    }
    .title,
    .sub {
      font-size: 12px;
    }
    .sub {
      color: #999;
    }
  }
}
.form-item{
  display: flex;
  line-height: 38px;
  label{
    min-width: 50px;
  }
  p{
    margin: 0;
  }
}
</style>