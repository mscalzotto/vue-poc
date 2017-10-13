<template>
<aside class="left-sidebar-wrapper">
  <maps></maps>
  <div class="filters-wrapper ">
    <div>
      <h2 class="title">Filtrar por</h2>
    </div>
    <v-layout row wrap>
      <v-flex lg12>
        <v-expansion-panel popout expand>
          <v-expansion-panel-content ripple>
            <div slot="header" class="blue--text text--darken-4">Nombre de Hotel</div>
            <v-card>
              <v-card-text >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel popout expand>
          <v-expansion-panel-content>
            <div slot="header" class="blue--text text--darken-4">Filtrar por Nombre</div>
            <v-card>
              <v-card-text >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel popout expand>
          <v-expansion-panel-content>
            <div slot="header" class="blue--text text--darken-4">Filtrar por Nombre</div>
            <v-card>
              <v-card-text >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </div>
</aside>
</template>

<script>
import Maps from '@/components/filters/Maps'
export default {
  name: 'Filters',
  components: { Maps },
  data: {
    open: true
  }
}
</script>

<style >
.yellow {
  color: #fdba12;
}

.left-sidebar-wrapper {
  display: inline-block;
  margin: 11px 0 15px 0;
  vertical-align: top;
  width: 25%;
}

.left-sidebar-wrapper .filter-box {
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(119, 119, 199, 0.3);
  font-family: 'roboto_regular';
  margin: 5px 0;
}

.left-sidebar-wrapper .filter-box a {
  color: rgb(21, 122, 177);
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  font-family: 'roboto_regular', sans-serif;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 15px;
  width: 70%;
}

.left-sidebar-wrapper .filter-box a.close-filter-title {
  font-size: 20px;
  padding-right: 0;
  text-align: right;
  width: 25%;
}

.left-sidebar-wrapper .filter-box a:hover {
  color: #1a99df;
}

.left-sidebar-wrapper .filter-box ul {
  font-size: 13px;
  margin: 0;
  padding: 10px;
}

.left-sidebar-wrapper .filter-box ul li {
  margin: 10px 0;
}

.left-sidebar-wrapper .filter-box ul li label {
  padding-left: 5px;
}

.left-sidebar-wrapper .filter-box ul li label input,
.left-sidebar-wrapper .filter-box ul li label span {
  display: inline-block;
}

.left-sidebar-wrapper .filter-box ul li label span {
  vertical-align: top;
}



.left-sidebar-wrapper .filters-wrapper h2 {
  background-color: #fff;
  font-family: roboto_regular;
  font-size: 16px;
  margin: 0;
  padding: 10px;
}

.left-sidebar-wrapper .busqueda-nombre input[type="text"] {
  border: 1px solid #CCC;
  border-top-color: #777;
  color: #555;
  display: inline-block;
  font-size: 14px;
  height: 32px;
  margin: 10px 10px 0 15px;
  padding: 0 8px;
  width: 184px;
}

.left-sidebar-wrapper .busqueda-nombre input[type="submit"] {
  background-color: #002C77;
  border: 0 none;
  border-radius: 2px;
  box-shadow: 0 -2px 0 #00163C inset;
  cursor: pointer;
  color: #fff;
  display: inline-block;
  font-size: 16px;
  height: 36px;
  margin: 10px 2px;
  text-align: center;
}

.left-sidebar-wrapper .busqueda-nombre input[type="submit"]:hover {
  background-color: #335692;
}

.left-sidebar-wrapper .price-slider {
  height: 130px;
}

.left-sidebar-wrapper .price-slider #slider-range {
	margin: 16px auto;
  width: 95%;
}

.left-sidebar-wrapper .price-slider .ui-slider-range {
	background: #777;
}

.left-sidebar-wrapper .price-slider #slider-range span {
  height: 24px;
  border-radius: 24px;
  width: 12px;
  top: -7px;
}

.left-sidebar-wrapper .price-slider .price-range .price-b {
  display: inline-block;
  width: 50%;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
}

.left-sidebar-wrapper .price-slider .price-range .price-a {
  display: inline-block;
  width: 48%;
  text-align: right;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
}
</style>
