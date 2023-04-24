<template>
  <div id="app">
    <!-- exclude="Detail" 会使渐隐渐现效果失效 -->
    <!-- <keep-alive exclude="Detail"> -->
    <keep-alive >
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>


export default {};
</script>

<style>
</style>
