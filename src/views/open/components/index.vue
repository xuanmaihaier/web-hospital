<template>
  <div class="body">
    <template v-if="!showDetails">
      <div class="header">
        <span>{{ $route.meta.title }}</span>
      </div>
      <ul class="contents" v-if="routeData && routeData.length">
        <li class="contents-item" v-for="(item,index) in routeData" :key="index" @click="goLink(item)">
          <span class="contents-item-text" :title="item.content">{{item.content}}</span>
          <span v-if="item.date" class="date">{{item.date}}</span>
        </li>
      </ul>
      <div class="contents" style="padding: 8px" v-else> 暂无数据！ </div>
      <el-pagination class="pagination" background layout="prev, pager, next" :total="routeData && routeData.length" :page-size="20">
      </el-pagination>
    </template>
    <router-view v-else></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDetails: false,
      routeData: [],
      openPublic: [
        {
          content: '设备采购结果公示',
          date: '2024-09-06'
        },
      ],
    }
  },
  updated() {
    this.showDetails = this.$route.meta.name.includes('Details')
  },
  mounted () {
    this.routeData = this[this.$route.meta.name]
  },
  methods: {
    goLink (item) {
      this.$router.push(`${this.$route.path}/details/${item.date}/${item.content}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  min-height: 20px;
  line-height: 20px;
  font-size: 15px;
  font-weight: 600;
  border-bottom: 1px dashed #eeeeee;
  padding: 20px 0px 20px 0px;
}
.contents {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  font-size: 14px;
  border-bottom: 1px dashed #eeeeee;
  &-item {
    display: flex;
    border-top: 1px dashed #eeeeee;
    height: 40px;
    line-height: 40px;
    position: relative;
    padding-right: 15px;
    padding-left: 6px;
    justify-content: space-between;
    overflow: hidden;
    cursor: pointer;
    &:first-child {
      border-top: none;
    }
    &-text {
      text-overflow: ellipsis;
      overflow: hidden;
      display: inline-block;
      white-space: nowrap;
      width: calc(100% - 140px);
      // padding-left: 15px;
      text-align: left;
      &:hover {
        color: #005976;
      }
    }
    .date {
      color: #999;
    }
    &::before {
      display: none;
    }
  }
}
::v-deep .pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
