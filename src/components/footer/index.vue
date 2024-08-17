<template>
  <div class="footer">
    <div class="left">
      <div class="svgs">
        <SvgIcon name="java" width="50px" height="50px"></SvgIcon>
        <SvgIcon name="vue" width="50px" height="50px"></SvgIcon>
        <SvgIcon name="node" width="50px" height="50px"></SvgIcon>
        <SvgIcon name="spring" width="50px" height="50px"></SvgIcon>
      </div>
      <div class="leftMain">
        <p>本站源代码将开放至GitHub，需要者自行下载</p>
        <p>©2021 - 2025 最终权力归大数据应用与开发实验室所有</p>
        <p>网站主体：bhbigdata.top | <a style="color: #48485a" href="https://beian.miit.gov.cn/#/Integrated/index">备案号：吉ICP备2021005980号-1</a></p>
        <p>
          <a href="https://10-2-0-102.sslvpn.beihua.edu.cn/jsxsd/">北华大学官网</a> |
          <a href="https://github.com/">Github</a> |
          <a href="https://alvincn.top/">大数据内用chatGPT</a> |
          <a href="http://bhbigdata.top:8099/users/sign_in">大数据实验室源代码平台</a>
        </p>
      </div>
    </div>
    <div class="right">
      <div class="rightMain">
        <div class="content">
          <img src="../../assets/imgs/new/qq.png" alt="">
          <span>23届大数据招生群</span>
        </div>
        <div class="content">
          <img src="../../assets/imgs/new/weixin.jpg" alt="">
          <span>大数据实验室官方微信</span>
        </div>
        <div class="content" style="text-align: left">
          <p>欢迎加入大数据实验室这个大家庭</p>
          <p>开放时间：自2023/9/22日起</p>
          <p>扫描左侧二维码进入纳新群以及关注微信号以获取最新消息</p>
          <p>有任何问题请随时联系我们，我们一定知无不言</p>
          <p>感谢您的关注以及访问，我们大数据不见不散</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.footer {
  width: 100vw;
  height: 200px;
  background-color: #291216;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  width: 50vw;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 30px;
  border-right: solid white 1px;
  justify-content: center;

  .svgs {
    display: flex;
    width: 300px;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  .leftMain {
    color: #48485a;
    font-family: '宋体';
    font-size: 10px;
    text-align: right;
    line-height: 20px;
    a {
      text-decoration: none;
      color: #48485a;
    }
  }
}
.right {
  width: 50vw;
  height: 80%;
  padding-left: 30px;
  border-right: solid white 1px;
  .rightMain {
    color: #48485a;
    font-family: '宋体';
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 10px;
    line-height: 20px;
    a {
      text-decoration: none;
      color: #48485a;
    }
    img {
      width: 120px;
      height: 120px;
      margin-bottom: 10px;
      border-radius: 10px;
    }
    .content  {
      display: flex;
      text-align: center;
      flex-direction: column;
      margin-right: 10px;
    }
  }
}
</style>
