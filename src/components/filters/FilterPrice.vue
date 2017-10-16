<template lang="pug">
  .price-slider.filter-box
    collapse( :selected="true")
      .filter-title-container(slot="collapse-header")
        a.title
          i.fa.fa-dollar(aria-hidden="true")
          span  Precio por noche
      .slider-range(slot="collapse-body")
          vue-slider(v-model="value")

</template>
<script>
import { mapState, mapActions } from 'vuex'
import Collapse from '@/components/commons/Collapse'
import vueSlider from 'vue-slider-component'
export default {
  name: 'filter-name',
  data () {
    return {
      value: [
        0,
        100
      ],
      width: '50%',
      height: 8,
      dotSize: 16,
      min: 0,
      max: 500,
      disabled: false,
      show: true,
      tooltip: 'always',
      formatter: '',
      bgStyle: {
        'backgroundColor': '#fff',
        'boxShadow': 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
      },
      tooltipStyle: {
        'backgroundColor': '#666',
        'borderColor': '#666'
      },
      processStyle: {
        'backgroundColor': '#999'
      }
    }
  },
  components: {
    Collapse,
    vueSlider
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
.hotel-container .left-sidebar-wrapper .price-slider .slider-range {
  margin-top: 30px;
  margin-bottom: 20px;
}
.hotel-container .left-sidebar-wrapper .price-slider #slider-range {
	margin: 16px auto;
  width: 95%;
}

.hotel-container .left-sidebar-wrapper .price-slider .ui-slider-range {
	background: #777;
}

.hotel-container .left-sidebar-wrapper .price-slider #slider-range span {
  height: 24px;
  border-radius: 24px;
  width: 12px;
  top: -7px;
}

.hotel-container .left-sidebar-wrapper .price-slider .price-range .price-b {
  display: inline-block;
  width: 50%;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
}

.hotel-container .left-sidebar-wrapper .price-slider .price-range .price-a {
  display: inline-block;
  width: 48%;
  text-align: right;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
}
</style>
