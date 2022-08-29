<template>
  <div>
    <div>
      <select name="" id="">
        <option value=""></option>
        <option :value="city.code" v-for="city in cities" :key="city.title">
          {{ city.title }}
        </option>
      </select>
    </div>

    <div>
      <table>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>가격</th>
            <th>주문수량</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(drink, i) in drinkList" :key="i">
            <td>{{ drink.drinkId }}</td>
            <td>{{ drink.drinkName }}</td>
            <td>{{ drink.price }}</td>
            <td><input type="number" v-model="drink.qty" /></td>
            <td>{{ drink.price * drink.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: '',
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '인천', code: '0321' }
      ],
      drinkList: [
        {
          drinkId: 1,
          drinkName: '콜라',
          price: 500,
          qty: 3
        },
        {
          drinkId: 1,
          drinkName: '오렌지주스',
          price: 1200,
          qty: 1
        },
        {
          drinkId: 3,
          drinkName: '사이다',
          price: 2000,
          qty: 2
        }
      ]
    }
  }
}
</script>

<style></style>
