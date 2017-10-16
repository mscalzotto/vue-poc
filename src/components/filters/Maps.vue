<template lang="pug">
  .map-wrapper.filter-box
    img(src="./../../assets/result-map.png")
    a.map-hotels Ver hoteles en el mapa
</template>
<script>
export default {
  name: 'Maps'
}
</script>
<style>
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
</style>
