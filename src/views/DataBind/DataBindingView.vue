<template>
  <div>
    <div style="color: red; font-size: 30px">
      스타일 바인딩 글씨는 Red 폰트 크기: 30px
    </div>
    <div :style="style2">스타일 바인딩 글씨는 Green 폰트 크기: 30px</div>
    <button @click="style2.color = 'blue'">확인</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style1: {
        color: 'red',
        fontSize: '30px'
      },
      style2: {
        color: 'green',
        fontSize: '30px'
      }
    }
  },
  method: {}
}
</script>

<style></style>
