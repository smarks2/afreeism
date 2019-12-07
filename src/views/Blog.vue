<template>
  <div class="home">
     <table>
      <tr>
        <td>
          <h1>The Afreeist Society</h1>
          <h2>Blog</h2>
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <td> <routerLink :to="{name: 'Home'}">Home</routerLink></td>
        <td> <routerLink :to="{name: 'Explore'}">Explore Afreeism</routerLink></td>      
        <td><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></td>
        <td><routerLink :to="{name: 'JoinUs'}">Join Us!</routerLink></td>
      </tr>
    </table>
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
