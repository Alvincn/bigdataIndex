<template>
  <div class="firstScreen">
    <div class="top">
      <img src="@/assets/imgs/newlogo.png" alt="" />
    </div>
    <div class="topicName">
      <div style="width: 100%" :content="TITLE">{{ TITLE }}</div>
    </div>
    <div class="bottom">
      <SvgIcon class="downIcon" name="down" width="50px" height="50px"></SvgIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { BIGDATA } from '@/config/system';
import { TITLE } from '@/config/system.ts';
onMounted(() => {
  // 控制台展示 BIGDATA 1421
  console.log(BIGDATA);
});
</script>

<style scoped lang="scss">
.firstScreen {
  width: 100vw;
  height: 100vh;
  background: -webkit-linear-gradient(
    to top,
    #ffffff,
    #6dd5fa,
    #2980b9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #ffffff,
    #6dd5fa,
    #2980b9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.top {
  width: 100%;
  height: 50vh;
  // background-color: $green;
  position: relative;
  img {
    width: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.bottom {
  width: 100%;
  height: 50vh;
  // background-color: $blue;
  .downIcon {
    position: relative;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: showAndHide;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
}
.firstScreen {
  position: relative;
  user-select: none;
  .topicName {
    position: absolute;
    text-align: center;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    font-weight: $font-weight;
    letter-spacing: 10px;
    font-family: $font-family-Ts;
    color: $blue;
    // span::before {
    //   position: absolute;
    //   height: 50%;
    //   content: attr(content);
    //   overflow: hidden;
    //   color: $blue;
    //   z-index: 999;
    //   font-weight: $font-weight;
    // }
  }
}
@keyframes showAndHide {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
