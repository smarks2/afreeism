<template>
  <div>
    <div class="HomePage"  id="Back">
      <div class="Top"> 
        <div style="padding:0px 20px;"></div>
        <div style="padding:0px 20px;"></div>
      </div>
      <div class="Logo">
        <LogoCode />
      </div>
      <div class="PageTitle">
        <span>What Is Afreeism?</span>
      </div>
      <TopMenCode />      
      <div class="Main">
        <div class="TopicCategories">
          <div class="CatInactive"><routerLink :to="{name: 'Basics'}">The Basics of Afreeism</routerLink></div>
          <div class="CatActive">Afreeist Social Policy</div>
          <div class="CatInactive"><routerLink :to="{name: 'Personal'}">Personal Afreeism</routerLink></div>
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
            <a href="#Deservedness">The Myth of Deservedness</a>
          </div>
          <div class="Topic">
            <a href="#Equality">The Equality Principle</a>
          </div>
          <div class="Topic">
            <a href="#Crime">Crime</a>
          </div>
          <div class="Topic">
            <a href="#Wealth_Poverty">Wealth and Poverty</a>
          </div>
          <div class="Topic">
            <a href="#Immigration">Immigration</a>
          </div>
          <div class="Topic">
            <a href="#Freedom">Freedom</a>
          </div>
         
        </div>
        <div class="MainTextTopics">
          <Deservedness />
          <Equality />
          <Crime />
          <Wealth_Poverty />
          <Immigration />
          <Freedom />
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
import Deservedness from '@/views/Topics/Policy/Deservedness.vue'
import Equality from '@/views/Topics/Policy/Equality.vue'
import Crime from '@/views/Topics/Policy/Crime.vue'
import Wealth_Poverty from '@/views/Topics/Policy/Wealth_Poverty.vue'
import Immigration from '@/views/Topics/Policy/Immigration.vue'
import Freedom from '@/views/Topics/Policy/Freedom.vue'
export default {
  name: 'Home',
  components:{
    TopMenCode,
    LogoCode,
    BottomMenuCode,
    Deservedness,
    Equality,
    Crime,
    Wealth_Poverty,
    Immigration,
    Freedom,
  },
}
</script>
<style scoped>
p {text-align:left; color:#000000;}
</style>
