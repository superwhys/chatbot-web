<template>
  <div id="app">
    <home-page></home-page>
  </div>
</template>

<style>
:root {
  --black: rgb(30, 30, 30);
  --white: rgb(187, 187, 187);
  --card-shadow: 0px 2px 4px 0px rgb(0, 0, 0, 0.05);
  --full-height: 100%;
  --window-width: 90vw;
  --window-height: 90vh;
  --sidebar-width: 271px;
  --window-content-width: 100%;
  --primary: rgb(29, 147, 171);
}
html {
  height: var(--full-height);
}
body {
  background-color: black;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  touch-action: pan-x pan-y;
  overflow: hidden;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script setup>
import HomePage from "@/views/homePage.vue";
</script>
