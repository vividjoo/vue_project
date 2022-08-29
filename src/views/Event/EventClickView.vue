<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="plus(1)">cli</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    plus(num) {
      this.count += num
    }
  }
}
</script>

<style></style>
