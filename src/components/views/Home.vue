<template lang="pug">
  #results
    research
    breadcrumb
    maps
    filters
    results
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Maps from '@/components/Maps'
import Breadcrumb from '@/components/Breadcrumb'
import Filters from '@/components/Filters'
import Research from '@/components/Research'
import Results from '@/components/Results'
export default {
  name: 'home',
  components: {
    Results,
    Maps,
    Filters,
    Research,
    Breadcrumb
  },
  computed: {
    ...mapState([
      'fetchingData',
      'error',
      'filters',
      'results',
      'pagination'
    ])
  },

  methods: {
    ...mapActions([
      'loadHotels'
    ])
  },

  created () {
    this.loadHotels({filters: this.filters})
  }
}
</script>

<style lang="scss" scoped>
</style>
