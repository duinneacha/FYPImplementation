<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">

      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        Please {{ tab | titleCase }} your account with Ali Dorgan
      </q-banner>
    </div>
    
    <div class="row q-mb-md">
      <q-input
        label="Email"
        class="col"
        outlined
        stack-label
        v-model="formData.email"
        :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address']"
        lazy-rules
        ref="email"
      />
    </div>
    
    <div class="row q-mb-md">
      <q-input
        label="Password"
        type="password"
        class="col"
        outlined
        stack-label
        v-model="formData.password"
        :rules="[ val => val.length >= 6 || 'Please enter at least 6 characters']"
        lazy-rules
        ref="password"
      />
    </div>

    <div class="row">

      <q-space />

      <q-btn
        color="primary"
        :label="tab"
        type="submit"
      />
    </div>
</form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    submitForm() {
      
      this.$refs.email.validate()
      this.$refs.password.validate()

      if (!this.$refs.email.hasError & !this.$refs.password.hasError) {
        // console.log("Register User");

        if (this.tab == 'login') {
          console.log("loggin the user");
          this.loginUser(this.formData)
        } else {
          console.log("Registerr the user");
          this.registerUser(this.formData)
        }
      } else {
        console.log("Not Registering user at this stage");
      }
    },
    
    
    // let adTest = {
    //   email: this.formData.email,
    //   password: this.formData.password
    // }

    // if (this.formData.email == "admin@admin.com") {
    //   console.log("admin@admin.com")
    //   this.$router.push('/admin')
    // } else {
    //   this.$router.push('/client')
    // }

    
    isValidEmailAddress(email) {
      
      // This validation routing was picked up on StackOverflow at the following link:- https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      // This author would like to thank and 
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
      return re.test(String(email).toLowerCase());

    }
  },
  filters: {
    titleCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
}
</script>

<style>

</style>