<template>
  <div id="pulsa" class="pulsa">
    <button id="cta" class="cta">
      扬帆起航！<div class="star a"></div>
      <div class="star b"></div>
      <div class="star c"></div>
      <div class="star d"></div>
      <div class="star e"></div>
      <div class="star f"></div>
      <div class="star g"></div>
      <svg version="1.1" viewBox="0 0 1024 1024" width="24px" class="rocket">
        <path fill="#3A7EB9"
          d="M662.72 462.784l136.448 169.408v173.248l-136.448-48.32zM342.72 457.344L206.272 626.816v173.248l136.448-48.384z">
        </path>
        <path fill="#D48171"
          d="M570.688 418.688l-142.848 1.152a266.496 266.496 0 0 1-20.288-0.576l3.712 448.64c0.256 28.928 94.272 130.048 94.272 130.048s93.888-102.656 93.632-131.584l-3.712-448.96a344.64 344.64 0 0 1-24.768 1.28z">
        </path>
        <path fill="#E9DF92"
          d="M531.456 599.296l-63.04 0.576c-3.008 0-5.952-0.064-8.96-0.384l2.176 257.792c0.128 16.64 41.728 74.816 41.728 74.816s41.344-58.944 41.28-75.52l-2.176-257.92c-3.648 0.384-7.296 0.64-11.008 0.64z">
        </path>
        <path fill="#B5D5EB"
          d="M554.304 93.568a324.352 324.352 0 0 0-110.592 1.728L342.72 240.768v584.512c13.824-0.96 27.968-1.536 42.368-1.536h245.248c11.84 0 23.36 0.384 34.816 1.024V253.312L554.304 93.568z">
        </path>
        <path fill="#3A7EB9"
          d="M541.44 94.144L500.416 35.008l-45.696 59.136v29.504h89.024v-29.504zM459.456 288.64h88.96v88.896h-88.96zM459.456 467.456h88.96v88.96h-88.96zM459.456 634.176h88.96v88.896h-88.96zM364.928 788.736h277.76v44.352h-277.76z">
        </path>
      </svg>
    </button>

  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<style scoped>
.pulsa {

  animation: pulsa 1.4s infinite;
  min-width: 200px;
  width: fit-content;
  border-radius: 9999px;
  /* overflow: hidden; */
}

.cta {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: none;
  border-radius: 9999px;
  padding: 8px 16px;
  color: white;
  font-size: 15px;
  background: linear-gradient(109.6deg, #090979 11.2%, #409eff 53.7%, #090979 100.2%);
  letter-spacing: 0.08em;
  font-weight: 800;
  position: relative;
}

.cta:active {
  animation: pulsa-active .4s infinite;
}

.star {
  width: 2px;
  height: 2px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  animation: pulsa-stella 1.8s infinite;
  transition: all .8s ease-in-out;
}

.star.a {
  top: 8px;
  left: 6px;
}

.star.b {
  top: 2px;
  left: 16px;
}

.star.c {
  top: 18px;
  left: 8px;
}

.star.d {
  top: 14px;
  left: 20px;
}

.star.e {
  top: 30px;
  left: 8px;
}

.star.f {
  top: 24px;
  left: 24px;
}

.star.g {
  top: 10px;
  left: 32px;
}

.pulsa:hover .star.a {
  transform: translate3d(0px, 8px, 0);
}

.pulsa:hover .star.b {
  transform: translate3d(-4px, 6px, 0);
}

.pulsa:hover .star.c {
  transform: translate3d(14px, -8px, 0);
}

.pulsa:hover .star.d {
  transform: translate3d(16px, -2px, 0);
}

.pulsa:hover .star.e {
  transform: translate3d(58px, -20px, 0);
}

.pulsa:hover .star.f {
  transform: translate3d(34px, 2px, 0);
}

.pulsa:hover .star.g {
  transform: translate3d(10px, 16px, 0);
}

.rocket {
  position: absolute;
  top: 8px;
  right: 16px;
  z-index: -1;
  transform: rotate(180deg);
  transition: all .3s ease-in-out;
}

.pulsa:hover .rocket {
  z-index: auto;
  animation: muovi-razzo 1.8s linear;
  transform: rotate(0deg);
}

@keyframes pulsa {
  0% {
    box-shadow: 0 0 0 0 #409eff;
  }

  100% {
    box-shadow: 0 0 0 8px #fbb32f01;
  }
}

@keyframes pulsa-stella {
  0% {
    box-shadow: 0 0 0 0 #ffffff;
  }

  100% {
    box-shadow: 0 0 0 4px #fbb32f01;
  }
}

@keyframes muovi-razzo {
  from {
    transform: rotate(180deg);
  }

  25% {
    transform: translate3d(40px, 32px, 0);
  }

  50% {
    transform: translate3d(32px, -60px, 0);
  }

  75% {
    transform: translate3d(0px, -60px, 0) rotate(0);
  }

  to {
    transform: rotate(0deg);
  }
}

@keyframes pulsa-active {
  0% {
    box-shadow: 0 0 0 0 #409eff;
  }

  100% {
    box-shadow: 0 0 0 16px #fbb32f01;
  }
}
</style>