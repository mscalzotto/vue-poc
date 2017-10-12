<template>
<aside class="left-sidebar-wrapper">
  <!-- Mapa -->
  <div class="map-wrapper filter-box">
    <img src="./../assets/result-map.png" />
    <a class="map-hotels">Ver hoteles en el mapa</a>
  </div>
  <div class="filters-wrapper ">
    <div class="filters-title filter-box">
      <h2 class="title">Filtrar</h2>
    </div>

    <!-- Filtro por nombre -->
    <div class="busqueda-nombre filter-box">
      <div class="filter-title-container">
        <a class="title">
          <i class="fa fa-search" aria-hidden="true"></i>
           Nombre del hotel
        </a>
        <a class="close-filter-title">
          <i class="fa fa-caret-up" aria-hidden="true"></i>
        </a>
      </div>
      <input type="text" placeholder="Ingrese el nombre del hotel" />
      <input type="submit" value="Aceptar" />
    </div>

    <!-- Slider -->
    <div class="price-slider filter-box">
      <div class="filter-title-container">
        <a class="title">
          $ Precio por noche
        </a>
        <a class="close-filter-title">
          <i class="fa fa-caret-up" aria-hidden="true"></i>
        </a>
      </div>
      <div id="slider-range"></div>
      <div class="price-range">
        <span class="price-b"></span>
        <span class="price-a"></span>
      </div>
    </div>

    <!-- Filtro por estrellas -->
    <div class="stars-filter filter-box">
      <div class="filter-title-container">
        <a class="title">
          <i class="fa fa-star" aria-hidden="true"></i>
           Estrellas
        </a>
        <a class="close-filter-title">
          <i class="fa fa-caret-up" aria-hidden="true"></i>
        </a>
      </div>
      <div class="stars-container">
        <ul>
          <li>
            <label for="all-stars">
              <input type="checkbox" checked="checked" class="all" id="all-stars" />
              <span class="stars-text"><strong>Todas las estrellas (12)</strong></span>
            </label>
          </li>
          <li>
            <label for="five-stars">
              <input type="checkbox" class="all" id="five-stars" />
              <span class="stars-text">
                <i class="fa fa-star yellow" aria-hidden="true"></i>
                <i class="fa fa-star yellow" aria-hidden="true"></i>
                <i class="fa fa-star yellow" aria-hidden="true"></i>
                <i class="fa fa-star yellow" aria-hidden="true"></i>
                <i class="fa fa-star yellow" aria-hidden="true"></i>
              </span>
            </label>
          </li>
          <li>
            <label for="four-stars">
              <input type="checkbox" class="all" id="four-stars" />
              <span class="stars-text">
                <i class="fa fa-star yellow" aria-hidden="true"></i>
                <i class="fa fa-star yellow" aria-hidden="true"></i>
                <i class="fa fa-star yellow" aria-hidden="true"></i>
                <i class="fa fa-star yellow" aria-hidden="true"></i>
              </span>
            </label>
          </li>
          <li>
            <label for="three-stars">
              <input type="checkbox" class="all" id="three-stars" />
              <span class="stars-text">
                <i class="fa fa-star yellow" aria-hidden="true"></i>
                <i class="fa fa-star yellow" aria-hidden="true"></i>
                <i class="fa fa-star yellow" aria-hidden="true"></i>
              </span>
            </label>
          </li>
          <li>
            <label for="two-stars">
              <input type="checkbox" class="all" id="two-stars" />
              <span class="stars-text">
                <i class="fa fa-star yellow" aria-hidden="true"></i>
                <i class="fa fa-star yellow" aria-hidden="true"></i>
              </span>
            </label>
          </li>
          <li>
            <label for="one-stars">
              <input type="checkbox" class="all" id="one-stars" />
              <span class="stars-text">
                <i class="fa fa-star yellow" aria-hidden="true"></i>
              </span>
            </label>
          </li>
        </ul>
      </div>
    </div>

    <!-- Filtro por regímenes -->
    <div class="mealplan-slider filter-box">
      <div class="filter-title-container">
        <a class="title">
          <i class="fa fa-cutlery" aria-hidden="true"></i>
           Regímenes
        </a>
        <a class="close-filter-title">
          <i class="fa fa-caret-up" aria-hidden="true"></i>
        </a>
      </div>
      <div class="mealplan-container">
        <ul>
          <li>
            <label for="all-mealplan">
              <input type="checkbox" class="all" id="all-mealplan" />
              <span class="mealplan-text">Todos los regímenes</span>
            </label>
          </li>
          <li>
            <label for="bed-breakfast-mealplan">
              <input type="checkbox" class="all" id="bed-breakfast-mealplan" />
              <span class="mealplan-text">Cama y desayuno</span>
            </label>
          </li>
          <li>
            <label for="only-room-mealplan">
              <input type="checkbox" class="all" id="only-room-mealplan" />
              <span class="mealplan-text">Sólo la habitación</span>
            </label>
          </li>
          <li>
            <label for="breakfast-full-mealplan">
              <input type="checkbox" class="all" id="breakfast-full-mealplan" />
              <span class="mealplan-text">Desayuno completo</span>
            </label>
          </li>
          <li>
            <label for="breakfast-mealplan">
              <input type="checkbox" class="all" id="breakfast-mealplan" />
              <span class="mealplan-text">Desayuno</span>
            </label>
          </li>
        </ul>
      </div>
    </div>

    <!-- Filtro por medio de pago -->
    <div class="payment-type filter-box">
      <div class="filter-title-container">
        <a class="title">
          <i class="fa fae-wallet" aria-hidden="true"></i>
          Tipo de pago
        </a>
        <a class="close-filter-title">
          <i class="fa fa-caret-up" aria-hidden="true"></i>
        </a>
      </div>
      <div class="slider">
        <ul>
          <li>
            <label for="all-payment">
              <input type="checkbox" class="all" id="all-payment" />
              <span class="payment-text">Todos los métodos de pago</span>
            </label>
          </li>
          <li>
            <label for="destiny-payment">
              <input type="checkbox" class="all" id="destiny-payment" />
              <span class="payment-text">Pagá en destino</span>
            </label>
          </li>
          <li>
            <label for="quotas-payment">
              <input type="checkbox" class="all" id="quotas-payment" />
              <span class="payment-text">Pagá en cuotas</span>
            </label>
          </li>
        </ul>
      </div>
    </div>

    <!-- Filtro por servicios -->
    <div class="service-filter filter-box">
      <div class="filter-title-container">
        <a class="title">
          <i class="fa fa-tag" aria-hidden="true"></i>
          Servicios
        </a>
        <a class="close-filter-title">
          <i class="fa fa-caret-up" aria-hidden="true"></i>
        </a>
      </div>
      <div class="slider">
        <ul>
          <li>
            <label for="all-service">
              <input type="checkbox" class="all" id="all-service" />
              <span class="service-text">Todos los servicios</span>
            </label>
          </li>
          <li>
            <label for="internet-service">
              <input type="checkbox" class="all" id="internet-service" />
              <span class="service-text">
                <i class="fa fa-wifi" aria-hidden="true"></i>
                Internet</span>
            </label>
          </li>
          <li>
            <label for="air-service">
              <input type="checkbox" class="all" id="air-service" />
              <span class="service-text">
                <i class="fa fa-snowflake-o" aria-hidden="true"></i>
                Aire acondicionado</span>
            </label>
          </li>
          <li>
            <label for="bar-service">
              <input type="checkbox" class="all" id="bar-service" />
              <span class="service-text">
                <i class="fa fa-glass" aria-hidden="true"></i>
                Bar</span>
            </label>
          </li>
          <li>
            <a class="view-more">Ver más
                <i class="fa fa-caret-down" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</aside>
</template>

<script>
  export default {
    name: 'Filters',
    template: '<Filters/>',
    props: []
  }
</script>

<style >
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
