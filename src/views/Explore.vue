<template>
   <div>
    <div class="HomePage">
      <div class="Top"> 
        <div style="padding:0px 20px;">Login</div>
        <div style="padding:0px 20px;">Contribute</div>
      </div>
      <div class="Logo">
        <routerLink :to="{name: 'Home'}">
        <div class="LogoText">The</div>
        <div class="LogoText">Afreeist</div>
        <div class="LogoText">Society</div>
        </routerLink>
      </div>
      <div class="PageTitle">
        <span>What Is Afreeism?</span>
      </div>
      <div class="TopMen">
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Explore'}">What Is Afreeism?</routerLink></div>
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Who_Are_We'}">Who Are We?</routerLink></div>      </div>
      <div class="Main">
        <div class="MainText">
          <p>
            This website provides two ways to explore afreeism.  The first is a collection of short readings
            on various topics:
          </p>
          <div>
            <b><routerLink :to="{name: 'Basics'}">Afreeist Concepts and Ideals</routerLink></b>  
          </div>
          <p style="margin:20px">
            This is a collection of short readings on the various concepts and ideals of afreeism.
          </p>
          <p>
            <b><routerLink :to="{name: 'AfreeistHandbook'}">The Afreeist Handbook</routerLink></b>
          <div>
            <p style="margin:20px">
               The Afreeist Handbook is a more detailed description of the ideas and ideals of afreeism.
               It is recommended reading for anyone interested in afreeism.
            </p>
          </div>
        </div>
      </div>
      <div class="RSidebar" style="padding:20px;">
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'JoinUs'}">JoinUs</routerLink></div>
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></div>
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'Blog'}">Blog</routerLink></div>
      </div>
      <div class="Bottom">
        Bottom
      </div>
    </div>
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
