<template>
    <div>
        note
        <div>
            {{nid}}
        </div>
        <router-link :to="`/n/${nid}/m/1`">memo1</router-link>
        <router-link :to="`/n/${nid}/m/2`">memo2</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {
      nid: 0
    }
  },
  methods: {
    fetchData () {
      this.nid = this.$route.params.nid
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style>

</style>
