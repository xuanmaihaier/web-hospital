<template>
  <main class="search">
    <div class="search-body">
      <div class="box">
        <div class="head-search">
          <el-input v-model="name" placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search" @click="search" />
          </el-input>
        </div>
      </div>
      <div class="content">
        <div class="header">
          <span>您搜索的"{{$route.params.name}}"共有0条结果</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    search () {
      this.$router.push(`/search/${this.name ? this.name : ' '}`)
    },
  },
}
</script>

<style lang="scss" scoped>
$mainColor: #007399;
.search {
  &-body {
    display: flex;
    .box {
      width: 250px;
      height: 76px;
      line-height: 76px;
      padding: 0 20px;
      box-shadow: 0px 2px 8px 0px rgba(238, 238, 238, 1);
      margin-right: 20px;
    }
    .content {
      width: 840px;
      height: 500px;
      border: 1px solid #eee;
      padding: 0 20px;
      .header {
        min-height: 20px;
        line-height: 20px;
        font-size: 16px;
        font-weight: 600;
        border-bottom: 1px dashed #eeeeee;
        padding: 20px 0px 20px 0px;
      }
    }
  }
}
::v-deep .head-search {
  .el-input {
    input {
      width: 200px;
    }
    .el-input-group__append {
      padding: 0 16px;
      background: $mainColor;
      border: 1px solid $mainColor;
      color: #fff;
    }
  }
}
@media screen and (max-width: 768px) {
  .search-body{
    flex-direction: column;
  }
  .search-body .content{
    width: calc(100% - 40px);
    padding: 0 20px;
  }
}
</style>