<template>
  <div class="body">
    <template v-if="!showDetails">
      <div class="header">
        <span>{{ $route.meta.title }}</span>
      </div>
      <el-row style="flex-wrap: wrap;" class="content" type="flex" justify="space-between" :gutter="5">
        <el-col style="padding-bottom:10px" :xs="{span:24}" :sm="{span:8}" v-for="(item,index) in doc" :key="index">
          <el-card class="card" :body-style="{ padding: '0px' }" @click.native="goLink(item)">
            <img src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg' height="265px" class="image">
            <div style="padding: 14px;" class="bottom">
              <p class="name">{{item.name}}</p>
              <p class="title">{{item.title}}</p>
              <p class="sub">{{item.sub}}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-pagination class="pagination" background layout="prev, pager, next" :total="doc && doc.length" :page-size="20">
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
  updated () {
    this.showDetails = this.$route.meta.name.includes('Details')
    // this.$route.meta.title = this.$route.params.value
  },
  mounted () {
    this.$route.meta.title = this.$route.params.value
  },
  methods: {
    goLink (item) {
      // this.$route.meta.title = this.$route.params.value

      this.$router.push(`${this.$route.path}/details/${item.name}`)
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
