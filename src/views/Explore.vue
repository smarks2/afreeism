<template>
  <div class="home">
     <table>
      <tr>
        <td>
          <h1>The Afreeist Society</h1>
          <h2>Explore Afreeism</h2>
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <td> <routerLink :to="{name: 'Home'}">Home</routerLink></td>
        <td><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></td>
        <td><routerLink :to="{name: 'Blog'}">Blog</routerLink></td>
        <td><routerLink :to="{name: 'JoinUs'}">Join Us!</routerLink></td>
      </tr>
    </table>
    <p>
     Afreeism is not a new idea.  Its roots go back thousands of years.
     This website provides two ways to explore the ideas and ideals of afreeism.
    <p>
      <b>The Afreeist Handbook</b>
    </p>
    <p> The most comprehensive way to introduce oneself to afreeism is by reading
     the Afreeist Handbook.  The Handbook explains why free will is an illusion, 
     discusses how this affects personal autonomy and moral responsibility, 
     explores the history of afreeism,
     examines the social policy implications, 
     and explores how afreeism can change our personal lives for the better.
     </p>
    <p>
       You can read the Afreeist Handbook 
         <a href="Afreeist_Handbook.pdf">here.</a>
      </p>
    <p> 
      You can download the Afreeist Handbook <a href="Afreeist_Handbook.pdf" download>here</a>.  
    </p>
    <p>Since afreeism is based on science and reason, we do not claim a monopoly on truth.  This is a way of saying that
      we really appreciate any comments or critiques on the Afreeist Handbook.  Comments should be sent to 
         Stephen Marks at smarks@bu.edu.
    </p>
    <p>
      <b>The Web Tutorial</b>
    </p>
    <p>
      The web tutorial provides a quicker introduction into the ideas and ideals of afreeism.  The web tutorial can
      be accessed <routerLink :to="{name: 'A1_Contents'}">here</routerLink>.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Explore',
};
</script>
<style scoped>
p {text-align:left;}
</style>
