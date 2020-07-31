<template>
  <div>
    <div>count：{{ count }}</div>
    <div>num：{{ num[0] }}</div>
    <div>count+num {{ addUp }}</div>
    <button @click="add">addRef</button>
  </div>
</template>
<script>
import { ref, reactive, toRefs, watch, computed } from "vue"
export default {
  setup() {
    const count = ref(0)
    const state = reactive({
      num: [1]
    })
    const addUp = computed(() => count.value + state.num[0])
    const add = () => {
      count.value++
      state.num[0]++
    }
    watch(
      () => count.value,
      (val, oldVal) => {
        console.log(`count：${val} ${oldVal}`)
      }
    )
    watch(
      [() => count.value, () => state.num],
      ([count, num], [oldCount, oldNum]) => {
        console.log(`count：${count} ${oldCount}`)
        console.log(`num：${num} ${oldNum}`)
      }
    )
    return {
      count,
      add,
      addUp,
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss" scoped></style>
