<script lang="ts">
  import { computed, ref } from 'vue'

  export default {
    setup() {
      const counter = ref(0)
      const add = (delta: number) => {
        counter.value += delta
      }
      const reduce = (delta: number) => {
        counter.value -= delta
      }

      const name = ref('')

      const resetInput = () => {
        name.value = ''
      }
      const fullName = computed(() => {
        if (name.value === '') return ''

        return name.value + ' Yamada'
      })

      return {
        counter,
        add,
        reduce,
        name,
        fullName,
        resetInput,
      }
    },
  }
</script>

<template>
  <header class="header">
    <h1>Vue Events</h1>
  </header>
  <section id="events">
    <h2>Events in Action</h2>
    <button @click="add(10)">Add 10</button>
    <button @click="reduce(5)">Reduce 5</button>
    <p>Result: {{ counter }}</p>

    <input v-model="name" type="text" />
    <button @click="resetInput">Reset Input</button>
    <p>Your name: {{ fullName }}</p>
  </section>
</template>

<style lang="scss" scoped>
  .header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #4fc08d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }

  #events {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;

    h2 {
      font-size: 2rem;
      border-bottom: 4px solid #ccc;
      color: #4fc08d;
      margin: 0 0 1rem 0;
    }
    p {
      font-size: 1.25rem;
      font-weight: bold;
      border: 1px solid #4fc08d;
      background-color: #4fc08d;
      color: white;
      padding: 0.5rem;
      border-radius: 25px;
    }

    input {
      font: inherit;
      border: 1px solid #ccc;

      &:focus {
        outline: none;
        border-color: #1b995e;
        background-color: #d7fdeb;
      }
    }

    button {
      font: inherit;
      cursor: pointer;
      border: 1px solid #ff0077;
      background-color: #ff0077;
      color: white;
      padding: 0.05rem 1rem;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
      border-radius: 20px;
      margin: 0 1rem;

      &:hover,
      &:active {
        background-color: #ec3169;
        border-color: #ec3169;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
      }
    }
  }
</style>
