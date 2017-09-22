<template>
  <div id="app">
    <Header></Header>
    <Research></Research>
    <Breadcrumb></Breadcrumb>
    <Map></Map>
    <Filters></Filters>
    <Results></Results>
    <Footer></Footer>
  </div>
</template>

<script>
  import Map from './components/Map'
  import Breadcrumb from './components/Breadcrumb'
  import Filters from './components/Filters'
  import Header from './components/Header'
  import Research from './components/Research'
  import Results from './components/Results'
  import Footer from './components/Footer'

  export default {
    name: 'Main',
    components: {
      Results,
      Map,
      Filters,
      Header,
      Research,
      Footer,
      Breadcrumb
    }
  }
</script>

<style scoped>

</style>