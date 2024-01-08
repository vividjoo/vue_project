<template>
  <div class="container mt-3">
    <h1 class="display-1 text-center">사용자 목록</h1>
    <div class="btn-group">
      <a href="/user/save" class="btn btn-primary">사용자 추가</a>
    </div>
    <table class="table table-hover mt-3">
      <thead class="table-dark">
        <tr>
          <th>이름</th>
          <th>이메일</th>
          <th>가입날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="cursor-pointer"
          v-for="row in result"
          :key="row.no"
          onclick="location.href = '/user/findById'"
        >
          <td>ㅋㅋ</td>
          <td>ㅇㄹㅁㄴㅇ</td>
          <td>2023-01-02</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  data() {
    return {
      result: [
        {
          no: 21,
        },
      ],
    };
  },
};
</script>

<style></style>
