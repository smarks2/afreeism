<template>
  <div class="home">
      <div class="ASTitle">
      The Afreeist Society
      <div>Newsletter</div>
    </div>
    <div class="TopMenu">
      <div><routerLink :to="{name: 'Home'}">Home</routerLink></div>
      <div><routerLink :to="{name: 'Explore'}">Explore Afreeism</routerLink></div>
      <div><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></div>
      <div><routerLink :to="{name: 'Blog'}">Blog</routerLink></div>
      <div><routerLink :to="{name: 'JoinUs'}">JoinUs</routerLink></div>
    </div>
    <p>
     The newsletter has not been published yet.  Please check back later.
    </p>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Newsletter',
};
</script>
<style scoped>
p {text-align:left; color:#000000;}
</style>
