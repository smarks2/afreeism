<template>
  <div class="home">
      <div class="ASTitle">
      The Afreeist Society
      <div>Join Us!</div>
    </div>
    <div class="TopMenu">
      <div><routerLink :to="{name: 'Home'}">Home</routerLink></div>
      <div><routerLink :to="{name: 'Explore'}">Explore Afreeism</routerLink></div>
      <div><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></div>
      <div><routerLink :to="{name: 'Blog'}">Blog</routerLink></div>
      <div><routerLink :to="{name: 'JoinUs'}">JoinUs</routerLink></div>
    </div>
    <p>
     Membership in the Afreeist Society is free.  All you have to have is an open mind and
     some curiosity.  Joining may mean more in the future, but for now it just gets you on our 
     mailing list.  If you wish to be on the mailing list, please send an email to 
     smarks@bu.edu.  Thanks!
    </p>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'JoinUs',
};
</script>
<style scoped>
p {text-align:left; color:#000000;}
</style>
