<template lang="pug">
  #app
    am-header
    research
    breadcrumb
    maps
    filters
    results
    am-footer
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

<style lang="scss">
  body {
    margin: 0;
  }
</style>