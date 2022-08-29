/* eslint-disable */
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/layout/Header.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Header
  }
}
</script>
