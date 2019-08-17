<template>
  <div class="home">
    <h1>The Afreeist</h1>
    <h3>Coming incredibly Soon or not</h3>
    <router-link :to="{name: 'About'}">
      <button>
        About
      </button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
};
</script>

<style>
</style>
