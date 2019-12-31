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
        <span>Join Us!</span>
      </div>
      <TopMenCode />
      <div class="Main">
        <p>
          Joining just gets you put on our email mailing list. If you wish to be put on our mailing
          please give us the information below.  This information will not be shared with anyone.
        </p>
        <div style="margin-left:20px;">
        <form @submit.prevent >
          <label>  Name:  </label>
          <input type="text" v-model="name" style="width:250px;" />
          <label>  Email:  </label>
          <input type="email" v-model="email" /><span>&nbsp;&nbsp;&nbsp;</span>
          <button @click="addUser">Join</button>
        </form>
        </div>
      </div>
      <div class="RSidebar" style="padding:20px;">
        <div style="margin:10px; padding:20px; background-color:white;">
          <routerLink :to="{name: 'JoinUs'}">Join Us</routerLink>
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
import LogoCode from '@/views/LogoCode.vue'
import BottomMenuCode from '@/views/BottomMenuCode.vue'
import TopMenCode from '@/views/TopMenCode.vue'
import db from '@/firebase/init';
export default {
  name: 'JoinUs',
  components:{
    TopMenCode,LogoCode,BottomMenuCode,},
  data() {
    return {
      name: null,
      email: null,
      isValid: false,
    };
  },
  methods: {
    async addUser() {
      this.validateForm();
      if (this.isValid) {
        console.log('Name:', this.name, 'Email:', this.email);
        const user = {};
        user.createdAt = Date.parse(new Date());
        user.updatedAt = Date.parse(new Date());
        user.name = this.name;
        user.email = this.email;
        try {
          await db.collection('users').add(user);
          alert(
            `Hey ${this.name}! You've been added to the Afreeist Society's newsletter will be recieving content at ${this.email}.`
          );
          this.name = null;
          this.email = null;
        } catch (error) {
          console.error('Error creating user doc:', error.message);
        }
      }
    },
    validateForm() {
      if (this.name && this.email) {
        this.isValid = true;
      } else {
        alert('Please fill all fields!');
      }
    },
  },
};
</script>
<style scoped>
p {
  text-align: left;
  color: #000000;
}
</style>
