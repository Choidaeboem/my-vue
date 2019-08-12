<template>
    <v-card>
        <!-- <v-card-title primary-title>
            {{search}}
            <v-combobox
              v-model="search"
              :items="emails"
              chip
              label="이메일 입력"
              :loading="loadingSearch"
              @update:search-input="searchEmails"
            ></v-combobox>
        </v-card-title> -->
        <v-toolbar
    dark
    color="primary"
  >
    <v-toolbar-title>회원 관리</v-toolbar-title>
        <v-autocomplete
          v-model="email"
          :loading="loadingSearch"
          :items="emails"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="이메일을 입력하세요"
          solo-inverted
          clearable

        ></v-autocomplete>
        </v-toolbar>
        <v-card-text>
          <v-data-table
                :headers="headers"
                :items="items"
                :items-per-page="5"
                :options.sync="options"
                :server-items-length="totalCount"
                :loading="loading"
                must-sort
                class="elevation-1"
              ></v-data-table>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="list">get list</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      headers: [
        {
          text: 'uid',
          sortable: false,
          value: 'uid'
        },
        // uid, email, displayName, emailVerified, photoURL, disabled, level
        { text: 'email', value: 'email' },
        { text: 'displayName', value: 'displayName' },
        { text: 'photoURL', value: 'photoURL' },
        { text: 'level', value: 'level' }
      ],
      items: [],
      totalCount: 0,
      loading: false,
      options: {
        sortBy: ['email'],
        sortDesc: [false]
      },
      search: '',
      emails: [],
      loadingSearch: false,
      select: '',
      email: ''
    }
  },
  watch: {
    options: {
      handler () {
        this.list()
      },
      deep: true
    },
    search (val) {
      val && val !== this.select && this.searchEmails(val)
    }
  },
  methods: {
    async list () {
      this.loading = true
      const r = await this.$axios.get('/admin/users', {
        params: {
          offset: this.options.page > 0 ? (this.options.page - 1) * this.options.itemsPerPage : 0,
          limit: this.options.itemsPerPage,
          order: this.options.sortBy[0],
          sort: this.options.sortDesc[0] ? 'desc' : 'asc',
          search: this.search
        }
      })
      console.log(this.options)
      this.totalCount = r.data.totalCount
      this.items = r.data.items
      this.loading = false
      console.log(this.options)
    },
    // async searchEmails () {
    //   this.loadingSearch = true
    //   const { data } = await this.$axios.get('/admin/search')
    //   this.email = data

    //   this.loadingSearch = false
    // },
    searchEmails: _.debounce(
      function (val) {
        this.loadingSearch = true

        this.$axios.get('/admin/search', {
          params: { search: this.search }
        })
          .then(({ data }) => {
            this.emails = data
            // this.list()
          }).catch(err => {
            this.$toasted.global.error(err.message)
          }).finally(() => {
            this.loadingSearch = false
            this.list()
          })
      },
      500
    )
  }
}
</script>

<style>

</style>
