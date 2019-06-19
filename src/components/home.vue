<template>
  <div class="ah-carousel">
    <el-carousel height="200px">
      <el-carousel-item v-for="item in 3" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.el-carousel__item {
  background: #409eff
}
.ah-carousel {
  margin-top: 20px;
}
</style>
