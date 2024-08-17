<template>
  <div class="signin">
    <div class="bg"></div>
    <div class="main">
      <h2>加入我们</h2>
      <div class="text">
        <span style="line-height: 40px;">
          加入大数据实验室：<br />
          您将拥有一群志同道合的伙伴；<br />
          您将拥有环境良好的学习空间；<br />
          您将拥有企业级别的开发能力；<br />
          在大数据，让我们一同追逐心中的梦，为了理想奉献自己的青春！
        </span>
        <signButton class="button" @click="clickHandle" />
      </div>
    </div>
    <el-dialog top="5vh" append-to-body v-model="dialogFormVisible" title="大数据报名信息">
      <signUpForm v-if="!showSuccess" @disShow="handleDisshow" @success="signSuccess"/>
      <el-result
          v-if="showSuccess"
          icon="success"
          title="报名成功"
          :sub-title="`亲爱的 ${stuInfo.name} 同学：感谢您选择大数据实验室，期待您能成为我们的一员，请您关注您的邮箱已获取最新消息😇！`"
      >
        <template #extra>
          <el-button type="primary" @click="reSignIn">还要报名！</el-button>
          <el-button type="primary" @click="showPassword">小秘密</el-button>
        </template>
      </el-result>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted, computed} from 'vue';
import {ElMessageBox} from "element-plus";
const showSuccess = ref(false)
let stuInfo = JSON.parse(window.localStorage.getItem('stuInfo')) || ''
const dialogFormVisible = ref(false)
onMounted(() => {
  console.log(stuInfo)
  if(stuInfo){
    showSuccess.value = true
  }
});

const clickHandle = () => {
  dialogFormVisible.value = true
}
const handleDisshow = () => {
  dialogFormVisible.value = false
}
const signSuccess = (stu)=>{
  showSuccess.value = true
  stuInfo = stu
}
const reSignIn = () => {
  showSuccess.value = false
  window.localStorage.removeItem('stuInfo')
}
const showPassword = () => {
  ElMessageBox.alert(
      `
        嗨，小朋友，送你一个大数据内用的<i>chatGPT</i><br/>
        密码：<strong>bigdata1421</strong><br/>
        使用方法：在此页面作品点击 大数据官方chatGPT，点击密码，输入确认即可<br/>
        这是我们送给你的入学礼物，希望你能喜欢🎀<br/>
        欢迎你来到北华大学，享受大学生活，也祝你前程似锦✨<br/>
        大数据实验室全体成员向新来的你表示欢迎🌈
       `,
      '嗨，小朋友☀️',
      {
        dangerouslyUseHTMLString: true,
      }
  )
}
</script>

<style scoped lang="scss">
.signin {
  width: 100vw;
  height: 400px;
  background-image: url('https://www.ivikey.top/cdn/imgs/signupBack.jpg');
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .bg {
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: gray;
    // z-index: 1000;
    opacity: 0.3;
  }

  .main {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999;
    text-align: center;
    padding: 20px;

    h2 {
      font-size: 3rem;
      color: white;
      letter-spacing: 5px;
      font-weight: $font-weight;
    }

    .text {
      margin-top: 30px;
    }

    .text {
      font-size: 1.5rem;
      font-weight: 900;
      font-family: '宋体';
      color: white;
    }

  }

  .button {
    position: absolute;
    margin-top: 20px;
    cursor: pointer;

    // bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>


