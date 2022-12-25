<template>
    <div class="yellow-card">
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
  .yellow-card {
    background-color: yellow;
    height: 300px;
    width: 200px;
  }
  </style>

  