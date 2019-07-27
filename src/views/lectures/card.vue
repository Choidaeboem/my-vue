<template>
<v-layout class="ma-4" row wrap>
<v-flex xs16 sm6 offset-sm3>
<v-card >
<v-card-title>
title
</v-card-title>
<v-divider></v-divider>
<v-card-text>
{{card_text}}
</v-card-text>
<v-card-actions >
<v-spacer></v-spacer>
<v-btn depressed>
explorer
</v-btn>
<v-btn depressed>
share
</v-btn>
</v-card-actions>
</v-card>
</v-flex>
</v-layout>
</template>

<script>
export default {
  data () {
    return {
      card_text: 'hello my name is choi'
    }
  }
}
</script>

<style>

</style>
