<template>
  <div id="app">
    <div class="topbar">IOTV</div>
    <div class="sidebar">sidebar</div>
    <div class="incontent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
.topbar {
  height: 42px;
  border: 1px solid black;
  background: #ffffff;
  margin: 0;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.sidebar {
  height: calc(100vh - 45px);
  position: absolute;
  left: 0;
  bottom: 0;
  border: 1px solid black;
  width: 7rem;
  background: #ffffff;
}
.incontent {
  width: calc(100vw - 7rem);
  height: calc(100vh - 42px);
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
<style>
body {
  overflow-x: hidden;
}
</style>
