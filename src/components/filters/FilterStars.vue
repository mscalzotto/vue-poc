<template lang="pug">
  .stars-filter.filter-box
    collapse( :selected="true")
      .filter-title-container(slot="collapse-header")
        a.title
          i.fa.fa-star(aria-hidden="true")
          span  Estrellas
      .stars-container(slot="collapse-body")
        ul(v-on:click="applyFilter")
          li
            label(for="all-stars")
              input#all.all-stars(type="checkbox" v-model="starsChecks.all")
              span.stars-text
              strong Todas las estrellas (12)
          li
            label(for="five-stars")
              input.all#five-stars(type="checkbox" v-model="starsChecks['5']")
              span.stars-text
                i.fa.fa-star.yellow(aria-hidden="true")
                i.fa.fa-star.yellow(aria-hidden="true")
                i.fa.fa-star.yellow(aria-hidden="true")
                i.fa.fa-star.yellow(aria-hidden="true")
                i.fa.fa-star.yellow(aria-hidden="true")
          li
            label(for="four-stars")
              input.all#four-stars(type="checkbox" v-model="starsChecks['4']")
              span.stars-text
                i.fa.fa-star.yellow(aria-hidden="true")
                i.fa.fa-star.yellow(aria-hidden="true")
                i.fa.fa-star.yellow(aria-hidden="true")
                i.fa.fa-star.yellow(aria-hidden="true")
          li
            label(for="three-stars")
              input.all#three-stars(type="checkbox" v-model="starsChecks['3']")
              span.stars-text
                i.fa.fa-star.yellow(aria-hidden="true")
                i.fa.fa-star.yellow(aria-hidden="true")
                i.fa.fa-star.yellow(aria-hidden="true")
          li
            label(for="two-stars")
              input.all#two-stars(type="checkbox" v-model="starsChecks['2']")
              span.stars-text
                i.fa.fa-star.yellow(aria-hidden="true")
                i.fa.fa-star.yellow(aria-hidden="true")
          li
            label(for="one-stars")
              input.all#one-stars(type="checkbox" v-model="starsChecks['1']")
              span.stars-text
                i.fa.fa-star.yellow(aria-hidden="true")
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Collapse from '@/components/commons/Collapse'

export default {
  name: 'filter-stars',
  data () {
    return {
      starsChecks: {
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        'all': false
      }
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
      let stars = []
      Object.keys(this.starsChecks)
      .forEach((key) => {
        if (this.starsChecks[key]) {
          stars.push(parseInt(key))
        }
      })
      this.updateFilterStars({stars})
      this.loadHotels({filters: this.filters})
    },
    ...mapActions([
      'updateFilterStars',
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
