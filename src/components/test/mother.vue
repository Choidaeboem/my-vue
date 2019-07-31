<template>
    <v-card>
        <my-son name="aaa" @help="listen"></my-son>
        <my-son name="bbb"></my-son>
        <my-son name="ccc"></my-son>
        <my-son name="eee"></my-son>
        <my-doughter></my-doughter>
        <v-card-text>
          <v-alert
            :value="true"
            v-model="call"
          >
          </v-alert>
        </v-card-text>
    </v-card>
</template>

<script>
import MySon from '@/components/mySon'
import MyDoughter from '@/components/myDoughter'
export default {
  components: {
    MySon, MyDoughter
  },
  data () {
    return {
      call: false
    }
  },
  methods: {
    listen () {
      this.call = true
    }
  }
}
</script>

<style>

</style>
