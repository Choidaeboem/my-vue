<template>
  <v-container grid-list-md>
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 sm6 mt-10 class="auth-box">
        <sign-in v-if="type"></sign-in>
        <sign-up v-else></sign-up>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SignIn from './auth/signIn'
import SignUp from './auth/signUp'
export default {
  components: {
    SignIn,
    SignUp
  },
  data () {
    return {
      type: true,
      email: '',
      password: ''
    }
  },
  methods: {
    async signInEmail () {
      await this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    },

    async signOut () {
      await this.$firebase.auth().signOut()
    }
  }
}
</script>

<style>
/* .v-content {
  background:url('https://picsum.photos/1024/768') no-repeat center;
  background-size:cover;
}

.auth-box{
  background-color: #fff;
} */
</style>
