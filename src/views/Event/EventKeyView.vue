<template>
  <div>
    <!-- <input type="search" v-model="searchText" @keyup="checkEnter($event)" />
    <button @click="doSearch">확인</button> -->

    <input type="search" v-model="searchText" @keyup.enter="doSearch" />
    <h1 v-if="ret">{{ searchText }}</h1>
    <button @click="doSearch">확인</button>
    <br />
    <select v-model="region" @change="chan">
      <option :value="value.code" v-for="(value, index) in d" :key="index">
        {{ value.city }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      ret: false,
      d: [
        { code: 1, city: 'Seoul' },
        { code: 4, city: 'busan' },
        { code: 3, city: 'jeju' }
      ],
      region: 2
    }
  },
  methods: {
    doSearch() {
      // console.log(this.searchText)
      alert(this.searchText + '님이 맞나요?')
    },
    checkEnter(ent) {
      // 13이 엔터키의 키번호이다
      if (ent.keyCode === 13) {
        this.doSearch()
      }
    },
    chan() {
      alert(this.region)
    }
  },
  watch: {
    searchText(num) {
      if (this.searchText !== '') this.ret = true
      console.log('num ', num.length)
    }
  }
}
</script>

<style></style>
