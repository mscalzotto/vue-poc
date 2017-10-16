<template lang="pug">
  .mealplan-slider.filter-box
    collapse( :selected="true")
      .filter-title-container(slot="collapse-header")
        a.title
          i.fa.fa-cutlery(aria-hidden="true")
          span  Regímenes
      .mealplan-container(slot="collapse-body")
        ul
          li
            label(for="all-mealplan")
              input.class#all-mealplan(type="checkbox")
              span.mealplan-text Todos los regímenes
          li
            label(for="bed-breakfast-mealplan")
              input.all#bed-breakfast-mealplan(type="checkbox")
              span.mealplan-text Cama y desayuno
          li
            label(for="only-room-mealplan")
              input.all#only-room-mealplan(type="checkbox")
              span.mealplan-text Sólo la habitación
          li
            label(for="breakfast-full-mealplan")
              input.all#breakfast-full-mealplan(type="checkbox")
              span.mealplan-text Desayuno completo
          li
            label(for="breakfast-mealplan")
              input.all#breakfast-mealplan(type="checkbox")
              span.mealplan-text Desayuno
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Collapse from '@/components/commons/Collapse'

export default {
  name: 'filter-mealplan',
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
