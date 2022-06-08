<script lang="ts">
  import { ref, computed } from 'vue'

  export default {
    setup() {
      const goals = ref<string[]>([])
      const noGoals = computed(() => goals.value.length === 0)

      const enteredGoal = ref('')
      const addGoal = () => {
        goals.value.push(enteredGoal.value)
        enteredGoal.value = ''
      }

      const removeGoal = (index: number) => {
        if (index < 0 || index >= goals.value.length) return
        goals.value.splice(index, 1)
      }

      return {
        goals,
        noGoals,
        enteredGoal,
        addGoal,
        removeGoal,
      }
    },
  }
</script>

<template>
  <header>
    <h1>Vue Course Goals</h1>
  </header>
  <section id="user-goals">
    <h2>My course goals</h2>
    <input v-model="enteredGoal" type="text" />
    <button @click="addGoal">Add Goal</button>
    <p v-if="noGoals">
      No goals have been added yet - please start adding some!
    </p>
    <ul v-else>
      <li
        v-for="(goal, index) in goals"
        :key="goal"
        @dblclick="removeGoal(index)"
      >
        <p>{{ index }}. {{ goal }}</p>
        <input type="text" @click.stop />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 1rem;
    background-color: #1b995e;
    color: white;
    text-align: center;
  }

  #user-goals {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    h2 {
      font-size: 2rem;
      border-bottom: 4px solid #ccc;
      color: #1b995e;
      margin: 0 0 1rem 0;
    }
    ul {
      list-style: none;
      margin: 1rem 0;
      padding: 0;

      li {
        margin: 1rem 0;
        font-size: 1.25rem;
        font-weight: bold;
        background-color: #8ddba4;
        padding: 0.5rem;
        color: #1f1f1f;
        border-radius: 25px;
      }
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

      &:hover,
      &:active {
        background-color: #ec3169;
        border-color: #ec3169;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
      }
    }
  }
</style>
