<template>
  <div>
    <select
      @change="getOptionValue($event)"
      class="btn btn-secondary dropdown-toggle"
    >
      <option disabled>Sort</option>
      <option value="Name A-Z">Name A-Z</option>
      <option value="Name Z-A">Name Z-A</option>
      <option value="Date ↑">Date ↑</option>
      <option value="Date ↓">Date ↓</option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import dayjs from "dayjs";

export default {
  name: "DrinkSorting",

  data() {
    return {
      value: null,
    };
  },

  methods: {
    getOptionValue(event) {
      this.$store.dispatch("sortDrinks", event.target.value);
    },
  },
};
</script>

<style scoped>
p {
  border: solid red 1px;
}
</style>
