<template lang="pug">
  .service-filter.filter-box
    collapse( :selected="true")
      .filter-title-container(slot="collapse-header")
        a.title
          i.fa.fa-tag(aria-hidden="true")
          span Servicios
      .slider(slot="collapse-body")
        ul
          li
            label(for="all-service")
              input#all-service.all(type="checkbox")
              span.service-text Todos los servicios
          li
            label(for="internet-service")
              input#internet-service.all(type="checkbox")
              span.service-text
                i.fa.fa-wifi(aria-hidden="true")
                span  Internet
          li
            label(for="air-service")
              input#air-service.all(type="checkbox")
              span.service-text
                i.fa.fa-snowflake-o(aria-hidden="true")
                span  Aire acondicionado
          li
            label(for="bar-service")
              input#bar-service.all(type="checkbox")
              span.service-text
                i.fa.fa-glass(aria-hidden="true")
                span  Bar

          li
            a.view-more Ver más
              i.fa.fa-caret-down(aria-hidden="true")
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Collapse from '@/components/commons/Collapse'

export default {
  name: 'filter-service',
  components: {
    Collapse
  },
  computed: {
    ...mapState([
      'filters'
    ])
  },
  methods: {
    applyFilter: function () {
      this.updateFilterName({name: this.name})
      this.loadHotels({filters: this.filters})
    },
    ...mapActions([
      'updateFilterName',
      'loadHotels'
    ])
  }

}
</script>

<style>

</style>
