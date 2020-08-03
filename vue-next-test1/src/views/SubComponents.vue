<template>
  <div>
    <div>count：{{ count }}</div>
    <button @click="add">subAddRef</button>
  </div>
</template>
<script>
import {} from "vue"
export default {
  props: ["count"],
  setup(props, context) {
    console.log(props.count, context)
    const add = () => {
      context.emit('add')
    }
    return {
      props,
      add
    }
  }
}
</script>
<style lang="scss" scoped></style>
