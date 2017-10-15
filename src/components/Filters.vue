<template lang="pug">
  aside.left-sidebar-wrapper
    .map-wrapper.filter-box
      img(src="./../assets/result-map.png")
      a.map-hotels Ver hoteles en el mapa
    .filters-wrapper
      .filters.title.filter-box
        h2.title Filtrar
      <!-- Filtro por nombre -->
      .busqueda-nombre.filter-box
        .filter-title-container
          a.title
            i.fa.fa-search(aria-hidden="true")
            span  Nombre del Hotel
          a.close-filter-title
            i.fa.fa-caret-up(aria-hidden="true")
        input(type="text" placeholder="Ingrese el nombre del hotel")
        input(type="submit" value="Aceptar")

      <!-- Slider -->
      .price-slider.filter-box
        .filter-title-container
          a.title $ Precio por noche
          a.close-filter-title
            i.fa.fa-caret-up(aria-hidden="true")
        .slider-range
          vue-slider(v-model="value")

      <!-- Filtro por estrellas -->
      .stars-filter.filter-box
        .filter-title-container
          a.title
            i.fa.fa-star(aria-hidden="true")
            span  Estrellas
          a.close-filter-title
            i.fa.fa-caret-up(aria-hidden="true")
        .stars-container
          ul
            li
              label(for="all-stars")
                input#all.all-stars(type="checkbox" checked="checked")
                span.stars-text
                strong Todas las estrellas (12)
            li
              label(for="five-stars")
                input.all#five-stars(type="checkbox")
                span.stars-text
                  i.fa.fa-star.yellow(aria-hidden="true")
                  i.fa.fa-star.yellow(aria-hidden="true")
                  i.fa.fa-star.yellow(aria-hidden="true")
                  i.fa.fa-star.yellow(aria-hidden="true")
                  i.fa.fa-star.yellow(aria-hidden="true")
            li
              label(for="four-stars")
                input.all#four-stars(type="checkbox")
                span.stars-text
                  i.fa.fa-star.yellow(aria-hidden="true")
                  i.fa.fa-star.yellow(aria-hidden="true")
                  i.fa.fa-star.yellow(aria-hidden="true")
                  i.fa.fa-star.yellow(aria-hidden="true")
            li
              label(for="three-stars")
                input.all#three-stars(type="checkbox")
                span.stars-text
                  i.fa.fa-star.yellow(aria-hidden="true")
                  i.fa.fa-star.yellow(aria-hidden="true")
                  i.fa.fa-star.yellow(aria-hidden="true")
            li
              label(for="two-stars")
                input.all#two-stars(type="checkbox")
                span.stars-text
                  i.fa.fa-star.yellow(aria-hidden="true")
                  i.fa.fa-star.yellow(aria-hidden="true")
            li
              label(for="one-stars")
                input.all#one-stars(type="checkbox")
                span.stars-text
                  i.fa.fa-star.yellow(aria-hidden="true")

      <!-- Filtro por regímenes -->
      .mealplan-slider.filter-box
        .filter-title-container
          a.title
            i.fa.fa-cutlery(aria-hidden="true")
            span  Regímenes
          a.close-filter-title
            i.fa.fa-caret-up(aria-hidden="true")
        .mealplan-container
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

      <!-- Filtro por medio de pago -->
      .payment-type.filter-box
        .filter-title-container
          a.title
            i.fa.fae-wallet(aria-hidden="true")
            span Tipo de pago
          a.close-filter-title
            i.fa.fa-caret-up(aria-hidden="true")
        .slider
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

      <!-- Filtro por servicios -->
      .service-filter.filter-box
        .filter-title-container
          a.title
            i.fa.fa-tag(aria-hidden="true")
            span Servicios
          a.close-filter-title
            i.fa.fa-caret-up(aria-hidden="true")
        .slider
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
  import vueSlider from 'vue-slider-component'

  export default {
    name: 'Filters',
    template: '<Filters/>',
    components: {
      vueSlider
    },
    data: function () {
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
  padding: 10px;
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

.hotel-container .left-sidebar-wrapper .map-wrapper img {
  width: 100%;
}

.hotel-container .left-sidebar-wrapper .map-wrapper a {
  display: block;
  font-family: 'roboto_regular', sans-serif;
  font-size: 0.875rem;
  padding: 3px 0;
  text-align: center;
  width: auto;
}

.hotel-container .left-sidebar-wrapper .map-wrapper a:hover {
  text-decoration: underline;
}

.hotel-container .left-sidebar-wrapper .filters-wrapper h2 {
  background-color: #fff;
  font-family: roboto_regular;
  font-size: 16px;
  margin: 0;
  padding: 10px;
}

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

.hotel-container .left-sidebar-wrapper .price-slider {
  height: 130px;
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
