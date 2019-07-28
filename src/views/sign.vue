<template>
    <v-card>
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
            <v-btn color="primary" @click="signInWithGoogle">
                <v-icon>mdi-google</v-icon>
                구글로그인
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="signInEmail">
                <v-icon>mdi-email</v-icon>
                로그인
            </v-btn>

        </v-card-actions>
    </v-card>
</template>

<script>

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async signInWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      const r = await this.$firebase.auth().signInWithPopup(provider)
      console.log(r)
    },

    async signInEmail () {
      const r = await this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      console.log(r)
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style>

</style>
