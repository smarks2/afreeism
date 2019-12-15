<template>
  <div>
    <div class="HomePage">
      <div class="Top"> 
        <div style="padding:0px 20px;">Login</div>
        <div style="padding:0px 20px;">Contribute</div>
      </div>
      <div class="Logo">
        <routerLink :to="{name: 'Home'}">
        <div>The</div>
        <div>Afreeist</div>
        <div>Society</div>
        </routerLink>
      </div>
      <div class="Quote">
        <span id="Top" class="PageTitle">Topics in Afreeism</span>
      </div>
      <div class="TopMen">
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Explore'}">Learn About Afreeism</routerLink></div>
        <div style="font-size:18px; padding:10px 30px;"><routerLink :to="{name: 'Who_Are_We'}">Learn About the Afreeist Society</routerLink></div>
      </div>
      
      <div class="Main">
        <div class="TopicCategories">
          <div class="CatInactive"><routerLink :to="{name: 'Basics'}">The Basics of Afreeism</routerLink></div>
          <div class="CatInactive"><routerLink :to="{name: 'Policy'}">Afreeist Social Policy</routerLink></div>
          <div class="CatActive">Personal Afreeism</div>
        </div>
        <div class="TopicGrid">
          <div class="Topic">
          <a href="#What_Is_Afreeism">Humility</a>
          </div>
          <div class="Topic">
          <a href="#Why_No_Free_Will">Wonder</a>
          </div>
          <div class="Topic">
          <a href="#What_Is_Determinism">Tolerance</a>
          </div>
          <div class="Topic">
          <a href="#What_Is_Afreeism">Self-Acceptance</a>
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
        <div class="TopicAnswers">
        <p id="What_Is_Afreeism"><b>What is afreeism?</b></p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p><a href="#Top">Back to topics.</a></p>
        <p id="Why_No_Free_Will"><b>Why is there no free will?</b></p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p><a href="#Top">Back to topics.</a></p>
        <p id="What_Is_Determinism"><b>What is determinism?</b></p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p>blah blah</p>
        <p><a href="#Top">Back to topics.</a></p>
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
