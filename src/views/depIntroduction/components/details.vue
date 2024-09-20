<template>
  <div class="details">
    <div class="header">
      <p class="title">{{$route.params.name}}</p>
    </div>
    <div class="content">
      <p>科室等级：南京市医学重点专科</p>
      <p>病区名称：普外科病区（住院楼十层）</p>
      <p>技术专长：腔镜下胆囊结石、胆囊息肉等的保胆手术、重度痔疮的PPH微创手术、甲状腺疾病、乳房疾病、腹外疝、胃肠道</p>
      <p>门诊时间：一至周六全天</p>
      <p>门诊电话：56680810</p>
    </div>
    <div class="sub-header">
      <p class="title">学科概况</p>
    </div>
    <span class="content">
      &nbsp;&nbsp;&nbsp;&nbsp;科室概况：外科床位25张，外科营养治疗病房15张，医生8人，其中高级职称2人，博士2人，形成以肠功能障碍系列治疗为特色、覆盖胃肠外科全部诊疗项目的学科发展方向，为来自全国各地的复杂疑难胃肠疾病患者服务，近年来患者转诊自全国25个省区。
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;开展项目：科室设有成熟的外科营养支持团队，为短肠综合征、肠瘘、小肠动力障碍性疾病患者提供外科和营养的综合治疗，为从机械性到动力性的全部肠梗阻亚型患者提供先进诊疗，包括放射性肠损伤、炎症性肠病、粘连性肠梗阻、癌性肠梗阻、假性肠梗阻、肠动力障碍等。科室展开胃窦十二指肠空肠动力评估，对小肠动力障碍性疾病的诊治居国内领先水平。科室现为“中国放射性肠损伤诊治中心”。
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;胃肠外科同时常规开展各种胃肠肿瘤的腹腔镜微创手术，目前科室配备有3D腹腔镜、荧光腹腔镜等先进设备，科室为四附院胃肠肿瘤多学科诊疗团队的召集科室，坚持完全标准化流程为肿瘤患者提供多学科诊疗服务。科室同时发挥营养治疗专长，全面推行加速康复外科，强调围手术期全面监测和管理，目前为“全国加速康复外科全程营养示范病房”。
    </span>
    <div class="sub-header">
      <p class="title">专家介绍</p>
    </div>
    <el-row class="content" type="flex" justify="space-between" :gutter="5">
      <el-col style="padding-bottom:10px" :xs="{span:24}" :sm="{span:8}"  v-for="(item,index) in doc" :key="index">
        <el-card class="card" :body-style="{ padding: '0px' }">
          <img src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg' height="265px" class="image">
          <div style="padding: 14px;" class="bottom">
            <p class="name">{{item.name}}</p>
            <p class="title">{{item.title}}</p>
            <p class="sub">{{item.sub}}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
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
    .title,.sub{
      font-size: 12px;
    }
    .sub{
      color: #999;
    }
  }
}
</style>