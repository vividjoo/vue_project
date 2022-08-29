<template>
  <div>
    <select v-model="selected">
      <option value=""></option>
      <option value="03">seoul</option>
      <option value="051">busan</option>
      <option value="064">incheon</option>
    </select>
    <h1>{{ selected }} 맞나요?</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '064'
    }
  }
}
</script>

<style></style>
