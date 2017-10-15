<template>
<div>
<div class="search-summary">
  <div class="summary-wrapper">
    <p>Hoteles disponibles para:</p>
    <ul class="summary">
      <li class="location">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
         Madrid
      </li>
      <li class="checkin-date">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
         15/3/2017
      </li>
      <li class="ckeckout-date">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
         21/3/2017
      </li>
      <li class="guests">
        <i class="fa fa-user"></i>
         2 huéspedes
      </li>
      <li class="rebusqueda">
        <a>Modificar búsqueda</a>
      </li>
    </ul>
  </div>
</div>
<div class="sort-hotels">
  <label for="sort">Ordenar</label>
  <select id="sort">
    <option value="recommended">Más relevantes</option>
    <option value="price-ASC">Precio más bajo</option>
    <option value="price-DESC">Precio más alto</option>
    <option value="stars-ASC">Menos estrellas</option>
    <option value="stars-DESC">Más estrellas</option>
  </select>
</div>
</div>
</template>

<script>
  export default {
    name: 'Research',
    template: '<Research/>',
    props: []
  }
</script>

<style scoped>
.search-summary {
  border: 1px solid #ccc;
  font-family: roboto_regular, sans-serif;
  height: 90px;
}

.summary-wrapper {
  margin: 15px;
}

.search-summary p {
  font-size: 20px;
  margin: 0;
  padding: 0 10px;
}

.search-summary ul {
  position: relative;
  margin: 10px 0;
  padding: 0;
}

.search-summary ul li {
  display: inline;
  font-size: 15px;
  padding: 10px;
}

.search-summary ul li a {
  cursor: pointer;
  color: rgb(21, 122, 177);
  font-weight: bold;
}

.search-summary ul li a:hover {
  text-decoration: underline;
}

.hotel-container .sort-hotels {
  margin-top: 15px;
  font-family: 'roboto_regular', sans-serif;
  font-size: 12px;
  text-align: right;
}

.hotel-container .sort-hotels select {
  background: #fff;
  border-color: #ccc;
  border-top-color: #777;
  color: #444;
  padding: 0 0 0 8px;
}
</style>
