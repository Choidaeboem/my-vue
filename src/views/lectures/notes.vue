<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs5>
                <v-text-field
                    v-model="title"
                    label="title"
                    id="id"
                ></v-text-field>
            </v-flex>
            <v-flex xs5>
                <v-text-field
                    v-model="content"
                    label="content"
                    id="id"
                ></v-text-field>
            </v-flex>
            <v-flex xs2>
                <v-btn @click="post">post</v-btn>
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
            :key="item.name"
            xs12
            sm6
            md4
            lg3
          >
            <v-card>
              <v-card-title><h4>{{ item.title }}</h4></v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                  {{item.content}}
              </v-card-text>
              <v-card-text>
                  {{item.id}}
              </v-card-text>
              <v-card-actions>
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
    id: ''
  }),
  mounted () {
    try {
      this.get()
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    async post () {
      const r = await this.$firebase.firestore().collection('notes').add({
        title: this.title,
        content: this.content
      })
      console.log(r)
      await this.get()
      this.title = ''
      this.content = ''
    },
    async get () {
      const snapshot = await this.$firebase.firestore().collection('notes').get()
      this.items = []
      snapshot.forEach(v => {
        console.log(v.id)
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
