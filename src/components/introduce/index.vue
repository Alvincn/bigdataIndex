<template>
  <div>
    <div class="intro-text" v-for="(item, index) in INTRODUCE" :key="index">
      <div class="intro-title">{{ item.title }}</div>
      <div class="intro-main">{{ item.content }}</div>
    </div>
    <div class="intro-card">
      <div class="card" v-for="(item, index) in COUTNS" :key="index">
        <div class="card-count">
          {{ item.count
          }}<span style="font-size: 1.5rem; color: #6d6d6d">&nbsp;{{ item.desc }}</span>
        </div>
        <div class="card-content">{{ item.content }}</div>
      </div>
    </div>
    <div id="reveal-top">
      <div class="intro-img">
        <div class="intro-title">我们的风采</div>
        <el-carousel-item :imgs="IMGS"></el-carousel-item>
      </div>
    </div>
    <div class="intro-text intro-proct">
      <div class="intro-title">我们的作品</div>
      <div class="intro-proct-content">
        <el-card-item v-for="(item, index) in WEBS" :web="item" :key="index"></el-card-item>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import elCarouselItem from './elCarouselItem/index.vue';
import elCardItem from './elCardItem/index.vue';
import { IMGS, WEBS, COUTNS, INTRODUCE } from '@/config/system.ts';
import { ref, reactive, onMounted, computed } from 'vue';
</script>

<style scoped lang="scss">
.intro-text {
  width: 100%;
  margin: 30px 0px;
  // height: 300px;
  .intro-title {
    font-size: 1.9rem;
    line-height: 1.5em;
    font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
    font-weight: bold;
    text-align: center;
    position: relative;
  }
  .intro-title::after {
    content: '';
    width: 50px;
    height: 2px;
    background-color: #c7000b;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    min-width: 35px;
  }
  .intro-main {
    margin-top: 15px;
    color: #666;
    text-align: center;
    width: 60%;
    margin: 35px auto;
    padding: 0 20px;
    line-height: 1.95em;
  }
}
.intro-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  .card {
    height: 240px;
    text-align: center;
    width: 40%;
    line-height: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .card-count {
      font-size: 4rem;
    }
    .card-content {
      color: #ccc;
      width: 70%;
      margin: 20px auto;
    }
  }
}
.intro-img {
  width: 100%;
  margin: 30px 0px;
  position: relative;
  // height: 300px;
  .intro-title {
    font-size: 1.9rem;
    line-height: 1.5em;
    font-family: Microsoft YaHei, Arial, Helvetica, sans-serif !important;
    font-weight: bold;
    text-align: center;
    position: relative;
  }
  .intro-title::after {
    content: '';
    width: 50px;
    height: 2px;
    background-color: #c7000b;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    min-width: 35px;
  }
  .intro-main {
    margin-top: 15px;
    color: #666;
    text-align: center;
    width: 60%;
    margin: 35px auto;
    padding: 0 20px;
    line-height: 1.95em;
  }
}
.imgs {
  margin-top: 30px;
  display: flex;
  position: absolute;
  // justify-content: space-around;
  img {
    height: 200px;
    margin: 0px 10px;
  }
}
.intro-proct-content {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: space-around;
}
</style>
