<template>
  <div class="not-found">
    <h1>404 - 页面不存在</h1>
    <router-link to="/" class="home-button">返回首页</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 100px;
}

.home-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.home-button:hover {
  background-color: #0056b3;
}
</style>