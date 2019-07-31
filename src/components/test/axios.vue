<template>
    <v-container grid-list-md fluid>
        <v-layout row wrap>
            <v-flex xs12>
                <v-list-item-title>
                    hello
                </v-list-item-title>
            </v-flex>
            <v-flex xs3>
                <v-card>
                    <v-card-title primary-title>
                        create
                    </v-card-title>
                    <v-card-text>
                        <v-textarea
                            v-model='textCreate'
                            rows="10"
                        >
                        </v-textarea>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn depressed color="primary" @click="create">
                            submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs3>
                <v-card>
                    <v-card-title primary-title>
                        read
                    </v-card-title>
                    <v-card-text>
                        <v-textarea
                            v-model='textRead'
                            rows="10"
                        >
                        </v-textarea>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn depressed color="primary" @click="read">
                            submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs3>
                <v-card>
                    <v-card-title primary-title>
                        update
                    </v-card-title>
                    <v-card-text>
                        <v-textarea
                            v-model='textUpdate'
                            rows="10"
                        >
                        </v-textarea>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn depressed color="primary" @click="update">
                            submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex><v-flex xs3>
                <v-card>
                    <v-card-title primary-title>
                        delete
                    </v-card-title>
                    <v-card-text>
                        <v-textarea
                            v-model='textDelete'
                            rows="10"
                        >
                        </v-textarea>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn depressed color="primary" @click="del">
                            submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      textCreate: '',
      textRead: '',
      textUpdate: '',
      textDelete: ''
    }
  },
  methods: {
    async create () {
      const r = await this.$axios.post('test')

      this.textCreate = r.data
      //   this.$toasted.show('hello billo')
      this.$toasted.global.error('잘못했어요')
    },
    read () {
      this.$axios.get('test')
        .then(r => {
          this.textRead = r.data
        })
        .catch(e => console.log(e))
    },
    update (id) {
      this.$axios.put('test/11111')
        .then(r => {
          this.textUpdate = r.data
        })
        .catch(e => console.log(e))
    },
    del (id) {
      this.$axios.delete('test/22222')
        .then(r => {
          this.textDelete = r.data
        })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style>

</style>
