<template>
  <v-container grid-list-xs>
    <v-layout>
      <v-flex>

    <p>여기는 메인페이지</p>

    {{ JSON.stringify($store.state.claims, null, 2) }}
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      arras: [1, 2, 3, 4, 'www', 'xxxxx']
    }
  }
}
</script>
