<template>
  <div>
    <div>count：{{ count }}</div>
    <div>num：{{ num }}</div>
    <button @click="add">addRef</button>
  </div>
</template>
<script>
import { ref, reactive, toRefs } from "vue"
export default {
  setup() {
    const count = ref(0)
    const state = reactive({
      num: 1
    })
    const add = () => {
      count.value++
      state.num++
    }
    return {
      count,
      add,
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss" scoped></style>
