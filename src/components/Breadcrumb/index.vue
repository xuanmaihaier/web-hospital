<template>
  <div class="sys-breadcrumb-warp">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="pathObj in breadcrumbdatalistInit" :key="pathObj.path" :to="goTo(pathObj)">{{
        pathObj.meta.title
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BreadcrumbComponent',
  data () {
    return {
      breadcrumbdatalistInit: null
    }
  },
  computed: {
    ...mapGetters([
      'breadcrumbdatalist'
    ])
  },
  mounted () {
    setTimeout(() => {
      const data = {
        path: '/home',
        name:'home',
        meta: {
          title: '首页',
          name:'home'
        }
      }
      this.breadcrumbdatalistInit = [data, ...this.breadcrumbdatalist]
    }, 0);
  },
  methods: {
    goTo (pathObj) {
      return { name: pathObj.name, params: this.$route.params }
    }
  }
}
</script>

<style lang="scss" scoped>
$mainColor: #007399;
.sys-breadcrumb-warp {
  background: #ffffff;
  // box-shadow: 0px 0px 8px 0px rgba(200, 212, 226, 0.5);
  padding: 20px;
  margin: 0 auto;
  // margin: 0px 10px;
  // padding: 0 10px;
  // z-index: 1001;

  .el-breadcrumb {
    line-height: 40px;
    min-height: 40px;
  }
}
::v-deep .el-breadcrumb__inner.is-link{
  color: $mainColor;
}
::v-deep .el-breadcrumb__item:last-child .el-breadcrumb__inner{
  color: #626666;
}
@media screen and (min-width: 768px) {
  .sys-breadcrumb-warp {
    width: 750px;
  }
}

@media screen and (min-width: 992px) {
  .sys-breadcrumb-warp {
    width: 970px;
  }
}

@media screen and (min-width: 1200px) {
  .sys-breadcrumb-warp {
    width: 1180px;
  }
}

</style>
