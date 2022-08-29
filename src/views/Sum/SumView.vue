<template>
  <div>
    <span v-if="count(2)">if {{ num }}</span>
    <span v-else-if="count(3)">else if {{ num }}</span>
    <span v-else>else {{ num }}</span>
    <br />
    <input type="text" v-model="text" @keydown.enter="inText" />
    <!-- <button @keydown.enter="inText">클릭</button> -->
    <br />
    <input type="text" v-model.number="grid.num1" @input="'stop'" /> +
    <input type="text" v-model.number="grid.num2" /> =
    <h3>{{ grid.num1 + grid.num2 }}</h3>
    <br />
    <select v-model="num">
      <option value="2"></option>
      <option :value="ar" v-for="(ar, index) in arr" :key="index">
        {{ ar.city }}는 {{ ar.code }}
      </option>
    </select>
    <h3>{{ num }}</h3>
    <hr />
    <div>
      <b-button variant="primary">Primary</b-button>
      <b-button variant="secondary">Secondary</b-button>
      <b-button variant="success">Success</b-button>
      <b-button variant="danger">Danger</b-button>
      <b-button variant="warning">Warning</b-button>
      <b-button variant="info">Info</b-button>
      <b-button variant="light">Light</b-button>
      <b-button variant="dark">Dark</b-button>
    </div>
  </div>
</template>

<script>
import EvalStatsTopVue from './EvalStatsTop.vue'
export default {
  components: { EvalStatsTopVue },
  data() {
    return {
      num: 0,
      text: '',
      grid: {
        num1: 0,
        num2: 0
      },
      arr: [
        { code: 1, city: 'seoul' },
        { code: 2, city: 'inchon' },
        { code: 3, city: 'busan' }
      ]
    }
  },
  methods: {
    count(num) {
      if (num === 2) {
        this.num = 5
        return false
      } else if (3) {
        return false
      }
    },
    inText() {
      this.text = '변경!'
    }
  }
}
</script>
<style></style>
