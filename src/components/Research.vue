<template>
  <div id="research">
    <nav class="breadcrumb">
      <ul class="breadcrumb-list">
        <li>Home</li>
        <li> / Hoteles</li>
        <li> / Madrid</li>
      </ul>
    </nav>

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

<style lang="scss" scoped>
  .hotel-container {
    color: rgb(68, 68, 68);
    max-width: 1344px;
    margin: 0 auto;
  }

  /* BREADCRUMB */
  nav .breadcrumb-list {
    font-family: robotolight;
    font-size: 12px;
    margin: 10px 0;
    padding: 0;
    width: 100%;
  }

  nav .breadcrumb-list li {
    display: inline;
  }

  /* END OF BREADCRUMB */

  /* SEARCH SUMMARY */
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
  /* END OF SEARCH SUMMARY */

  /* CLUSTERS */
  .hotel-container .hotels {
    display: inline-block;
    margin-left: 7px;
    padding: 0;
    width: 74%;
  }

  .hotels .hotel-cluster {
    background-color: #fff;
    box-shadow: 0px 1px 3px 0px rgba(119, 119, 199, 0.3);
    height: 192px;
    padding: 7px;
    margin-bottom: 10px;
  }

  .hotels .hotel-cluster .carousel {
    display: inline-block;
    position: relative;
    width: 34%;
    vertical-align:top;
  }

  .hotels .hotel-cluster .carousel .carousel-image {
    background-repeat: no-repeat;
    height: 192px;
    width: 325px;
  }

  .hotels .hotel-cluster .carousel .gift {
    background-color: #509E3C;
    border-radius: 2px 0px 2px 2px;
    box-sizing: border-box;
    color: #fff;
    font-family: 'roboto_regular', sans-serif;
    font-size: 14px;
    font-weight: bold;
    height: 48px;
    left: 16px;
    line-height: 18px;
    padding-top: 4px;
    position: absolute;
    text-align: center;
    top: -8px;
    width: 40px;
    z-index: 1;
  }

  .hotels .hotel-cluster .carousel .gift::after {
    content: '';
    position: absolute;
    border-width: 4px;
    border-color: transparent transparent #2D5C23 #2D5C23;
    border-style: solid;
    top: 0;
    right: -8px;
  }

  .hotels .hotel-cluster .hotel-data {
    display: inline-block;
    padding: 0 16px;
    width: 37%;
    vertical-align:top;
  }

  .hotels .hotel-cluster .hotel-data p,
  .hotels .hotel-cluster .hotel-data h2 {
    font-family: roboto_regular;
    margin: 5px 0;
    padding: 0;
  }

  .hotels .hotel-cluster .hotel-data h2.name {
    font-size: 17px;
  }

  .hotels .hotel-cluster .hotel-data .mealplan {
    color: #df6800;
    font-weight: bold;
    font-size: 14px;
  }

  .hotels .hotel-cluster .hotel-price {
    border-left: 1px dashed #b4b4b4;
    display: inline-block;
    font-family: 'roboto_regular', sans-serif;
    font-size: 12px;
    text-align: center;
    width: 24%;
    vertical-align:top;
  }

  .hotels .hotel-cluster .hotel-price p {
    margin: 0;
    padding: 0;
  }

  .hotels .hotel-cluster .hotel-price .price {
    color: #df6800;
    font-size: 36px;
    font-weight: bold;
    margin: 4px 0;
  }

  .hotels .hotel-cluster .hotel-price .currency {
    font-size: 24px;
    font-weight: normal;
  }

  .hotels .hotel-cluster .hotel-price a {
    background-color: #002C77;
    border: 0 none;
    border-radius: 4px;
    box-shadow: 0 -2px 0 #00163C inset;
    cursor: pointer;
    color: #fff;
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 6px;
    margin: 8px;
    text-align: center;
    width: 177px;
  }

  .hotels .hotel-cluster .hotel-price .payment-extra {
    font-size: 14px;
    font-weight: bold;
  }

  /* END OF CLUSTERS */

</style>