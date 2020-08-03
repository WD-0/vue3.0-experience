<template>
  <div>
    <div class="test">
      <router-link to="/test/bidirectional-binding">双向绑定</router-link> |
      <router-link to="/test/computing-monitoring">计算与监听</router-link> |
      <router-link to="/test/vuex">vuex</router-link> |
      <router-link to="/test/cycle">生命周期</router-link> | 
      <router-link to="/test/Component-value-transfer">父子组件传值</router-link>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script>
import {} from "vue"
export default {
  setup() {}
}
</script>
<style lang="scss" scoped>
.main{
  padding: 30px;
}
</style>
