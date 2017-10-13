<template>
  <div id="app">
    <am-header></am-header>
    <router-view ></router-view>
    <am-footer></am-footer>
  </div>
</template>

<script>
  import AmHeader from '@/components/AmHeader'
  import AmFooter from '@/components/AmFooter'

  export default {
    name: 'app',
    components: { AmHeader, AmFooter }
  }
</script>

<style lang="scss" >

</style>
