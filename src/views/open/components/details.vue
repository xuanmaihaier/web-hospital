<template>
  <div class="details">
    <div class="header">
      <p class="title">{{$route.params.name}}</p>
      <div class="sub">
        <span>发布时间：{{$route.params.date}}</span>
      <span>来源：信息科</span>
      <span>浏览：1次</span>
      </div>
    </div>
    <div class="content">
      暂无消息！
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$route.meta.title = this.$route.params.name
  },
}
</script>

<style lang="scss" scoped>
.details {
  .header {
    min-height: 20px;
    line-height: 20px;
    font-size: 15px;
    font-weight: 600;
    border-bottom: 1px dashed #eeeeee;
    padding: 20px 0px 20px 0px;
    .title {
      text-align: center;
    }
    .sub{
      font-size: 12px;
      text-align: center;
      display: inline-block;
      width: 100%;
      font-weight: 400;
      >span{
        padding-right: 14px;
      }
    }
  }
  .content{
    padding-top: 20px;
    font-size: 14px;
    text-align: center;
    color: #333;
  }
}
</style>