<template>
    <v-container grid-list-md flat>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 xl12 v-for="i in 9" :key="i">
                <v-card color="red">
                    <v-card-title primary-title>
                        title
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quis obcaecati officia repudiandae dolore recusandae numquam, atque explicabo tempora cumque libero possimus. Quo aperiam eveniet fuga, dolor tenetur excepturi? Temporibus?
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
