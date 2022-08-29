<template>
  <div>
    <h1>My Todo</h1>
    <p>{{ timestamp }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timestamp: ''
    }
  },
  created() {
    const now = new Date()
    const month = now.getMonth()
    this.timestamp = now + ':' + month
  }
}
</script>

<style></style>
