<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="myFunction(3)">클릭</button>
    <button @click="change">변경</button>
    <br />
    <input type="text" v-model.number="num1" />+
    <input type="text" v-model.number="num2" />+
    <input type="text" v-model.number="num3" />=
    <span>{{ num1 + num2 + num3 }}</span>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 'dsdf',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: ''
    }
  },
  setup() {},
  created() {},
  methods: {
    myFunction(i) {
      console.log(i, ': ', this.userId)
    },
    change() {
      this.userId = 'uㅋㅋpu1'
    }
  }
}
</script>

<style></style>
