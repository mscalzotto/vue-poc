<template>
  <div id="search-results">
    <filters></filters>
    <cluster ></cluster>
  </div>
</template>

<script>
  import Cluster from './Cluster'

  export default {
    name: 'Results',
    template: '<Results/>',
    components: { Cluster }
  }
</script>

<style scoped>

</style>