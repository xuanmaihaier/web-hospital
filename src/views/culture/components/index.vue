<template>
  <div class="body">
    <template v-if="!showDetails">
      <div class="header">
        <span>{{ $route.meta.title }}</span>
      </div>
      <ul class="contents">
        <li class="contents-item" v-for="(item,index) in routeData" :key="index" @click="goLink(item)">
          <span class="contents-item-text" :title="item.content">{{item.content}}</span>
          <span v-if="item.date" class="date">{{item.date}}</span>
        </li>
      </ul>
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
      cultureNews: [
        {
          content: '6.6全国“爱眼日”暖心义诊——共筑爱眼健康，共享端午安康',
          date: '2024-06-07'
        },
      ],
      cultureClean: [
        {
          content: '浦口医院召开新任中层干部廉政谈话暨廉政知识测试',
          date: '2017-03-23',
        },
      ],
      cultureEducation: [
        {
          content: '医护服务无限延伸',
          date: '2018-04-02'
        },
      ],
      cultureWorkers: [
        {
          content: '记十余年如一日的产科门诊',
          date: '2019-03-28'
        },
      ],
      cultureVideo: [
        {
          content: '永远在路上',
          date: '2016-11-02'
        },
      ],
      cultureLink: [
        {
          content: 'blog.stride.fun'
        },
      ],
      cultureSchool: [
        {
          content: '中国共产党问责条例',
          date: '2019-09-06'
        },
      ],
      cultureThinking: [
        {
          content: '住院患者自创歌曲歌颂“白衣天使”',
          date: '2017-02-21'
        },
      ],
      cultureStudy: [
        {
          content: '《中国共产党廉洁自律准则》《中国共产党纪律处分条例》知识测试题',
          date: '2016-03-28'
        },
      ]
    }
  },
  updated () {
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
