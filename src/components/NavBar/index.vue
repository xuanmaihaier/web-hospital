<template>
  <nav>
    <div class="nav">
      <div class="banner" @click="$router.push('/home')">
        <img class="logo" src="@/assets/image/logos.png" alt="">
      </div>
      <div v-if="$route.meta.name !== 'search'" class="head-search">
        <el-input v-model="name" placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search" @click="search" />
        </el-input>
      </div>
      <div class="phone-meun" @click="showList">
        <i v-if="!open" class="iconfont icon-list" />
        <i v-else class="iconfont icon-close" />
      </div>
    </div>
    <div class="content">
      <el-radio-group ref="list" v-model="url" class="list" @click.native="show" @input="goLink">
        <el-radio-button v-for="(item,index) in list" :key="index" :label="item.link">{{ item.name }}</el-radio-button>
      </el-radio-group>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    list: {
      default: () => [
        { name: '首页', link: '/home' },
        { name: '医院概括', link: '/overview' },
        { name: '医院动态', link: '/trends' },
        { name: '党建文化', link: '/culture' },
        { name: '院务公开', link: '/open' },
        { name: '科室介绍', link: '/depIntroduction' },
        { name: '专家介绍', link: '/experts' },
        { name: '教学科研', link: '/teaching' },
        { name: '人才招聘', link: '/jobs' },
        { name: 'OA办公', link: '/oa' }
      ],
      type: Array
    }
  },
  data () {
    return {
      name: '',
      open: false,
      url: '/home',
    }
  },
  mounted () {
    window.addEventListener('resize', this.resize)
  },
  updated() {
    this.url = "/" + this.$route.matched[0].meta.name
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    goLink (url) {
      this.$router.push(url)
    },
    show () {
      if (window.innerWidth <= 768) {
        this.$refs.list.$el.style.display = 'none'
        this.open = false
      }
    },
    showList () {
      this.open = !this.open
      if (this.open) {
        this.$refs.list.$el.style.display = 'flex'
      } else {
        this.$refs.list.$el.style.display = 'none'
      }
    },
    resize () {
      if (window.innerWidth > 768) {
        this.$refs.list.$el.style.display = 'flex'
        this.open = false
      } else {
        this.$refs.list.$el.style.display = 'none'
      }
    },
    search () {
      this.$router.push(`/search/${this.name ? this.name : ' '}`)
    },
  }
}
</script>

<style lang="scss" scoped>
$mainColor: #007399;
.nav {
  margin: 0 auto;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.banner {
  display: flex;
  justify-content: flex-start;
  width: 520px;
  height: 123px;
  // margin-left: 18px;
  .logo {
    width: 100%;
    height: 100%;
  }
  /* margin-left: 20px; */
}
::v-deep .head-search {
  .el-input {
    input {
      width: 230px;
    }
    .el-input-group__append {
      padding: 0 16px;
      background: $mainColor;
      border: 1px solid $mainColor;
      color: #fff;
    }
  }
}
.phone-meun {
  display: none;
  cursor: pointer;
  color: $mainColor;
  margin-right: 20px;
}
.content {
  background: $mainColor;
}
::v-deep .list {
  margin: 0 auto;
  height: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  .el-radio-button__inner {
    border: none;
    height: 50px;
    padding: 18px 28px;
    background: $mainColor;
    color: #fff;
    font-size: 16px;
  }
  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    background: #328fad;
  }
}
@media screen and (min-width: 768px) {
  .nav,
  .list {
    width: 750px;
  }
}
@media screen and (min-width: 992px) {
  .nav,
  .list {
    width: 970px;
  }
}
@media screen and (min-width: 1200px) {
  .nav,
  .list {
    width: 1180px !important;
  }
}
@media screen and (max-width: 768px) {
  nav {
    position: sticky;
    right: 0;
    left: 0;
    top: 0;
    background: rgba(255, 255, 255, 1);
    z-index: 999;
  }
  .nav {
    height: 80px;
  }
  .content {
    height: 100%;
  }
  .banner {
    width: 246px;
    height: 70px;
    margin-left: 18px;
  }
  .banner .logo {
    width: 246px;
    height: 70px;
    background: rgba(255, 255, 255, 1);
  }
  .head {
    width: 100%;
    height: 70px;
    line-height: 70px;
  }
  .head-search {
    display: none;
  }
  .phone-meun {
    display: block;
  }
  ::v-deep .list {
    display: flex;
    flex-direction: column;
    display: none;
    z-index: 999;
    position: absolute;
    height: 100%;
    .el-radio-button__inner,
    .el-radio-button {
      width: 100%;
    }
  }
}
/* è®¾ç½®æœç´¢æ¡†çš„é€‚é… */

@media screen and (max-width: 1200px) and (min-width: 768px) {
  .banner {
    display: flex;
    justify-content: flex-start;
    width: 380px;
    height: 89px;
    // margin-left: 26px;
  }
  ::v-deep .list {
    .el-radio-button__inner {
      padding: 18px 7px;
    }
  }
}
</style>
