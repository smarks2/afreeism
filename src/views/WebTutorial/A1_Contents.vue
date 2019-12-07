<template>
  <div class="home">
     <table>
      <tr>
        <td>
          <h1>The Afreeist Society</h1>
        </td>
      </tr>
    </table>
   
      <table>
      <tr>
        <td> <routerLink :to="{name: 'Explore'}">Explore Afreeism</routerLink></td>        
        <td><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></td>
        <td><routerLink :to="{name: 'Blog'}">Blog</routerLink></td>
        <td><routerLink :to="{name: 'JoinUs'}">Join Us!</routerLink></td>
      </tr>
    </table>
    <p>
    <b>Under Construction</b>
    </p>
   
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'A1_Contents',
};
</script>
<style>
p {
  text-align: left;
  color: #000000;
}
h1 {
  text-align: left;
  color: #000000;
  background-color: #63c7c2;
  text-align: center;
}
table, tr {
  border: 1px solid black;
  width: 100%;
  text-align: center;
  background-color: #63c7c2;
  padding: 5px;
  margin: 20px;
}
td {
  border: 1px solid black;
  width: 25%;
  text-align: center;
  background-color: #63c7c2;
  padding: 5px;
  margin: 20px;
}</style>
