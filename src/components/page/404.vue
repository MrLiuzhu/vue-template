<template lang="html">
  <div class="not-found-page-container">
    <div class="page-title">
      您访问的页面不存在
    </div>
    <img src="../../assets/404_icon.png" alt="">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.not-found-page-container{
  width: 500px;
  text-align: center;
  position: relative;
  margin: 150px auto;
  .page-title{
    font-size: 30px;
    text-align: center;
    padding: 30px;
  }
}
</style>
