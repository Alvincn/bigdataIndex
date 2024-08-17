<template>
  <div v-if="!IsPhone()">
    <!-- 首屏 -->
    <FirstScreen></FirstScreen>
    <!-- 欢迎Hello World -->
    <div id="reveal-top">
      <welcome ref="welcomeDom" />
    </div>
    <!-- 视频介绍 -->
    <div id="reveal-top">
      <Video />
    </div>
    <!-- 卡片、文字、轮播图 -->
    <div id="reveal-top">
      <Introduce />
    </div>
    <div id="reveal-top">
      <sign-in></sign-in>
    </div>
    <div id="reveal-top">
      <Footer></Footer>
    </div>
    </div>
  <div v-if="IsPhone()">
    <el-result title="抱歉！" sub-title="抱歉，请使用电脑端访问本页面以获得良好的访问体验！">
      <template #icon>
        <el-image
            src="http://www.ivikey.top/images/imgs/newlogo.png"
            style="width: 200px"
        />
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import setscroll from '@/hooks/setscroll';
import secret from '@/hooks/secret';
import {mouseClick} from "@/utils/mouseClick";
import { PASSWORD } from '@/config/system';
import {useRouter} from "vue-router";
import {ElMessage, ElMessageBox} from "element-plus";
import {SESSIONSTORAGE} from "@/utils/useStore";
const sessionstorage = new SESSIONSTORAGE()
const router = useRouter()
onMounted(() => {
  // 使用hook开启滚动出现
  setscroll();
  // 使用hook输入密码进入后台
  secret(PASSWORD, 3000, () => ElMessageBox.prompt('请输入后台管理系统密码', '后台管理系统', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    inputErrorMessage: '请输入密码',
  })
  .then(({ value }) => {
    if(value === 'haha'){
      ElMessage({
        type: 'success',
        message: `密码正确，进入后台管理系统`,
      })
      sessionstorage.setItem('goManager','true')
      router.push({
        path:'/manager',
      })
      // close()
    }else {
      ElMessage({
        type:'error',
        message:"密码错误！"
      })
    }


  })
  .catch((err) => {
    console.log(err)
    ElMessage({
      type: 'info',
      message: '',
    })
  }));
  mouseClick()
});

const IsPhone = () => {
  //获取浏览器navigator对象的userAgent属性（浏览器用于HTTP请求的用户代理头的值）
  let info = navigator.userAgent;
  //通过正则表达式的test方法判断是否包含“Mobile”字符串
  let isPhone = /mobile/i.test(info);
  //如果包含“Mobile”（是手机设备）则返回true
  return isPhone;
}
</script>

<style scoped>
</style>
