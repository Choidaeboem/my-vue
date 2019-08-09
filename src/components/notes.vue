<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card :outlined="true">
              <v-card-text>
                <v-text-field
                    v-model="title"
                    label="일정요약"
                    id="id"
                    :flat="true"
                    :solo="true"
              ></v-text-field>
              <v-textarea
                    v-model="content"
                    label="일정정리"
                    id="id"
                    :flat="true"
                    :solo="true"
              ></v-textarea>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="post" depressed color="#f74741" dark>포스팅</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :footer-props="{ itemsPerPageOptions }"
    >
      <template v-slot:default="props">
        <v-layout wrap>
          <v-flex
            v-for="item in props.items"
            :key="item.id"
            xs12
            sm6
            md4
            lg3
          >
            <v-card :outlined="true">
              <v-card-title><h4>{{ item.title }}</h4></v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                  {{item.content}}
              </v-card-text>
              <v-card-text>
                  {{item.id}}
              </v-card-text>
              <v-card-actions>
                  <router-link :to="`n/${item.id}/m/1`">
                    <v-btn depressed >go Note</v-btn>
                  </router-link>
                  <v-spacer></v-spacer>
                  <v-btn @click="del(item.id)" depressed >삭제</v-btn>
                  <v-btn @click="put(item.id)" depressed color="#f74741" dark>수정</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    itemsPerPageOptions: [4, 8, 12],
    itemsPerPage: 4,
    items: [],
    title: '',
    content: '',
    id: '',
    userId: '',
    bgcolor: '',
    createAt: '',
    updateAt: ''
  }),
  mounted () {
    try {
      this.get()
    } catch (e) {
      console.log(e)
    }
  },
  updated () {
  },
  methods: {
    async post () {
      if (this.title.length <= 2) {
        alert('두글자 이상')
        return
      }
      const r = await this.$firebase.firestore().collection('notes').add({
        title: this.title,
        content: this.content
      })

      await console.log('r ->', r)
      // await this.$router.push(`/n/${r.id}`)

      this.title = ''
      this.content = ''
      this.bgcolor = ''
      this.createAt = ''
      this.updateAt = ''
    },
    async get () {
      const snapshot = await this.$firebase.firestore().collection('notes').get()
      this.items = []
      snapshot.forEach(v => {
        console.log(v)
        const { title, content } = v.data()
        this.items.push({ title, content, id: v.id })
      })
    },
    async put (id) {
      const r = await this.$firebase.firestore().collection('notes').doc(id).set({
        title: this.title,
        content: this.content
      })

      await this.get()
      console.log(r)
    },
    async del (id) {
      const r = await this.$firebase.firestore().collection('notes').doc(id).delete()
      console.log(r)
      await this.get()
    }
  }
}
</script>

<style>

</style>
