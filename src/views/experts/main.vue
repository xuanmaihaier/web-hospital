<template>
  <main class="overview">
    <div class="overview-body">
      <div class="box">
        <el-menu class="no-animation-menu" @select="handleSelect":default-active="$route.params.value">
            <div v-for="(item) in depIntroduction" :key="item.label">
              <!-- 父级菜单 -->
              <el-submenu :index="item.label">
                <template #title>
                  <span>{{ item.label }}</span>
                </template>
                <!-- 递归子菜单 -->
                <el-menu-item v-for="child in item.children" :key="child.label" :index="child.label">
                  {{ child.label }}
                </el-menu-item>
              </el-submenu>
            </div>
          </el-menu>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </main>
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
  mounted () {
    console.log(this.$route);
  },
  methods: {
      handleSelect(key, keyPath) {
        this.$router.push(`/experts/${key}`)
      }
    }
}
</script>

<style lang="scss" scoped>
$mainColor: #007399;
.overview {
  &-body {
    display: flex;
    .box {
      width: 250px;
      padding: 10px 20px;
      border: 1px solid #eee;
      margin-right: 20px;
    }
    .content {
      width: 840px;
      height: 100%;
      border: 1px solid #eee;
      padding: 10px 30px;
      span {
        font-family: 宋体;
        font-size: 18px;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}

::v-deep .el-menu {
  border-right: none;
  .el-menu-item {
    height: 45px;
    line-height: 45px;
  }
  .el-menu-item.is-active {
    background: rgba(0, 115, 153, 0.05);
  }
}
@media screen and (max-width: 768px) {
  .overview-body .box {
    width: calc(100% - 60px);
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .overview-body {
    flex-direction: column;
  }
  .overview-body .content {
    width: calc(100% - 60px);
    margin: 0 auto;
    padding: 10px 20px;
  }
  img {
    width: 100%;
  }
}
::v-deep .no-animation-menu{
  min-height: 300px;
}
::v-deep .collapse-transition{
  display: none!important;
  transition: none!important;
  transition-delay: 0!important;
}
::v-deep .el-submenu__icon-arrow{
  transition-delay: 0!important;
}
</style>
