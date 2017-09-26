<template>
  <div id="app">
    <AmHeader></AmHeader>
    <Research></Research>
    <Breadcrumb></Breadcrumb>
    <Maps></Maps>
    <Filters></Filters>
    <Results></Results>
    <AmFooter></AmFooter>
  </div>
</template>

<script>
  import Maps from './components/Maps'
  import Breadcrumb from './components/Breadcrumb'
  import Filters from './components/Filters'
  import AmHeader from './components/AmHeader'
  import Research from './components/Research'
  import Results from './components/Results'
  import AmFooter from './components/AmFooter'

  export default {
    name: 'AmMain',
    components: {
      Results,
      Maps,
      Filters,
      AmHeader,
      Research,
      AmFooter,
      Breadcrumb
    }
  }
</script>

<style>
  body {
    margin: 0;
  }
</style>