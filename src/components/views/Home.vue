<template >
<section class="hotel-container">
  <breadcrumb></breadcrumb>
  <research></research>
  <filters></filters>
  <ul class="hotels">
    <results></results>
  </ul>
</section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Filters from '@/components/Filters'
import Research from '@/components/Research'
import Results from '@/components/Results'
export default {
  name: 'home',
  components: {
    Results,
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

<style lang="scss">
.hotel-container {
  color: rgb(68, 68, 68);
  max-width: 1344px;
  margin: 0 auto;
}
</style>
