<template>
  <v-container grid-list-sm>
    <v-layout wrap class="mt-3">

      <!-- <v-flex v-for="item in items" :key="item.id" xs12 md2>
        
        <item-card :item="item" />

      </v-flex> -->

      <v-layout v-if="$vuetify.breakpoint.mdAndUp">
        <v-flex xs2>
          <v-layout column> 
            <item-card v-for="item in groupOne" :key="item.id" :item="item"></item-card>
          </v-layout>
        </v-flex>
        <v-flex xs2>
          <v-layout column> 
            <item-card v-for="item in groupTwo" :key="item.id" :item="item"></item-card>
          </v-layout>
        </v-flex>
        <v-flex xs2>
          <v-layout column> 
            <item-card v-for="item in groupThree" :key="item.id" :item="item"></item-card>
          </v-layout>
        </v-flex>
        <v-flex xs2>
          <v-layout column> 
            <item-card v-for="item in groupFour" :key="item.id" :item="item"></item-card>
          </v-layout>
        </v-flex>
        <v-flex xs2>
          <v-layout column> 
            <item-card v-for="item in groupFive" :key="item.id" :item="item"></item-card>
          </v-layout>
        </v-flex>
        <v-flex xs2>
          <v-layout column> 
            <item-card v-for="item in groupSix" :key="item.id" :item="item"></item-card>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-layout v-else>
        <v-flex xs6>
          <v-layout column> 
            <item-card v-for="item in groupOne" :key="item.id" :item="item"></item-card>
          </v-layout>
        </v-flex>
        <v-flex xs6>
          <v-layout column> 
            <item-card v-for="item in groupTwo" :key="item.id" :item="item"></item-card>
          </v-layout>
        </v-flex>
      </v-layout>

    </v-layout>
  </v-container>
</template>

<script>
import data from '../dummy.json';
import ItemCard from '@/components/ItemCard';

export default {
  data () {
    return {
      items: [],
      groupOne: [],
      groupTwo: [],
      groupThree: [],
      groupFour: [],
      groupFive: [],
      groupSix: [],
      isListening: false
    }
  },

  components: {
    ItemCard
  },

  methods: {
    fetchData () {
      this.items = data
    },

    groupItems () {
      let counter = 1
      this.items.forEach(item => {
        switch (counter) {
          case 1:
            this.groupOne.push(item)
            break;
          case 2:
            this.groupTwo.push(item)
            break;
          case 3:
            this.groupThree.push(item)
            break;
          case 4:
            this.groupFour.push(item)
            break;
          case 5:
            this.groupFive.push(item)
            break;
          case 6:
            this.groupSix.push(item)
            break
        }

        counter++

        if (this.$vuetify.breakpoint.mdAndUp) {
          if (counter > 6) {
            counter = 1
          }
        } else {
          if (counter > 2) {
            counter = 1
          }
        }
      });
    },

    onResize () {
      this.groupOne = []
      this.groupTwo = []
      this.groupThree = []
      this.groupFour = []
      this.groupFive = []
      this.groupSix = []

      this.groupItems()
    }
  },

  async created () {
    await this.fetchData()
    await this.groupItems()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  },

  mounted () {
    window.addEventListener('resize', this.onResize)
  }
}
</script>
