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
        <td> <routerLink :to="{name: 'Afreeist_Handbook'}">The Afreeist Handbook</routerLink></td>        
        <td><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></td>
        <td><routerLink :to="{name: 'Blog'}">Blog</routerLink></td>
        <td><routerLink :to="{name: 'JoinUs'}">Join Us!</routerLink></td>
      </tr>
    </table>
    <div class="flex-container">
      <div>
        <routerLink :to="{name: 'Newsletter'}">The Basics of Afreeism</routerlink>
        <p>
          Click here to learn about the basics of afreeism, including 
          why there is no free will and what this means for personal autonomy around
          moral responsibility.
          </p>
        
      </div>
      <div>Afreeist Social Policy</div>
      <div>Personal Afreeism</div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Learn',
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
}
.flex-container {
  display: flex;
  background-color: DodgerBlue;
  justify-content: space-around;
}
.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
</style>
