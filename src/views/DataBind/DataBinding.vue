<template>
  <div>
    {{ users }} <br />
    <input type="text" v-model="models" />
    <button @click="cli" :disabled="models === ''">확인</button>
    <h1>{{ models }}</h1>
    <br />
    <input type="text" v-model.number="num1" /> +
    <input type="text" v-model.number="num2" /> =
    <h1>{{ num1 + num2 }}</h1>
  </div>
</template>

<script>
export default {
  methods: {
    cli() {
      this.models = 'no!'
    }
  },
  data() {
    return {
      users: 'dsf',
      models: '',
      num1: 0,
      num2: 0
    }
  }
}
</script>

<style></style>
