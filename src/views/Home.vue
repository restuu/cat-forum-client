<template>
  <v-container grid-list-sm>
    <v-layout wrap class="mt-3">

      <v-flex v-for="item in items" :key="item.id" xs12 md2>
        
        <item-card :item="item" />

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import data from '../dummy.json';
import ItemCard from '@/components/ItemCard';

export default {
  data () {
    return {
      items: []
    }
  },

  components: {
    ItemCard
  },

  created () {
    this.items = data
  }
}
</script>
