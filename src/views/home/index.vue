<template>
  <div class="home">
    <el-carousel :height="height" :interval="5000" arrow="always">
      <el-carousel-item v-for="item in imgs" :key="item">
        <div ref="imgItems" class="items">
          <img :src="item" alt="">
        </div>
      </el-carousel-item>
    </el-carousel>
    <main class="content">
      <el-row>
        <el-col span="8">
          <Box title='医院新闻' :list="docNewsList" url="/home" />
        </el-col>
        <el-col span="8">
          <Box title='医院新闻' :list="docNewsList" url="/home" />
        </el-col>
        <el-col span="8">
          <Box title='通知公告' :list="docNewsList" url="/home" />
        </el-col>
        <el-col span="8">
          <Box title='护理园地' :list="docNewsList" url="/home" />
        </el-col>
        <el-col span="8">
          <Box title='医保政策' :list="docNewsList" url="/home" />
        </el-col>
        <el-col span="8">
          <Box title='医院新闻' :list="docNewsList" url="/home" />
        </el-col>
      </el-row>
    </main>
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
  img {
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
  }
  ::v-deep {
    .el-carousel__arrow {
      border-radius: 0;
      width: 42px;
      height: 90px;
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
@media screen and (min-width: 1200px) {
    .content{
        width: 1180px;
    }
}
@media screen and (min-width: 992px) {
    .content {
        width: 970px;
    }
}
@media screen and (min-width: 768px) {
    .content {
        width: 750px;
    }
}
</style>
