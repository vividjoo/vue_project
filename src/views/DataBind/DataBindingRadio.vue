<template>
  <div>
    <div>
      <input type="radio" id="html" value="HTML" v-model="favorit" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" id="css" value="CSS" v-model="favorit" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="radio" id="js" value="JS" v-model="favorit" />
      <label for="js">JavaScript</label>
    </div>
    <span>favorit: {{ favorit }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorit: ''
    }
  }
}
</script>

<style></style>
