<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style lang="scss">
* {background-color:#98e6ed;}
* {margin: 20px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(170, 238, 238);
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
