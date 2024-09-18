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
      模块待开发
    </main>
  </div>
</template>

<script>

export default {
  data() {
    return {
      height: '360px',
      imgs: [
        require('../../assets/image/img_banner1.jpg'),
        require('../../assets/image/img_banner2.jpg')
      ]
    }
  },
  mounted() {
    window.addEventListener('resize', this.resize)
    this.$nextTick(() => {
      setTimeout(() => {
        this.height = this.$refs.imgItems[0].offsetHeight + 'px'
      }, 350)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize() {
      this.height = this.$refs.imgItems[0].offsetHeight + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  .items{
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  img{
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  .content{
    width: 100%;
    height: 300px;
    line-height: 300px;
    background: #ccc;
    text-align: center;
  }
  ::v-deep{
    .el-carousel__arrow{
      border-radius: 0;
      width: 42px;
      height: 90px;
    }
  }
  @media screen and (max-width: 768px){
    ::v-deep{
    .el-carousel__arrow{
      width: 32px;
      height: 42px;
    }
  }
  }
}
</style>
