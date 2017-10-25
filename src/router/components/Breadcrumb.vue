<template>
<nav class="breadcrumb">
  <ul class="breadcrumb-list">
    <li>Home</li>
    <li> / Hoteles</li>
    <li> / Madrid</li>
  </ul>
</nav>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    template: '<Breadcrumb/>',
    props: []
  }
</script>

<style >
nav .breadcrumb-list {
  font-family: robotolight;
  font-size: 12px;
  margin: 10px 0;
  padding: 0;
  width: 100%;
}

nav .breadcrumb-list li {
  display: inline;
}
</style>
