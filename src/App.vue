<template>
  <div class="container">
    <header></header>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>
<script>
import Header from '@/components/header';
import Footer from '@/components/footer'
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="less" scoped>
  .container {
    margin: 0 auto;
  }
</style>

