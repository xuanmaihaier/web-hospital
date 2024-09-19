<template>
  <div class="home">
    <el-carousel :height="height" :interval="5000" arrow="always">
      <el-carousel-item v-for="item in imgs" :key="item">
        <div ref="imgItems" class="items">
          <img class="imgs" :src="item" alt="">
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      <el-row class="rows">
        <el-col :span="8">
          <el-carousel height="319px" class="rows-carousel" :interval="5000" arrow="always">
            <el-carousel-item v-for="item in imgs" :key="item">
              <div>
                <img :src="item" alt="">
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="8">
          <Box title='医院新闻' :list="docNewsList" url="/home" />
        </el-col>
        <el-col :span="8">
          <Box title='通知公告' :list="msgsList" url="/home" />
        </el-col>
        <el-col :span="8">
          <Box title='护理园地' :list="areaList" url="/home" />
        </el-col>
        <el-col :span="8">
          <Box title='医保政策' :list="docList" url="/home" />
        </el-col>
        <el-col :span="8">
          <Box title='快速通道' :showMore="false" type="column" :list="passList" url="/home" />
        </el-col>
      </el-row>
      <el-row class="rows" style="margin-top:32px">
        <el-col :span="24">
          <Box title='科室介绍' :list="cludeList" type="list" url="/home" />
        </el-col>
      </el-row>
      <el-row class="rows" style="margin:32px 0">
        <el-col :span="24">
          <Box title='友情链接' :list="LinkList" type="mini" :showMore="false"></Box>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Box from "@/components/Box";
export default {
  data () {
    return {
      height: '360px',
      imgs: [
        require('../../assets/image/img_banner1.jpg'),
        require('../../assets/image/img_banner2.jpg')
      ],
      docNewsList: [
        {
          content: '2024年国家网络安全宣传周：网络安全为人民，网络安全靠人民',
          date: '09-02'
        }, {
          content: '工休座谈会：提升服务质量，促进医患沟通',
          date: '08-23'
        }, {
          content: '开心暑假，医起成长” 我院第二届职工子女暑期夏令营活动圆满成功',
          date: '08-13'
        }, {
          content: '医院工会召开2024年高考家长座谈会',
          date: '08-12'
        }, {
          content: '医师节动态 | 科主任查房培训提升临床规范，锤炼诊疗水平',
          date: '08-09'
        }, {
          content: '关注普遍的眼健康 | 南医大四附院开展“全国爱眼日”义诊活动',
          date: '08-09'
        },
      ],
      msgsList: [
        {
          content: '标准粪菌制备服务采购项目 中标结果公告',
          date: '09-03'
        }, {
          content: '设备采购调研报名公告',
          date: '09-02'
        }, {
          content: '设备招标公告',
          date: '09-02'
        }, {
          content: '信息项目采购调研公告',
          date: '08-29'
        }, {
          content: '信息项目采购调研公告',
          date: '08-29'
        }, {
          content: '妇产科陪护和导乐服务采购项目 中标结果公告',
          date: '08-27'
        },
      ],
      areaList: [
        {
          content: '新征程，再出发——护理部举办2023年度护理教学表彰大会',
        },
        {
          content: '首届南京市医疗美容专科护士在我院实践顺利结束',
        },
        {
          content: '践行指南 安全静疗--我院成功举办南京市静脉血管通路新进展学习班',
        },
        {
          content: '护理部举办护理健康科普视频创作大赛',
        },
        {
          content: '护理部召开一季度护理质控会与不良事件成因分析会',
        },
        {
          content: '护理部开展“临床护理专科指南解读”授课竞赛',
        },
      ],
      docList: [
        {
          content: '南京市居民医保'
        },
        {
          content: '异地医疗'
        },
        {
          content: '生育保险'
        },
        {
          content: '农民工大病医疗保险'
        },
        {
          content: '南京市职工医保'
        },
        {
          content: '打击欺诈骗保 维护基金安全”，浦口医院在行动！'
        },
      ],
      passList: [
        {
          content: '互联网医院>>',
          image: require('../../assets/image/img-td-internet.png.png'),
          Link: ''
        }, {
          content: '患者服务中心>>',
          image: require('../../assets/image/img-td-people.png.png'),
          Link: ''
        }, {
          content: '院长信箱>>',
          image: require('../../assets/image//img-td-yz.png.png'),
          Link: ''
        },
      ],
      cludeList: [
        {
          content: '妇科',
          Link: ''
        }, {
          content: '急症医学科',
          Link: ''
        }, {
          content: '儿科',
          Link: ''
        }, {
          content: '骨科',
          Link: ''
        }, {
          content: '呼吸内科',
          Link: ''
        }, {
          content: '神经内科',
          Link: ''
        }, {
          content: '泌尿外科',
          Link: ''
        }, {
          content: '消化内科',
          Link: ''
        }, {
          content: '麻醉科',
          Link: ''
        }, {
          content: '超声医学科',
          Link: ''
        }
      ],
      LinkList: [
        {
          content: '江苏省卫生健康委员会',
          link:'https://stride.fun'
        }, {
          content: '南京医科大学',
          link:'https://blog.stride.fun'
        }
      ]
    }
  },
  components: {
    Box
  },
  mounted () {
    window.addEventListener('resize', this.resize)
    this.$nextTick(() => {
      setTimeout(() => {
        this.height = this.$refs.imgItems[0].offsetHeight + 'px'
      }, 350)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize () {
      this.height = this.$refs.imgItems[0].offsetHeight + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .items {
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .imgs {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  .content {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    .rows {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      > div {
        padding: 7.5px;
      }
    }
  }
  ::v-deep {
    .el-carousel__arrow {
      border-radius: 0;
      width: 42px;
      height: 90px;
    }
  }
  ::v-deep .rows-carousel {
    box-shadow: 0px 2px 8px 0px #eee;
    .el-carousel__arrow {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    ::v-deep {
      .el-carousel__arrow {
        width: 32px;
        height: 42px;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .content {
    width: 750px;
  }
}

@media screen and (min-width: 992px) {
  .content {
    width: 970px;
  }
}

@media screen and (min-width: 1200px) {
  .content {
    width: 1180px;
  }
}
@media screen and (max-width: 768px) {
  .rows {
    flex-direction: column;
    >div{
      width: 100%;
    }
  }
  .home .content{
    margin-top: 2px;
  }
}
</style>
