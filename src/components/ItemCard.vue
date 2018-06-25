<template>
  <v-flex>

    <v-card>
      <v-card-media>

        <div style="max-height: 200px">
          <img :src="item.url" alt="" style="overflow: hidden">
        </div>
          
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
