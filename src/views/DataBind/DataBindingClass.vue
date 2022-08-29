<template>
  <div>
    <div :class="{ 'text-red': hasError, active: isActive }">class binding</div>
    <button @click="onC">OK</button>
    <div :class="class2">class binding2</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: true,
      class2: ['active', 'hasEror']
    }
  },
  methods: {
    onC() {
      if (this.isActive === false) this.isActive = true
      else this.isActive = false
    }
  }
}
</script>

<style scoped>
.active {
  background-color: greenyellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
