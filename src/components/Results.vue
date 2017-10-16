<template>
  <ul id="search-results">
    <cluster :hotel="hotel" v-for='(hotel, index) in results' :key='index'></cluster>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import Cluster from './Cluster'

export default {
  name: 'Results',
  template: '<Results/>',
  components: { Cluster },
  computed: {
    ...mapState([
      'results'
    ])
  }
}
</script>

<style scoped>

</style>
