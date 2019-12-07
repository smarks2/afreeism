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
    <b>Who are we?</b>
    </p>    
    <p>
      The Afreeist Society is a collection of individuals interested in the ideas and ideals
      of afreeism.  The goals of the Afreeist Society are:
    </p>   
    <p>
    a. To explain afreeism.
    </p>
    <p>
    b. To stimulate thinking and research about afreeism.
    </p>   
    <p>
      c. To promote the values and ideals of afreeism.
    </p> 
    <p>
      <b>How can I learn more about afreesim?</b>
    </p>

    <p>
      If you
      wish to explore these ideas, a good starting point is the 
      <routerLink :to="{name: 'Afreeist_Handbook'}">Afreeist Handbook</routerLink>.  The Handbook explains why free will is an illusion,
      discusses how this affects personal autonomy and moral responsibility, explores the history of afreeism (the roots go back
      several thousand years), examines the social policy implications, and explores how afreeism can change our personal lives for the better. 
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Who_Are_We',
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
