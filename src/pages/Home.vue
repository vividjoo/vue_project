<template>
  <div class="home">
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div v-for="(i, index) in state.items" :key="index">
            {{ i.id }}
            <!-- 부모(현재 Home.vue)컴포넌트에서 자식(현재 Card.vue) 컴포넌트로 데이터를 바인딩 시켜 넘겨 줄 때, :변수명=데이터 해당 표시로 넘겨 준다. 그리고 자식 컴포넌트에 props: {변수명: 자료형} 으로 받아 준다. -->
            <Card :item="i"></Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import Card from "../components/Card.vue";

export default {
  name: "Home",
  components: { Card },

  setup() {
    const state = reactive({
      items: [],
    });

    axios.get("/api/items").then(({ data }) => {
      state.items = data;
      console.log(data);
    });
    return { state };
  },
};
</script>

<style></style>
