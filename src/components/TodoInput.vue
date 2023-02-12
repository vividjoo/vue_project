<template>
  <div>
    <input type="text" v-model="newTodoItem" />
    <button @click="addTodo">추가</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "" && this.newTodoItem !== undefined) {
        const value = this.newTodoItem && this.newTodoItem.trim();
        window.localStorage.setItem(this.newTodoItem, this.newTodoItem);
        this.newTodoItem = "";
      }
    },
  },
};
</script>

<style></style>
