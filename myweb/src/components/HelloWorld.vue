<template>
  <div class="immoc">
      <header class="header">
        <ul class="uList">
          <li><a href="">首页</a></li>
          <li><a href="">首页</a></li>
          <li><a href="">首页</a></li>
          <li><a href="">首页</a></li>
          <li><a href="">首页</a></li>
        </ul>
      </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul.uList{
  width: 100%;
  height: 50px;
  list-style-type: none;
  text-align:center;
}
ul>li>a{
  text-decoration: none;
  color:#fff;
}
ul{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
ul>li{
  flex:1;
}
</style>
