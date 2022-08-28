<template>
  <div class="home">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Album example</h1>
          <p class="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div v-for="(i, index) in state.items" :key="index">
            Card
            {{ i }}
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
    });
    return { state };
  },
};
</script>

<style></style>
