<template>
  <swiper class="w-[500px]" :slides-per-view="1" navigation>
    <swiper-slide
      v-for="(i, index) in itemsCount + 1"
      :key="index"
      class="p-[5px] flex justify-center"
    >
      <component
        :index="index"
        :is="
          index % 2 === 1
            ? `${redIsOdd ? 'YellowCard' : 'RedCard'}`
            : `${redIsOdd ? 'RedCard' : 'YellowCard'}`
        "
      />
    </swiper-slide>
  </swiper>
</template>
  
  <script>
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import RedCard from "./RedCard.vue";
import YellowCard from "./YellowCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Navigation, Pagination, A11y]);
export default {
  components: {
    RedCard,
    YellowCard,
    SwiperSlide,
    Swiper,
    Navigation,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  props: {
    mode: { type: String, required: true },
    itemsCount: { type: Number, required: true },
    redIsOdd: { type: Boolean, required: true },
  },
};
</script>
  
  <style scoped>
</style>
  