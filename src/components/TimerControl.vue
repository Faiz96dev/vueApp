<template>
  <div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" :class="{'opacity-50': startDisabled}" :disabled="startDisabled" @click="start">Start</button> -
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" :class="{'opacity-50': stopDisabled}" :disabled="stopDisabled" @click="stop">Stop</button> -
    <input class="p-[5px] rounded-[5px] outline-none" :disabled="inputDisabled" v-model="inputMinutes" :class="{'opacity-50': inputDisabled}" type="number" placeholder="minutes" />
    <p class="text-md mt-[20px]">
      {{ Math.floor(this.remainingSeconds / 60) }}:{{
        this.remainingSeconds % 60
      }}
    </p>
  </div>
</template>

<script >
import { ref } from "vue";
export default {
  name: "TimerControl",
  setup() {
    const remainingSeconds = ref(0);
    const inputMinutes = ref(0);
    const counterStop = ref(false);
    const inputDisabled = ref(false);
    const stopDisabled = ref(true);
    const startDisabled = ref(false);
    function start() {
      startDisabled.value = true;
      stopDisabled.value = false;
      counterStop.value = false;
      inputDisabled.value = true;
      let intetval = null 
      remainingSeconds.value = inputMinutes.value * 60;
      if (remainingSeconds.value === 0) return;
      intetval = setInterval(() => {
        remainingSeconds.value--;
        if (counterStop.value || this.remainingSeconds === 0 ){
          this.stop()
          clearInterval(intetval);
          intetval = null;
          remainingSeconds.value = null;
        }
      }, 1000);

    }
    function stop() {
      inputDisabled.value = false;
      startDisabled.value = false;
      stopDisabled.value = true;
      counterStop.value = true;
      inputMinutes.value = null;
      remainingSeconds.value = null;
    }
    return { remainingSeconds, start, stop, inputMinutes, inputDisabled, startDisabled, stopDisabled };
  },
};
</script>

<style scoped>
</style>
