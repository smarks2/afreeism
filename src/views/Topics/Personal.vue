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
        <span id="Top">Afreeist Concepts and Ideals</span>
      </div>
      <div class="TopMen">
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Explore'}">What Is Afreeism?</routerLink></div>
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Who_Are_We'}">Who Are We?</routerLink></div>
      </div>
      
      <div class="Main">
        <div class="TopicCategories">
          <div class="CatInactive"><routerLink :to="{name: 'Basics'}">The Basics of Afreeism</routerLink></div>
          <div class="CatInactive"><routerLink :to="{name: 'Policy'}">Afreeist Social Policy</routerLink></div>
          <div class="CatActive">Personal Afreeism</div>
        </div>
        <div class="TopicGrid">
          <div class="Topic">
          Humility
          </div>
          <div class="Topic">
          Wonder
          </div>
          <div class="Topic">
          Tolerance
          </div>
          <div class="Topic">
          Self-Acceptance
          </div>
          <div class="Topic">
          Activism
          </div>
          <div class="Topic">
          Resiliance
          </div>
          <div class="Topic">
          Meaning
          </div>
         
        </div>
        <div class="MainTextTopics">
        
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
  name: 'Personal',
};
</script>
<style scoped>
p {text-align:left; color:#000000;}
</style>
