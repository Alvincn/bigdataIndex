import { ref, reactive, onMounted } from 'vue';
export default function (key: string, timer: number = 2000, fn: () => void) {
  let index = ref(0);
  let timerIndex = ref(timer);
  const secret = (key: string) => {
    const keyDownArr = reactive(key.split(''));
    // 使用hook开启滚动出现
    let timer: any = null;
    document.body.addEventListener('keydown', (e) => {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        index.value = 0;
      }, timerIndex.value);
      if (e.key === keyDownArr[index.value]) {
        index.value++;
      } else {
        index.value = 0;
      }
      if (index.value === keyDownArr.length) {
        index.value = 0;
        fn();
      }
      return false;
    });
  };
  return secret(key);
}
