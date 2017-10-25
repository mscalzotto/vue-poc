<template>
<div class="hotel-container">
  <div class="hotels">
    <li class="hotel-cluster" v-for="(hotel, index) in results"
      :key="index">
      <div class="carousel">
        <div class="gift">
          <span>50% OFF</span>
        </div>
        <div class="carousel-image">
          <img :src="hotel.image" />
        </div>
      </div>

      <div class="hotel-data">
        <h2 class="name">{{hotel.name}}</h2>
        <p class="stars">
          {{ hotel.stars }}
        </p>
        <p class="mealplan">
          <i class="fa" ng-class="mapMealplan(hotel.mealplan)[0]" aria-hidden="true"></i>

        </p>

      </div>

      <div class="hotel-price">
        <p class="price-text">Precio por noche por habitación</p>
        <p class="price"><span class="currency">ARS</span> {{hotel.price.amount}}</p>
        <p class="promo-text">Precio sin promo ARS <strong>{{hotel.price.amount + 358 }}</strong></p>
        <p class="tax-text">Impuestos y tasas no incluídos</p>
        <a class="hotel-detail">Ver hotel</a>
        <p class="payment-extra">Pagá en cuotas</p>
        <p class="payment-extra">Pagá en destino</p>
      </div>
    </li>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Cluster',
  template: '<Cluster/>',
  props: [],
  computed: {
    ...mapState([
      'results'
    ])
  }
}
</script>

<style lang="scss" >
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

.hotels .hotel-cluster .carousel .carousel-image img {
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
</style>
