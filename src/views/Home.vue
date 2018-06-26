<template>
  <v-container grid-list-sm>

    <search-form
      :searchItems="['image', 'article']"
    ></search-form>

    <item-group-vertical :items="items"></item-group-vertical>

  </v-container>
</template>

<script>
import data from '../dummy.json';
import ItemGroupVertical from '@/components/ItemGroupVertical';
import SearchForm from '@/components/SearchForm';

export default {
  components: {
    ItemGroupVertical,
    SearchForm
  },

  data () {
    return {
      items: [],
    }
  },

  methods: {
    fetchData () {
      this.items = data
    }
  },

  async created () {
    await this.fetchData()
  }
}
</script>
