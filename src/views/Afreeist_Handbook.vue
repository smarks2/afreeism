<template>
  <div class="home">
     <table>
      <tr>
        <td>
          <h1>The Afreeist Society</h1>
          <h2>The Afreeist Handbook</h2>
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
     Afreeism is not a new idea.  Its roots go back thousands of years.
     The ideas and ideals of Afreeism are explained in the Afreeist
     Handbook.  The Handbook explains why free will is an illusion, 
     discusses how this affects personal autonomy and moral responsibility, 
     explores the history of afreeism,
     examines the social policy implications, 
     and explores how afreeism can change our personal lives for the better.
     
     Since afreeism is based on science and reason, the Afreeist Handbook is 
     necessarily a work in progress and will always be.  As such, the author always welcomes
     input, including criticism.  You can read the Afreeist Handbook 
         <a href="Afreeist_Handbook.pdf">here</a> or download it
         <a href="Afreeist_Handbook.pdf" download>here</a>.  Comments should be sent to 
         Stephen Marks at smarks@bu.edu.
    </p>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Afreeist_Handbook',
};
</script>
<style scoped>
p {text-align:left; color:#000000;}
</style>
