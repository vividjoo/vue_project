<template>
  <div>
    <select name="" id="" @change="changeCity($event)" v-model="selectedCity">
      <option value="">도시선택</option>
      <option :value="city.cityCode" v-for="(city, i) in cityList" :key="i">
        {{ city.title }}
      </option>
    </select>
    <select name="" id="">
      <option :value="dong.code" v-for="(dong, i) in selectedDongList" :key="i">
        {{ dong.dongTitle }}
      </option>
    </select>
    <!-- <select name="" id="">
      <option
        :value="dong.code"
        v-for="(dong, i) in dongList.filter(
          dong => dong.cityCode === selectedCity
        )"
        :key="i"
      >
        {{ dong.dongTitle }}
      </option>
    </select> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: 1, title: 'seoul' },
        { cityCode: 2, title: 'busan' },
        { cityCode: 3, title: 'jeju' }
      ],
      dongList: [
        { cityCode: 1, dongCode: 11, dongTitle: 'seoul 1동' },
        { cityCode: 1, dongCode: 22, dongTitle: 'seoul 2동' },
        { cityCode: 1, dongCode: 33, dongTitle: 'seoul 3동' },
        { cityCode: 2, dongCode: 44, dongTitle: 'busan 4동' },
        { cityCode: 3, dongCode: 55, dongTitle: 'jeju 5동' },
        { cityCode: 3, dongCode: 66, dongTitle: 'jeju 6동' }
      ],
      selectedDongList: []
    }
  },
  methods: {
    changeCity(evt) {
      console.log(evt.target.tagName)
      this.selectedDongList = this.dongList.filter(
        city => city.cityCode === this.selectedCity
      )
    }
  }
}
</script>

<style></style>
