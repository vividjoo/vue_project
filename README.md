# vue_spring

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### vue router setting

```
1. /router/index.js에 router 설정

2. App.vue에 아래 코드 추가
<router-view></router-view>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

3. main.js
import routes from "../router/index";
createApp(App).use(routes).mount("#app");
```
