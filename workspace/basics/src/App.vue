<template>
  <h1>Vue Basics</h1>

  <p>
    <router-link to="/basics">Property Binding</router-link>
    &nbsp;
    <router-link to="/events">Events</router-link>
  </p>

  <router-view></router-view>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Jost', sans-serif;
  }

  body {
    margin: 0;
  }
</style>
