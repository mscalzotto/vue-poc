<template >
<section class="hotel-container">
  <breadcrumb></breadcrumb>
  <research></research>
  <filters></filters>
  <ul class="hotels">
    <results></results>
  </ul>
</section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Filters from '@/components/Filters'
import Research from '@/components/Research'
import Results from '@/components/Results'
export default {
  name: 'home',
  components: {
    Results,
    Filters,
    Research,
    Breadcrumb
  },
  computed: {
    ...mapState([
      'fetchingData',
      'error',
      'filters',
      'results',
      'pagination'
    ])
  },

  methods: {
    ...mapActions([
      'loadHotels'
    ])
  },

  created () {
    this.loadHotels({filters: this.filters})
  }
}

</script>

<style lang="scss">
  .hotel-container {
    color: rgb(68, 68, 68);
    max-width: 1344px;
    margin: 0 auto;
  }

  .hotel-container .hotels {
    display: inline-block;
    margin-left: 7px;
    padding: 0;
    width: 74%;
  }
  @font-face {
    font-family: 'robotomedium';
    src: url('../../assets/fonts/Roboto-Medium-webfont.eot');
    src: url('../../assets/fonts/Roboto-Medium-webfont.eot?#iefix') format('embedded-opentype'),
         url('../../assets/fonts/Roboto-Medium-webfont.woff') format('woff'),
         url('../../assets/fonts/Roboto-Medium-webfont.ttf') format('truetype'),
         url('../../assets/fonts/Roboto-Medium-webfont.svg#robotomedium') format('svg');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
    font-family: 'robotothin';
    src: url('../../assets/fonts/Roboto-Thin-webfont.eot');
    src: url('../../assets/fonts/Roboto-Thin-webfont.eot?#iefix') format('embedded-opentype'),
         url('../../assets/fonts/Roboto-Thin-webfont.woff') format('woff'),
         url('../../assets/fonts/Roboto-Thin-webfont.ttf') format('truetype'),
         url('../../assets/fonts/Roboto-Thin-webfont.svg#robotothin') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
      font-family: 'roboto_regular';
      src: url('../../assets/fonts/Roboto-Regular-webfont.eot');
      src: url('../../assets/fonts/Roboto-Regular-webfont.eot?#iefix') format('embedded-opentype'),
           url('../../assets/fonts/Roboto-Regular-webfont.woff') format('woff'),
           url('../../assets/fonts/Roboto-Regular-webfont.ttf') format('truetype'),
           url('../../assets/fonts/Roboto-Regular-webfont.svg#roboto_condensedlight') format('svg');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'robotolight';
      src: url('../../assets/fonts/Roboto-Light-webfont.eot');
      src: url('../../assets/fonts/Roboto-Light-webfont.eot?#iefix') format('embedded-opentype'),
           url('../../assets/fonts/Roboto-Light-webfont.woff') format('woff'),
           url('../../assets/fonts/Roboto-Light-webfont.ttf') format('truetype'),
           url('../../assets/fonts/Roboto-Light-webfont.svg#robotolight') format('svg');
      font-weight: normal;
      font-style: normal;
  }

  body {
    background-color: #f4f4f4;
  }

  li {
    list-style-type: none;
  }
</style>
