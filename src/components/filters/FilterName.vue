<template lang="pug">
  .busqueda-nombre.filter-box
    collapse( :selected="true")
      .filter-title-container(slot="collapse-header")
        a.title
          i.fa.fa-search(aria-hidden="true")
          span  Nombre del Hotel
      div(slot="collapse-body")
        input(type="text" v-model="name" placeholder="Ingrese el nombre del hotel")
        input(type="submit" value="Aceptar" v-on:click="applyFilter")
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Collapse from '@/components/commons/Collapse'

export default {
  name: 'filter-name',
  data () {
    return {
      name: ''
    }
  },
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
.hotel-container .left-sidebar-wrapper .busqueda-nombre input[type="text"] {
  border: 1px solid #CCC;
  border-top-color: #777;
  color: #555;
  display: inline-block;
  font-size: 14px;
  height: 32px;
  margin: 10px 10px 0 15px;
  padding: 0 8px;
  width: 184px;
}

.hotel-container .left-sidebar-wrapper .busqueda-nombre input[type="submit"] {
  background-color: #002C77;
  border: 0 none;
  border-radius: 2px;
  box-shadow: 0 -2px 0 #00163C inset;
  cursor: pointer;
  color: #fff;
  display: inline-block;
  font-size: 16px;
  height: 36px;
  margin: 10px 2px;
  text-align: center;
}

.hotel-container .left-sidebar-wrapper .busqueda-nombre input[type="submit"]:hover {
  background-color: #335692;
}
</style>
