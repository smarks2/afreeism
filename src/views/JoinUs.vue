<template>
  <div class="home">
     <table>
      <tr>
        <td>
          <h1>The Afreeist Society</h1>
          <h2>Join Us!</h2>
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <td> <routerLink :to="{name: 'Home'}">Home</routerLink></td>
        <td> <routerLink :to="{name: 'Afreeist_Handbook'}">The Afreeist Handbook</routerLink></td>        
        <td><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></td>
        <td><routerLink :to="{name: 'Blog'}">Blog</routerLink></td>
        <td><routerLink :to="{name: 'JoinUs'}">Join Us!</routerLink></td>
      </tr>
    </table>
    <p>
     UNDER CONSTRUCTION
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
