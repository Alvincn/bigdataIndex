<template>
  <div class="error">
    <div class="errmain">
      <SvgIcon name="cry" width="200px" height="200px" />
      <div class="errorMessage">
        <p>404！</p>
        您要访问的页面不存在！
      </div>
      <el-button style="margin-top: 15px" @click="goHome">返回首页</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const goHome = () => {
  router.push('/home');
};
</script>

<style scoped lang="scss">
.error {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  .errmain {
    .errorMessage {
      font-size: 20px;
      line-height: 30px;
    }
  }
}
</style>
