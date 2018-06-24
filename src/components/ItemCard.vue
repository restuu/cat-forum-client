<template>
  <v-flex>

    <v-card>
      <v-card-media>

        <v-flex fill-height>
          <img :src="item.url" alt="">
        </v-flex>
          
      </v-card-media>
    </v-card>

  </v-flex>
</template>

<script>
export default {
  props: [ 'item' ]
}
</script>

<style>

</style>
