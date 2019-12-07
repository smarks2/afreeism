<template>
  <div class="home">
     <table>
      <tr>
        <td>
          <h1>The Afreeist Society</h1>
          <h2>Newsletter</h2>
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <td> <routerLink :to="{name: 'Home'}">Home</routerLink></td>
        <td> <routerLink :to="{name: 'Explore'}">Explore Afreeism</routerLink></td>       
        <td><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></td>
        <td><routerLink :to="{name: 'Blog'}">Blog</routerLink></td>
      </tr>
    </table>
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
