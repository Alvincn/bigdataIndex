<template>
  <div class="tabbar">
    <div class="logo">
      <div>
        <img :src="LOGO_URL" alt="" style="height: 50px">
      </div>
      <span>大数据实验室后台管理系统</span>
    </div>
    <div class="right">
      <el-button>退出后台</el-button>
    </div>
  </div>

</template>

<script setup lang="ts">
import {LOGO_URL} from '@/config/system'
</script>

<style scoped lang="scss">
.tabbar {
  width: 100vw;
  display: flex;
  height: 50px;
  background-color: #3e82bb;
  justify-content: space-between;
  .logo  {
    display: flex;
    align-items: center;
    img {
      margin: 0 10px;
    }
    span {
      line-height: 50px;
      font-size: 20px;
      font-family: '宋体';
      color: white;
      font-weight: 800  ;
    }
  }
  .right{
    display: flex;
    align-items: center;
    button {
      margin-right: 20px;
    }
  }

}
</style>
