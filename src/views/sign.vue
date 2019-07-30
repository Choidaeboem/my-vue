<template>
  <!-- <v-card>
      <v-card-title primary-title>
        로그인
      </v-card-title>
      <v-card-text>
          <v-text-field
          label="email"
          v-model="email"
          >
          </v-text-field>
          <v-text-field
              label="password"
              v-model="password"
              type="password"
          >
      </v-text-field>
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="signInWithGoogle">
              <v-icon>mdi-google</v-icon>
              구글로그인
          </v-btn>
          <v-btn color="primary" @click="signInEmail">
              <v-icon>mdi-email</v-icon>
              로그인
          </v-btn>
          <v-btn color="primary" @click="signOut">
              <v-icon>mdi-logout</v-icon>
              로그아웃
          </v-btn>
      </v-card-actions>
  </v-card> -->
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
import SignIn from '@/components/auth/signIn'
import SignUp from '@/components/auth/signUp'
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
