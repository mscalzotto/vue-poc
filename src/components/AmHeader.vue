<template>
  <div id="header">
    {{ getLinks }}
    <header class="header">
      <div class="header-background">
        <div class="header-container">

          <div class="logo">
            <img src="./../assets/header/logo.svg" />
          </div>

          <ul class="sub-menu">
            <li class="ingresar">
              <i class="fa fa-user"></i>
              <a>Ingresar</a>
            </li>
            <li class="club-almundo">
              <a><img src="./../assets/header/logo-clubalmundo.svg" /></a>
            </li>
            <li class="sucursales">
              <a>Sucursales</a>
            </li>
            <li class="llamanos">
              <a>Llamanos <i class="fa fa-angle-down"></i></a>
            </li>
            <li class="ayuda last">
              <a>Ayuda</a>
            </li>
          </ul>
        </div>
      </div>

      <nav class="sub-header-container">
        <ul class="main-menu">
          <li><a>Hoteles</a></li>
          <li><a>Vuelos</a></li>
          <li><a>Vuelo + Hotel</a></li>
          <li><a>Paquetes</a></li>
          <li><a>Disney</a></li>
          <li><a>Escapadas</a></li>
          <li><a>Seguros</a></li>
          <li><a>Autos</a></li>
          <li><a>Cruceros</a></li>
          <li><a>OFERTAS</a></li>
          <li class="last">
            <a>Más <i class="fa fa-angle-down"></i></a>
          </li>
        </ul>
      </nav>

    </header>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AmHeader',
    template: '<AmHeader/>',
    props: [],
    computed: {
      ...mapGetters('./modules/Header', [
        'getLinks'
      ])
    }
  }
</script>

<style lang="scss" scoped>
.header {
  background-image: url('./../assets/header/header-bg.jpg');
  background-size: cover;
  
  .header-background {
    background: rgba(0,44,119,0.7);
  }

  .header-container {
    max-width: 1344px;
    max-height: 80px;
    margin: 0 auto;

    .logo {
      display: inline-block;
      vertical-align: middle;
      width: 35%;
    }

    .sub-menu {
      box-sizing: border-box;
      color: #fff;
      display: inline-block;
      font-family: 'roboto_regular', sans-serif;
      font-size: 14px;
      padding: 14px 0;
      text-align: right;
      width: 64%;

      li {
        border-right: 1px solid #fff;
        display: inline;
        padding: 0 15px;

        a {
          cursor: pointer;
        }

        .last {
          border-right: none;

          a {
            color: rgb(245, 109, 0);
            font-weight: bold;
            text-transform: uppercase;
          }
        }
      }
    }
  }

  .sub-header-container {
    background-image: url('./../assets/header/header-bg.jpg');
    margin: 0 auto;

    .main-menu {
      background-color: rgba(0,44,119,0.4);
      border-top: 1px solid rgba(255,255,255,0.2);
      border-bottom: 1px solid rgba(255,255,255,0.2);
      color: #fff;
      font-family: 'robotomedium', sans-serif;
      line-height: 20px;
      margin: 0;
      min-width: 1344px;
      padding: 8px 0;
      text-align: center;

      li {
        display: inline;
        margin: 0 4px;
        text-align: center;

        .last i {
          padding-left: 4px;
        }

        a {
          cursor: pointer;
          padding: 7px 16px;
        }
        a:hover {
          cursor: pointer;
          background-color: rgba(0,44,119,0.5);
          padding: 7px 16px;
        }
      }
    }
  }
}
</style>