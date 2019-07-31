<template>
<div>
<v-btn @click="set">
    text
</v-btn>
</div>
</template>

<script>
export default {
  methods: {
    set () {
      this.$store.commit('setTitle', '변했니?')
    }
  }
}
</script>

<style>

</style>
