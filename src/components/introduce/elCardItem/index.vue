<template>
  <div style="width: 30%">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="web.imgUrl" class="image" />
      <div style="padding: 14px">
        <span class="card-title">{{ web.title }}</span>
        <p class="card-desc">{{ web.desc }}</p>
        <div class="card-bottom">
          <el-button type="primary" class="button" @click="preview">{{ web.buttonText }}</el-button>
        </div>
      </div>
    </el-card>
    <el-dialog
      draggable
      close-on-press-escape
      append-to-body
      top="2vh"
      :fullscreen="!web.mobile"
      v-model="showDialog"
      :title="web.title"
      :style="[{ width: web.mobile ? '440px' : '100%' }, { height: web.mobile ? '91vh' : '' }]"
    >
      <iframe
        :src="web.url"
        :style="[
          { width: web.mobile ? '400px' : '100%' },
          { height: web.mobile ? '78vh' : 'calc(100vh - 120px)' },
        ]"
        style="font-size: 10px"
        frameborder="0"
      ></iframe>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const { web } = defineProps(['web']);
let showDialog = ref(false);
const preview = () => {
  if (web.openHere) {
    showDialog.value = true;
  }
};
</script>

<style scoped lang="scss">
.el-card {
  // width: 450px;
  margin-top: 30px;
  height: 500px;
  position: relative;
  text-align: center;
  .card-title {
    font-size: 1.5rem;
    line-height: 50px;
    font-weight: 900;
    font-family: '宋体';
  }
  .card-desc {
    line-height: 22px;
  }
  .card-bottom {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5%;
  }
}
.el-card img {
  /* width: 100%; */
  transform: scale(60%);
  height: 300px;
  margin: 0 auto;
  display: block;
}

.el-message-box {
  width: 500px !important;
  height: 80% !important;
  max-width: 100% !important;
}
</style>
