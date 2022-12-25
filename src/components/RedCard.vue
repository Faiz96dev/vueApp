<template>
    <div class="red-card">
      <p class="text-xl">{{index}}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      index: { type: Number, required: true }
    }
  };
  </script>
  
  <style scoped>
  .red-card {
    background-color: red;
    height: 300px;
    width: 200px;
  }
  </style>
  