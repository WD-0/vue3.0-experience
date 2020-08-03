<template>
  <div>
    <div>count：{{ count }}</div>
    <button @click="add">addRef</button>
  </div>
</template>
<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered
} from "vue"
export default {
  setup() {
    console.log("created")
    const count = ref(0)
    const add = () => {
      count.value++
    }
    // 相当于 beforeMount
    onBeforeMount(() => {
      console.log("onBeforeMount")
    })
    // 相当于 mounted
    onMounted(() => {
      console.log("onMounted")
    })
    // 相当于 beforeUpdate
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate")
    })
    // 相当于 updated
    onUpdated(() => {
      console.log("onUpdated")
    })
    // 相当于 beforeDestroy
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount")
    })
    // 相当于 destroyed
    onUnmounted(() => {
      console.log("onUnmounted")
    })
    // 错误监控 参考文章 https://zhuanlan.zhihu.com/p/37404624
    onErrorCaptured(() => {
      console.log("onErrorCaptured")
    })
    // 已渲染
    onRenderTracked((e) => {
      console.log(e)
      console.log("onRenderTracked")
    })
    // 当组件更新时会首先触发此生命周期钩子 onRenderTriggered->onRenderTracked->onBeforeUpdate->onUpdated
    onRenderTriggered((e) => {
      console.log(e)
      console.log("onRenderTriggered")
    })
    return {
      count,
      add
    }
  }
}
</script>
<style lang="scss" scoped></style>
