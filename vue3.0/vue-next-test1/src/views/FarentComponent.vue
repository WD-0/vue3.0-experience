<template>
  <div>
    <button @click="add">addRef</button>
    <SubComponents :count="count" @add="add"></SubComponents>
  </div>
</template>
<script lang="ts">
import { ref } from "vue"
import SubComponents from "./SubComponents.vue"
export default {
  components: { SubComponents },
  setup() {
    const count = ref(0)
    const add = () => {
      count.value++
    }
    return {
      count,
      add
    }
  }
}
</script>
<style lang="scss" scoped></style>
