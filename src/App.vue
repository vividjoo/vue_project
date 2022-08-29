<template>
  <div id="app">
    <Header></Header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/databinding/input">Input</router-link> |
      <router-link to="/databinding/select">Select</router-link> |
      <router-link to="/databinding/check">CheckBox</router-link> |
      <router-link to="/databinding/radio">Radio</router-link> |
      <router-link to="/databinding/attribute">Attribute</router-link> |
      <router-link to="/databinding">Binding</router-link> |
      <router-link to="/databinding/list">List</router-link> |
      <router-link to="/databinding/class">Class</router-link> |
      <router-link to="/databinding/view">View</router-link>

      <br />
      <router-link to="/event/view">EventClickView</router-link> |
      <router-link to="/event/change">EventChange</router-link> |
      <router-link to="/event/key">EventKey</router-link> |
      <router-link to="/sum">SumView</router-link> |
      <router-link to="/sum/time">Time</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  component: { Header }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
