<template lang="pug">
  aside.left-sidebar-wrapper
    maps
    .filters-wrapper
      .filters.title.filter-box
        h2.title Filtrar
      filter-name
      filter-price
      filter-stars
      filter-mealplan
      filter-payment-type
      filter-service
</template>

<script>
import Maps from '@/components/filters/Maps'
import FilterName from '@/components/filters/FilterName'
import FilterStars from '@/components/filters/FilterStars'
import FilterPrice from '@/components/filters/FilterPrice'
import FilterMealplan from '@/components/filters/FilterMealplan'
import FilterPaymentType from '@/components/filters/FilterPaymentType'
import FilterService from '@/components/filters/FilterService'

export default {
  name: 'Filters',
  template: '<Filters/>',
  components: {
    Maps,
    FilterName,
    FilterStars,
    FilterPrice,
    FilterMealplan,
    FilterPaymentType,
    FilterService
  }
}
</script>

<style>
.yellow {
  color: #fdba12;
}

.hotel-container .left-sidebar-wrapper {
  display: inline-block;
  margin: 11px 0 15px 0;
  vertical-align: top;
  width: 25%;
}

.hotel-container .left-sidebar-wrapper .filter-box {
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(119, 119, 199, 0.3);
  font-family: 'roboto_regular';
  margin: 5px 0;
}

.hotel-container .left-sidebar-wrapper .filter-box .title span {
   margin-left: 5px;
}
.hotel-container .left-sidebar-wrapper .filter-box a {
  color: rgb(21, 122, 177);
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  font-family: 'roboto_regular', sans-serif;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 15px;
  width: 70%;
}

.hotel-container .left-sidebar-wrapper .filter-box a.close-filter-title {
  font-size: 20px;
  padding-right: 0;
  text-align: right;
  width: 25%;
}

.hotel-container .left-sidebar-wrapper .filter-box a:hover {
  color: #1a99df;
}

.hotel-container .left-sidebar-wrapper .filter-box ul {
  font-size: 13px;
  margin: 0;
  padding: 0 10px 10px 10px;
}

.hotel-container .left-sidebar-wrapper .filter-box ul li {
  margin: 10px 0;
}

.hotel-container .left-sidebar-wrapper .filter-box ul li label {
  padding-left: 5px;
}

.hotel-container .left-sidebar-wrapper .filter-box ul li label input,
.hotel-container .left-sidebar-wrapper .filter-box ul li label span {
  display: inline-block;
}

.hotel-container .left-sidebar-wrapper .filter-box ul li label span {
  vertical-align: top;
}



.hotel-container .left-sidebar-wrapper .filters-wrapper h2 {
  background-color: #fff;
  font-family: roboto_regular;
  font-size: 16px;
  margin: 0;
  padding: 10px;
}




</style>
