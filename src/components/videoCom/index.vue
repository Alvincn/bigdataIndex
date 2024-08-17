<template>
  <div class="introduce">
    <video src="@/assets/video/fornew.mp4" controls poster="@/assets/imgs/videoProview.png"></video>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const text = ref(
  '大数据应用与开发工作室成立于2019 年至今一直进行校企合作。实验室以项目开发为主，同时参与互联网+创新创业大赛、挑战杯、中国软件杯等竟赛的运行机制。旨在培养和提升学生在大数据环境下的数据挖掘分析和软件应用开发水平，提高动手操作和项目实践能力。'
);
</script>

<style scoped lang="scss">
.introduce {
  height: 100vh;
  background-image: url('@/assets/imgs/background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  video {
    height: 70%;
    border-radius: 19px;
  }
}
</style>
