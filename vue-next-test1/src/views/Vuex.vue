<template>
  <div>
    <div>count：{{ count }}</div>
    <div>countVuex：{{ countVuex }}</div>
    <button @click="add">addRef</button> 
    <button @click="addAsyn">addAsynRef</button>
  </div>
</template>
<script>
import { getCurrentInstance, computed, ref } from "vue"
export default {
  setup() {
    const { ctx } = getCurrentInstance()
    console.log(ctx)
    const count = ref(ctx.$store.state.count)
    const countVuex = computed(() => ctx.$store.state.count)
    const add = () => {
      ctx.$store.commit("setCount", ++count.value)
    }
    const addAsyn = () => {
      ctx.$store.dispatch("setCount", ++count.value)
    }
    return {
      count,
      countVuex,
      add,
      addAsyn
    }
  }
}
</script>
<style lang="scss" scoped></style>
