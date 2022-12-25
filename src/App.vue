<template>
  <div class="w-full h-full flex justify-center flex-col items-center " >
  <TimerControl class="h-full w-1/2 p-10 bg-gray-300 rounded-[10px]"/>
  <div class="w-full flex justify-center flex-col items-center mt-[50px] h-[100px]">
    <p>SVG as component</p>
    <MySVGComponent/>
  </div>
  <div class="w-full flex justify-center flex-col items-center mt-[100px] ">
    <p>Carousel</p>
    <CarouselComponent class="mt-10" :itemsCount="7"/>
    <CarouselComponent class="mt-20" redIsOdd :itemsCount="6"/>
  </div>
  <div class="flex w-full justify-center mt-20 mb-20">
    <BtnCounter/>
  </div>
  </div>
</template>

<script>
import CarouselComponent from './components/CarouselComponent.vue'
import MySVGComponent from './components/MySVGComponent.vue'
import TimerControl from './components/TimerControl.vue'
import BtnCounter from './components/BtnCounter.vue'
export default {
  name: 'App',
  components: {
    TimerControl,
    MySVGComponent,
    CarouselComponent,
    BtnCounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
