<template>
  <Transition>
    <div class="hello">
      <div>
        <p>Hello,</p>
        <p>&emsp;&emsp;&emsp;World!</p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
</script>

<style scoped lang="scss">
.hello {
  font-size: 8rem;
  font-family: $font-family-console;
  text-align: center;
  padding: 20px 0px;
  user-select: none;
  font-weight: 800;
  animation-name: changeColor;
  animation-duration: 30s;
  animation-iteration-count: infinite;
}
@keyframes changeColor {
  0% {
    color: #de1c31;
  }
  8% {
    color: #fa7e23;
  }
  16% {
    color: #fed71a;
  }
  24% {
    color: #1ba784;
  }
  32% {
    color: #22a2c3;
  }
  40% {
    color: #15559a;
  }
  48% {
    color: #30161c;
  }
  56% {
    color: #15559a;
  }
  64% {
    color: #22a2c3;
  }
  72% {
    color: #1ba784;
  }
  80% {
    color: #fed71a;
  }
  88% {
    color: #fa7e23;
  }
  96% {
    color: #de1c31;
  }
}
</style>
