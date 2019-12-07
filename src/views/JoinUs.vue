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
        <td> <routerLink :to="{name: 'Explore'}">Explore Afreeism</routerLink></td>        
        <td><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></td>
        <td><routerLink :to="{name: 'Blog'}">Blog</routerLink></td>
      </tr>
    </table>
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
