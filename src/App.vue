<template>
  <div id="app">
    <!-- 头部公共导航栏 -->
    <NavBar />
    <!-- 所有主体内容区域显示 -->
    <keep-alive>
      <router-view :key="Date.now()"/>
    </keep-alive>
    <!-- 公共页脚 -->
    <FooterNav />
    <!-- <Loading /> -->
  </div>
</template>
<script>
  import NavBar from "@/components/NavBar/index.vue";
  import FooterNav from "@/components/FooterNav/index.vue";
  // import Adside from "components/common/adside/Adside";
  // import Loading from "components/common/loading/Loading.vue";
  export default {
    name: "App",
    components: {
      NavBar,
      FooterNav,
      // Adside,
      // Loading,
    },

  };
</script>
<style>

</style>