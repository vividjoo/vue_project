<template>
  <div>
    <div>
      <input type="checkbox" id="html" value="HTmL" v-model="favoriteLang" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" id="css" value="CSS" v-model="favoriteLang" />
      <label for="css">css</label>
    </div>
    <div>
      <input type="checkbox" id="js" value="JdS" v-model="favoriteLang" />
      <label for="js">js</label>
    </div>
    <span>{{ favoriteLang }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favoriteLang: ['CSS']
    }
  }
}
</script>

<style></style>
