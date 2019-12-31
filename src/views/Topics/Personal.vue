<template>
  <div>
    <div class="HomePage">
      <div class="Top"> 
        <div style="padding:0px 20px;">Login</div>
        <div style="padding:0px 20px;">Contribute</div>
      </div>
     <div class="Logo">
        <LogoCode />
      </div>
      <div class="PageTitle">
        <span id="Back">What Is Afreeism?</span>
      </div>
      <TopMenCode />
      
      <div class="Main">
        <div class="TopicCategories">
          <div class="CatInactive"><routerLink :to="{name: 'Basics'}">The Basics of Afreeism</routerLink></div>
          <div class="CatInactive"><routerLink :to="{name: 'Policy'}">Afreeist Social Policy</routerLink></div>
          <div class="CatActive">Personal Afreeism</div>
        </div>
        <div class="TopicGrid">
          <div style="margin-left:20px">
            <p>Click on the topics below.  For a more extended and thoughtful discussion of afreeism, 
              please see the <routerLink :to="{name: 'AfreeistHandbook'}">Afreeist Handbook</routerLink>.
            </p>
          </div>
        </div>
        <div class="TopicGrid">
          <div class="Topic">
            <a href="#Humility">Humility</a>
          </div>
          <div class="Topic">
            <a href="#Wonder">Wonder</a>
          </div>
          <div class="Topic">
            <a href="#Gratitude">Gratitude</a>
          </div>
          <div class="Topic">
            <a href="#Tolerance">Tolerance</a>
          </div>
          <div class="Topic">
            <a href="#Self-Acceptance">Self-Acceptance</a>
          </div>
          <div class="Topic">
            <a href="#Engagement">Engagement</a>
          </div>
          <div class="Topic">
            <a href="#Resilience">Resilience</a>
          </div>
          <div class="Topic">
            <a href="#Meaning">Meaning</a>
          </div>
         
        </div>
        <div class="MainTextTopics">
          <Humility />
          <Wonder />
          <Gratitude />
          <Tolerance />
          <Self_Acceptance />
          <Engagement />
          <Resilience />
          <Meaning />
        </div>
      </div>
      <div class="RSidebar" style="padding:20px;">
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'JoinUs'}">JoinUs</routerLink></div>
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink></div>
        <div style="margin:10px; padding:20px; background-color:white;"><routerLink :to="{name: 'Blog'}">Blog</routerLink></div>
      </div>
      <div class="Bottom">
        <BottomMenuCode />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LogoCode from '@/views/LogoCode.vue'
import BottomMenuCode from '@/views/BottomMenuCode.vue'
import TopMenCode from '@/views/TopMenCode.vue'
import Humility from '@/views/Topics/Personal/Humility.vue'
import Wonder from '@/views/Topics/Personal/Wonder.vue'
import Gratitude from '@/views/Topics/Personal/Gratitude.vue'
import Tolerance from '@/views/Topics/Personal/Tolerance.vue'
import Self_Acceptance from '@/views/Topics/Personal/Self_Acceptance.vue'
import Engagement from '@/views/Topics/Personal/Engagement.vue'
import Resilience from '@/views/Topics/Personal/Resilience.vue'
import Meaning from '@/views/Topics/Personal/Meaning.vue'

export default {
  name: 'Home',
  components:{
    TopMenCode,LogoCode,BottomMenuCode,Humility,Wonder,Gratitude,
    Tolerance,Self_Acceptance,Engagement,Resilience,Meaning,
  },
}
</script>
<style scoped>
p {text-align:left; color:#000000;}
</style>
