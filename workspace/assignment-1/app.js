import { createApp } from "vue";

createApp({
  data() {
    return {
      profile: {
        name: "John Doe",
        age: 28,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5c/Keegan_Allen_Fish.jpeg",
      },
    };
  },
  computed: {
    after5years() {
      return this.profile.age + 5;
    },
  },
  methods: {
    favoriteNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
