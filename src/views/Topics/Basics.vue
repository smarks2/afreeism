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
          <div class="CatActive">The Basics of Afreeism</div>
          <div class="CatInactive">
            <routerLink :to="{name: 'Policy'}">Afreeist Social Policy</routerLink>
          </div>
          <div class="CatInactive">
            <routerLink :to="{name: 'Personal'}">Personal Afreeism</routerLink>
          </div>
        </div>
        <div class="TopicGrid">
          <div style="margin-left:20px">
            <p>
              Click on the topics below. For a more extended and thoughtful discussion of afreeism,
              please see the
              <routerLink :to="{name: 'AfreeistHandbook'}">Afreeist Handbook</routerLink>.
            </p>
          </div>
        </div>
        <div class="TopicGrid">
          <div class="Topic">
            <a href="#What_Is_Afreeism">What Is Afreeism?</a>
          </div>
          <div class="Topic">
            <a href="#Free_Will_Defined">Free Will Defined</a>
          </div>
          <div class="Topic">
            <a href="#Why_No_Free_Will">Why There Is No Free Will</a>
          </div>
          <div class="Topic">
            <a href="#Determinism">Determinism</a>
          </div>
          <div class="Topic">
            <a href="#Causal_Determinism">Causal Determinism</a>
          </div>          
          <div class="Topic">
            <a href="#Quantum_Chaos">Quantum Mechanics, Chaos, and Stochastic Determinism</a>
          </div>
          <div class="Topic">
            <a href="#Autonomy">Autonomy</a>
          </div>
          <div class="Topic">
            <a href="#Moral_Obligation">Moral Obligation</a>
          </div>
          <div class="Topic">
            <a href="#Moral_Responsibility">Moral Responsibility</a>
          </div>
                    <div class="Topic">
            <a href="#Lens">The Lens of Causation</a>
          </div>
          <div class="Topic">
            <a href="#Counterarguments">The Counterarguments (And Why They Don't Work)</a>
          </div>
          <div class="Topic">
            <a href="#Origins">The Origins of Afreeism</a>
          </div>
        </div>
        <div class="MainTextTopics">
          <What_Is_Afreeism />
          <Free_Will_Defined />
          <Why_No_Free_Will />
          <Determinism />
          <Causal_Determinism />
          <Quantum_Chaos />
          <Autonomy />
          <Moral_Obligation />
          <Moral_Responsibility />
          <Lens />
          <Counterarguments />
          <Origins />
          <Determinism_Types />
          <!-- -------------------------------------------------- -->
        </div>
      </div>
      <div class="RSidebar" style="padding:20px;">
        <div style="margin:10px; padding:20px; background-color:white;">
          <routerLink :to="{name: 'JoinUs'}">JoinUs</routerLink>
        </div>
        <div style="margin:10px; padding:20px; background-color:white;">
          <routerLink :to="{name: 'Newsletter'}">Newsletter</routerLink>
        </div>
        <div style="margin:10px; padding:20px; background-color:white;">
          <routerLink :to="{name: 'Blog'}">Blog</routerLink>
        </div>
      </div>
      <div class="Bottom">
        <BottomMenuCode />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LogoCode from "@/views/LogoCode.vue";
import BottomMenuCode from "@/views/BottomMenuCode.vue";
import TopMenCode from "@/views/TopMenCode.vue";
import What_Is_Afreeism from "@/views/Topics/Basics/What_Is_Afreeism.vue";
import Free_Will_Defined from "@/views/Topics/Basics/Free_Will_Defined.vue";
import Why_No_Free_Will from "@/views/Topics/Basics/Why_No_Free_Will.vue";
import Causal_Determinism from "@/views/Topics/Basics/Causal_Determinism.vue";
import Determinism from "@/views/Topics/Basics/Determinism.vue";
import Quantum_Chaos from "@/views/Topics/Basics/Quantum_Chaos.vue";
import Autonomy from "@/views/Topics/Basics/Autonomy.vue";
import Moral_Obligation from "@/views/Topics/Basics/Moral_Obligation.vue";
import Moral_Responsibility from "@/views/Topics/Basics/Moral_Responsibility.vue";
import Lens from "@/views/Topics/Basics/Lens.vue";
import Counterarguments from "@/views/Topics/Basics/Counterarguments.vue";
import Origins from "@/views/Topics/Basics/Origins.vue";
export default {
  name: "Home",
  components: {
    TopMenCode,
    LogoCode,
    BottomMenuCode,
    What_Is_Afreeism,
    Free_Will_Defined,
    Why_No_Free_Will,
    Causal_Determinism,
    Determinism,
    Quantum_Chaos,
    Autonomy,
    Moral_Obligation,
    Moral_Responsibility,
    Lens,
    Counterarguments,
    Origins,
  }
};
</script>
<style scoped>
p {
  text-align: left;
  color: #000000;
}
</style>
