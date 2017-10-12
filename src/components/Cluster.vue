<template>
  <div id="hotel-cluster">
    {{ hotels }}
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Cluster',
    template: '<Cluster/>',
    computed: mapState(['hotels', 'filters'])
  }
</script>

<style scoped>

</style>