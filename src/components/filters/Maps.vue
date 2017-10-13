<template>
  <div class="map-wrapper filter-box">
    <img src="./../../assets/result-map.png" />
    <a >Ver hoteles en el mapa</a>
  </div>
</template>

<script>
  export default {
    name: 'Maps',
    template: '<Maps/>',
    props: []
  }
</script>

<style scoped lang="scss">
.map-wrapper {
  img {
    width: 100%;
  }
  a {
    display: block;
    font-family: 'roboto_regular', sans-serif;
    font-size: 0.875rem;
    padding: 3px 0;
    text-align: center;
    width: auto;
  }
  &:hover {
    text-decoration: underline;
  }
}
</style>
