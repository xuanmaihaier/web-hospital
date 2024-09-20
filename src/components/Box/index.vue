<template>
  <div :class="`box ${type}`">
    <div :class="`header ${type}`">
      <div class="title" :title="title">
        {{ title }}
      </div>
      <div v-if="showMore" class="more" @click="toLink">更多>></div>
    </div>
    <ul :class="`contents ${type}`">
      <li v-if="type=='default'" class="contents-item default" v-for="(item,index) in list" :key="index" @click="toList(item)">
        <span class="contents-item-text" :title="item.content">{{item.content}}</span>
        <span v-if="item.date" class="date">{{item.date}}</span>
      </li>
      <li v-if="type=='column'" class="contents-item column" v-for="(item,index) in list" :key="index" @click="toListColmn(item)">
        <span :style="{backgroundImage:'url('+item.image+')'}" class="contents-item-text" :title="item.content">{{item.content}}</span>
      </li>
      <li v-if="type=='list'" class="contents-item list" v-for="(item,index) in list" :key="index">
        <!-- <img src="" alt=""> -->
        <span class="contents-item-text" :title="item.content">{{item.content}}</span>
      </li>
      <li v-if="type=='mini'" class="contents-item mini" v-for="(item,index) in list" :key="index">
        <a class="contents-item-text" target="_blank" :href="item.link" :title="item.content">{{item.content}}</a>
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
    },
    type: {
      type: String,
      default: "default"
    },
    showMore: {
      type: Boolean,
      default: true

    }
  },
  methods: {
    toLink () {
      this.$router.push(`${this.link}`);
    },
    toList(item){
      this.$router.push(`${this.link}/details/${item.date?item.date:'09-20'}/${item.content}`);
    },
    toListColmn(item){
      this.$router.push(`${item.Link}`);

    }
  },
};
</script>

<style lang="scss" scoped>
$mainColor: #007399;
.box {
  display: inline-block;
  width: 100%;
  height: 319px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(238, 238, 238, 1);
  font-size: 14px;
  overflow: hidden;
  &.list,
  &.mini {
    height: 100%;
  }
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
      cursor: pointer;
    }
    &.column,
    &.mini,
    &.list {
      border-bottom: 2px dashed #eeeeee;
    }
  }
  .contents {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    // min-width: 300px;
    &.list,
    &.mini {
      justify-content: unset;
      align-content: unset;
      flex-direction: unset;
      flex-wrap: wrap;
      margin-top: 15px;
    }
    &-item {
      display: flex;
      border-top: 2px dashed #eeeeee;
      height: 38px;
      line-height: 38px;
      position: relative;
      padding-right: 15px;
      padding-left: 6px;
      justify-content: space-between;
      overflow: hidden;
      cursor: pointer;
      &-text {
        text-overflow: ellipsis;
        overflow: hidden;
        display: inline-block;
        white-space: nowrap;
        width: 200px;
        padding-left: 15px;
        text-align: left;
        &:hover {
          color: #005976;
        }
      }
      .date {
        color: #999;
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
      &.column,
      &.list,
      &.mini {
        border-top: none;
        height: 65px;
        line-height: 65px;
        align-items: center;
        margin-top: 15px;
        color: #fff;
        font-size: 16px;
        .contents-item-text {
          width: 100%;
          text-align: center;
          background-size: cover;
          &:hover {
            color: unset;
          }
        }
        &::before {
          display: none;
        }
      }
      &.list {
        width: calc((100% / 5) - 50px);
        margin: 0;
        height: 200px;
        color: #666;
        &:nth-child(2n) {
          background: rgba(249, 249, 249, 1);
        }
        &:hover {
          background: $mainColor;
          color: #fff;
        }
      }
      &.mini {
        font-size: 14px;
        height: 28px;
        line-height: 28px;
        margin-top: 0;
        margin-bottom: 12px;
        a {
          text-decoration: none;
          color: #000;
        }
        &:hover {
          color: #005976;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .box .contents-item.list {
    width: calc((100% / 2) - 24px);
    &:nth-child(2n) {
      background: #fff;
    }
    &:nth-child(4n + 2),&:nth-child(4n + 3) {
      background: rgba(249, 249, 249, 1);
    }
  }
}
</style>
