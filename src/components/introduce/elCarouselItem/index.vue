<template>
  <div>
    <el-carousel
      indicator-position="none"
      :interval="4000"
      type="card"
      height="500px"
      style="margin-top: 35px"
      pause-on-hover
    >
      <el-carousel-item v-for="(item, index) in imgs" :key="index">
        <img
          :src="item"
          alt=""
          style="height: 100%; width: 100%; border: solid rgb(149, 115, 90) 2px"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const props = defineProps(['imgs']);
</script>

<style scoped>
.el-carousel {
  width: 90%;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
