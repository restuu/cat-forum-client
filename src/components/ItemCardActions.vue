<template>
  <v-card-actions class="py-1">
    <v-layout justify-space-between>
      <v-flex xs2>
        <v-btn small round flat icon @click="save">
          save
        </v-btn>
      </v-flex>

      <v-flex xs2>
        <a @click="like">
          <v-icon color="">favorite_border</v-icon>
        </a>
      </v-flex>
    </v-layout>
  </v-card-actions>
</template>

<script>
export default {
  methods: {
    like () {

    },

    save () {

    }
  }
}
</script>

<style>

</style>
