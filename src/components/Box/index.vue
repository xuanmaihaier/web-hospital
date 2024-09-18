<template>
  <div class="box">
    <div class="header">
      <div class="title">
        {{ title }}
      </div>
      <div class="more" @click="toLink">更多>></div>
    </div>
    <ul class="contents">
      <li class="contents-item" v-for="(item,index) in list" :key="index">
        <span class="contents-item-text">{{item.content}}</span>
        <span>{{item.date}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toLink () {
      this.$route.push(`${this.link}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: inline-block;
  height: 319px;
  background: #fff;
  .header {
    height: 54px;
    display: flex;
    justify-content: space-between;
    padding: 0 6px;
    align-items: center;
    .title {
      font-size: 16px;
      color: #005976;
      font-weight: bold;
      display: inline-block;
      line-height: 54px;
    }
    .more {
      color: #999999;
      display: inline-block;
      line-height: 54px;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    min-width: 300px;
    &-item {
      display: flex;
      border-top: 2px dashed #eeeeee;
      height: 38px;
      line-height: 38px;
      position: relative;
      padding-right: 15px;
      padding-left: 6px;
      &-text {
        text-overflow: ellipsis;
        overflow: hidden;
        display: inline-block;
        white-space: nowrap;
        width: 200px;
        padding-left: 15px;
        text-align: left;
      }
      &::before {
        content: "";
        width: 4px;
        height: 4px;
        display: inline-block;
        background: #000;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 6px;
      }
    }
  }
}
</style>
