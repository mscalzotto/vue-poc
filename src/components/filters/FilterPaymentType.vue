<template lang="pug">
  .payment-type.filter-box
    collapse( :selected="true")
      .filter-title-container(slot="collapse-header")
        a.title
          i.fa.fa-money(aria-hidden="true")
          span Tipo de pago
      .slider(slot="collapse-body")
        ul
          li
            label(for="all-payment")
              input.all#all-payment(type="checkbox")
              span.payment-text Todos los métodos de pago
          li
            label(for="destiny-payment")
              input.all#destiny-payment(type="checkbox")
              span.payment-text Pagá en destino
          li
            label(for="quotas-payment")
              input.all#quotas-payment(type="checkbox")
              span.payment-text Pagá en cuotas
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Collapse from '@/components/commons/Collapse'

export default {
  name: 'filter-payment-type',
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
