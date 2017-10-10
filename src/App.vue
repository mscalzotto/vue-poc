<template lang="pug">
  #app
    am-header
    router-view
    am-footer
  </div>
</template>

<script>
  import AmHeader from '@/components/AmHeader'
  import AmFooter from '@/components/AmFooter'

  export default {
    name: 'AmMain',
    components: { AmHeader, AmFooter }
  }
</script>

<style lang="scss" scoped>
  body {
    margin: 0;
  }
</style>
