<template>
  <div>
    <button @click="onClickf">확인</button>
  </div>
</template>

<script>
import AboutView from "./AboutView.vue";
import axios from "axios";

export default {
  components: { AboutView },
  methods: {
    onClickf() {
      axios
        .get("http://localhost:3000/boards")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("err: ", err.message);
        });
    },
  },
};
</script>

<style></style>
