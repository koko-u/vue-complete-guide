<script lang="ts">
  import { reactive, toRefs } from 'vue'

  export default {
    setup() {
      const state = reactive({
        boxASelected: false,
        boxBSelected: false,
        boxCSelected: false,
      })

      const boxSelected = (box: 'A' | 'B' | 'C') => {
        switch (box) {
          case 'A':
            state.boxASelected = !state.boxASelected
            break
          case 'B':
            state.boxBSelected = !state.boxBSelected
            break
          case 'C':
            state.boxCSelected = !state.boxCSelected
            break
          default: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _: never = box
          }
        }
      }

      return {
        ...toRefs(state),
        boxSelected,
      }
    },
  }
</script>

<template>
  <header>
    <h1>Vue Dynamic Styling</h1>
  </header>
  <section id="styling">
    <div
      class="demo"
      :class="{ active: boxASelected }"
      @click="boxSelected('A')"
    ></div>
    <div
      class="demo"
      :class="{ active: boxBSelected }"
      @click="boxSelected('B')"
    ></div>
    <div
      class="demo"
      :class="{ active: boxCSelected }"
      @click="boxSelected('C')"
    ></div>
  </section>
</template>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Jost', sans-serif;
  }

  body {
    margin: 0;
  }

  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 1rem;
    background-color: #4fc08d;
    color: white;
    text-align: center;
  }

  #styling {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
  }

  .demo {
    width: calc(100% - 32px);
    height: 100px;
    margin: 16px;
    border: 2px dashed #ccc;
  }

  .active {
    border-color: red;
    background-color: salmon;
  }
</style>
