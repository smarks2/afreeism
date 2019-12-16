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
        <span>The Afreeist Handbook</span>
      </div>
      <div class="TopMen">
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Explore'}">What Is Afreeism</routerLink></div>
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Who_Are_We'}">Who Are We?</routerLink></div>      </div>
      <div class="Main">
        <div class="MainText">
          <p>
            The Afreeist Handbook presents the ideas and ideals of afreeism.
          </p>
          <p style="text-indent:20px">
               View the Afreeist Handbood <a href="Afreeist_Handbook.pdf">here</a>.
          </p>
          <p style="text-indent:20px">
            Download the Afreeist Handbook <a href="Afreeist_Handbook.pdf" download>here</a>.
          </p>
          <p>
            Because the ideas 
            afreeism are based on fact and reason, and because none of us have a monopoly on 
            the truth, the Afreeist Handbook is, and always will be, a work in progress.  We
            invite your thoughts, your comments, your criticisms, about the ideas in the Handbook.
            Please send these to smarks@bu.edu.
          </p>
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
  name: 'AfreeistHandbook',
};
</script>
<style scoped>
p {text-align:left;}
</style>
