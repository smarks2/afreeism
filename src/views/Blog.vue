<template>
  <div class="home">
    <div class="ASTitle">
      The Afreeist Society
      <div>Blog</div>
    </div>
    <div class="TopMenu">
      <div><routerLink :to="{name: 'Home'}">Home</routerLink></div>
      <div><routerLink :to="{name: 'Explore'}">Explore Afreeism</routerLink></div>
      <div><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></div>
      <div><routerLink :to="{name: 'Blog'}">Blog</routerLink></div>
      <div><routerLink :to="{name: 'JoinUs'}">JoinUs</routerLink></div>
    </div>
    <p>
    We have yet to blog.  When we do, it will appear here.
    </p>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Blog',
};
</script>
<style scoped>
p {text-align:left; color:#000000;}
</style>
