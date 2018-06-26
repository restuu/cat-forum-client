<template>
  <v-flex xs12>
    <v-card 
      v-for="item in items" 
      :key="item.id" 
      class="mb-2" 
      exact 
      to="/">
      <v-card-title>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.content.slice(0, 80) }}...</p>

        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style>

</style>
