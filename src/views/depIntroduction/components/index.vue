<template>
  <div class="body">
    <template v-if="!this.$route.meta.name.includes('Details')">
      <div v-for="(item,index) in depIntroduction" :key="index">
        <span class="title">{{item.label}}</span>
        <div class="children">
          <span @click="goLink(child)" v-for="(child,ind) in item.children" :key="index + '-' + ind" class="sub">{{child.label}}</span>
        </div>
      </div>
    </template>
    <router-view v-else></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      depIntroduction: [
        {
          label: '外科系统',
          value: '1',
          children: [
            {
              label: '普外科',
              value: '1-1',
            }, {
              label: '骨科',
              value: '1-2',
            }, {
              label: '手外科',
              value: '1-3',
            }, {
              label: '妇科',
              value: '1-4',
            }, {
              label: '产科',
              value: '1-5',
            }, {
              label: '神经外科',
              value: '1-6',
            }, {
              label: '泌尿外科',
              value: '1-7',
            }, {
              label: '胸外科',
              value: '1-8',
            }, {
              label: '耳鼻咽喉科',
              value: '1-9',
            }, {
              label: '眼科',
              value: '1-10',
            }, {
              label: '甲乳外科',
              value: '1-11',
            }, {
              label: '麻醉科',
              value: '1-12',
            }, {
              label: '疼痛科',
              value: '1-13',
            },
          ]
        },
        {
          label: '内科系统',
          value: '2',
          children: [
            {
              label: '心血管内科',
              value: '2-1',
            }, {
              label: '高压氧科',
              value: '2-2',
            }, {
              label: '血液内科',
              value: '2-3',
            }, {
              label: '放射治疗科',
              value: '2-4',
            }, {
              label: '全科医疗科',
              value: '2-5',
            }, {
              label: '老年医学科',
              value: '2-6',
            }, {
              label: '重症医学科',
              value: '2-7',
            }, {
              label: '儿科',
              value: '2-8',
            }, {
              label: '感染性疾病科',
              value: '2-9',
            }, {
              label: '风湿免疫科',
              value: '2-10',
            }, {
              label: '肿瘤科',
              value: '2-11',
            }, {
              label: '新生儿科',
              value: '2-12',
            }, {
              label: '针灸推拿科',
              value: '2-13',
            }, {
              label: '呼吸内科',
              value: '2-14',
            }, {
              label: '神经内科',
              value: '2-15',
            }, {
              label: '康复医学科',
              value: '2-16',
            }, {
              label: '内分泌科',
              value: '2-17',
            }, {
              label: '消化内科',
              value: '2-18',
            }, {
              label: '肾内科',
              value: '2-19',
            }
          ]
        },
        {
          label: '医技科室',
          value: '3',
          children: [
            {
              label: '公共卫生科',
              value: '3-1',
            }, {
              label: '药剂科',
              value: '3-2',
            }, {
              label: '介入科',
              value: '3-3',
            }, {
              label: '超声医学科',
              value: '3-4',
            }, {
              label: '放射科',
              value: '3-5',
            }, {
              label: '检验科',
              value: '3-6',
            }, {
              label: '病理科',
              value: '3-7',
            }, {
              label: '核医学科',
              value: '3-8',
            }
          ]
        },
        {
          label: '门诊科室',
          value: '4',
          children: [
            {
              label: '肛肠科',
              value: '4-1',
            }, {
              label: '医疗美容科',
              value: '4-2',
            }, {
              label: '生殖中心',
              value: '4-3',
            }, {
              label: '口腔科',
              value: '4-4',
            }, {
              label: '中医科',
              value: '4-5',
            }, {
              label: '皮肤科',
              value: '4-6',
            }, {
              label: '急诊医学科',
              value: '4-7',
            }, {
              label: '妇保科',
              value: '4-8',
            }, {
              label: '心理精神科',
              value: '4-9',
            }
          ]
        },
        {
          label: '体检中心',
          value: '5',
          children: [
            {
              label: '体检中心',
              value: '5-1',
            }
          ]
        }
      ]
    }
  },
  methods: {
    goLink (item) {
      this.$router.push(`${this.$route.path}/details/${item.label}`)
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
.title {
  width: 120px;
  height: 46px;
  line-height: 46px;
  background: rgba(0, 115, 153, 0.1);
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  padding: 0px 10px;
  display: inline-block;
}
.children {
  line-height: 55px;
  margin-left: 180px;
  display: flex;
  flex-wrap: wrap;
  span {
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    width: calc((100% / 6) - 10px);
    margin: 5px;
  }
}
@media screen and (max-width: 768px) {
  .children {
    margin-left: unset ;
    span {
      display: inline-block;
      cursor: pointer;
      font-size: 14px;
      width: calc((100% / 3) - 10px);
      margin: 5px;
    }
  }
}
</style>
