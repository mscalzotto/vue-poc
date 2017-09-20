<template>
  <div id="cosas">
    <label for ="input-cosas">Fibonacci</label>
    <input v-model="fibNum" type="text" id="input-cosas" />
    {{ fibonacci(fibNum) }}
  </div>  
</template>

<script>
  export default {
    name: 'cosas',
    data () {
      return {
        fibNum: ''
      }
    },
    methods: {
      fibonacci: function (n) {
        if (n <= 1) return 1
        return this.fibonacci(n - 1) + this.fibonacci(n - 2)
      }
    }
  }
</script>

<styles>

</styles>