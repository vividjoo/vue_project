<template>
  <div>
    <input type="text" v-bind:value="userId" readonly />
    <br />
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
    <br />
    <input type="search" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 'vcxzvzxcv',
      imgSrc:
        'https://images.velog.io/images/roro/post/33112d6d-1692-4ca5-a9a1-96328329101c/logo.png',
      txt1: ''
    }
  }
}
</script>

<style></style>
