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
          <span>Who Are We?</span>
      </div>
      <TopMenCode />
      <div class="Main">
        <div class="MainText">
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
            wish to explore these ideas, a good starting point is 
            <routerLink :to="{name: 'Explore'}">here</routerLink>, where you can find links to
            explanations of afreeist concepts and ideals and also to the Afreeist Handbook.  
            These resources explain why free will is an illusion,
            discusses how this affects personal autonomy and moral responsibility, 
            explores the history of afreeism (the roots go back
            several thousand years), 
            probes the social policy implications, and examines 
            how afreeism can change our personal lives for the better. 
          </p>
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

export default {
  name: 'Home',
  components:{
    TopMenCode,LogoCode,BottomMenuCode,
  },
}
</script>
<style>
</style>
