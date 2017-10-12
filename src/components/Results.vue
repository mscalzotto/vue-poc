<template>
  <div id="search-results">
    <p>Listado de resultados</p>
    <cluster ></cluster>
  </div>
</template>

<script>
  import Cluster from './Cluster'

  export default {
    name: 'Results',
    template: '<Results/>',
    components: { Cluster },
    computed: {
      getHotels () {
        return this.$store.getters.getHotels
      }
    },
    created () {
      this.searchHotels()
    },
    methods: {
      searchHotels () {
        this.$store.dispatch('searchHotels')
      }
    }
  }
</script>

<style scoped>

</style>