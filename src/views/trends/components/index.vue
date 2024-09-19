<template>
  <main>
    <div class="header">
      <span>{{ $route.meta.title }}</span>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          content: '2024年国家网络安全宣传周：网络安全为人民，网络安全靠人民',
          date: '2024-09-02'
        },
        {
          content: '工休座谈会：提升服务质量，促进医患沟通',
          date: '2024-08-23'
        },
        {
          content: '"开心暑假，医起成长” 我院第二届职工子女暑期夏令营活动圆满成功',
          date: '2024-08-13'
        },
        {
          content: '医院工会召开2024年高考家长座谈会',
          date: '2024-08-12'
        },
        {
          content: '医师节动态 | 科主任查房培训提升临床规范，锤炼诊疗水平',
          date: '2024-08-09'
        },
        {
          content: '关注普遍的眼健康 | 南医大四附院开展“全国爱眼日”义诊活动',
          date: '2024-08-09'
        },
        {
          content: '服务基层、夯实基础、协同创新、共赴未来 | “第十一届金陵MDT沙龙暨心血管进展研讨会”圆满结束',
          date: '2024-07-24'
        },
        {
          content: '南医大四附院：关注长江汛情 慰问防汛一线',
          date: '2024-07-12'
        },
        {
          content: '南医大四附院第五届品管圈竞赛顺利举办',
          date: '2024-07-09'
        },
        {
          content: '协同 赋能 发展 高质量：“党建引领医院高质量发展”专题党课',
          date: '2024-07-01'
        },
        {
          content: '6.28国际癫痫关爱日义诊：“关注癫痫共病”',
          date: '2024-06-29'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  min-height: 20px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px dashed #eeeeee;
  padding: 20px 0px 20px 0px;
}
</style>
