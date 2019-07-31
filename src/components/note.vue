<template>
    <div>
        note
        <div>
            {{this.nid}}
        </div>
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

  },
  created () {
    this.nid = this.$route.params.nid
  }
}
</script>

<style>

</style>
