<template>
  <v-layout>
    <v-flex xs12>

      <v-card-media 
        height="100px" 
        src="http://www.wculife.org/wp-content/uploads/2013/12/WCU-WebsiteBanner2-2-Background2.png" 
        >

        <v-layout justify-center align-center>

          <v-flex xs12 md4>
            <v-text-field
              v-model="itemName"
              label="Item Name"
              single-line
              >
            </v-text-field>
          </v-flex>

          <v-flex xs1>
            <v-select
              :items="searchItems"
              v-model="selected"
              label="Option"       
            >
            </v-select>
          </v-flex>
        </v-layout>

      </v-card-media>

    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [ 'searchItems' ],

  data () {
    return {
      selected: null,
      itemName: ''
    }
  }
}
</script>

<style>

</style>
