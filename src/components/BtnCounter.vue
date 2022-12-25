<template>
  <div>
    <button
      class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        border border-blue-700
        rounded
      "
      @click="(()=>{counter > 9 ? counter = 0 : counter++})"
    >
      COUNTER - {{ counter }}
    </button>
  </div>
</template>
    
    <script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    return { counter };
  },
};
</script>
    
    <style scoped>
</style>
    