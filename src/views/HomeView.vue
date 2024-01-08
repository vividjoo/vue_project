<template>
  <div class="home">
    <a href="/user">zzzzzz</a>
    <button @click="getData()">데이터 호출</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    getData() {
      axios
        .post("http://localhost:8800/findAll")
        .then((res) => {
          const result = res.data;
          console.log("result ", result);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
