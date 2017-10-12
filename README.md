# vue-poc
Un proyecto simple para bucear las bondades de Vue.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Notes
```
<style scoped> <== Funciona

# Para integrar sass:

npm i -D node-sass sass-loader

<style lang="scss"> y voilá
```

# Backend : Api Restful Node

## Para deployar
* ejecutar mongoimport --db hotels --collection hotels --file "./server/dump/allresult.json" --jsonArray
* Ir a "/server"
* npm install
* npm start
* levanta en http://localhost:8081/api/hotels

## Agrego unos graficos para entender mejor el flujo de Flux

![Screenshot](doc/diagram-redux.gif)
![Screenshot](doc/diagram-redux-MW.gif)
