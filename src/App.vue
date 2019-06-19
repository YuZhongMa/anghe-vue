<template>
  <div class="container">
    <common-head></common-head>
    <div class="ah-carousel">
      <el-carousel height="200px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <router-view class="common-content"></router-view>
  </div>
</template>
<script>
import CommonHead from "@/components/header";
import CommonFooter from "@/components/footer";
export default {
  name: "app",
  components: {
    CommonHead,
    CommonFooter
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  .common-content{
    margin: 0 auto;
    width: 70%;
  }
  .el-carousel__item {
    background: #409eff;
  }
  .ah-carousel {
    margin-top: 20px;
  }
}
</style>

