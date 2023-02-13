<template>
  <div id="app">
    <todo-header />
    <TodoInput />
    <todo-list :todoItems="todoItems" />
    <todo-footer-z />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInputVue from "./components/TodoInput.vue";
import TodoListVue from "./components/TodoList.vue";
import TodoFooters from "./components/TodoFooter.vue";

export default {
  name: "App",
  data() {
    return {
      todoItems: [],
    };
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInputVue,
    TodoList: TodoListVue,
    TodoFooterZ: TodoFooters,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  text-align: text;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
