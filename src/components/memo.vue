<template>
    <div>
        memo
        <div>
            {{mid}}
        </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      mid: ''
    }
  },
  watch: {
    '$route' () {
      this.fetchData()
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      setTimeout(() => {
        this.mid = this.$route.params.mid
      }, 500)
    }
  }
}
</script>

<style>

</style>
