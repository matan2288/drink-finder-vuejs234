<template>
  <div class="terminal-main-container">
    <div class="terminal-child-1">
      <DrinksResults
        :allDrinks="allDrinks"
        :getSingleDrinkData="getSingleDrinkData"
      />
    </div>
    <div class="terminal-child-2">
      <DrinkData :singleDrinkDataToDisplay="singleDrinkDataToDisplay" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DrinksResults from "./TeminalPeripheralComponents/DrinksResults.vue";
import DrinkData from "./TeminalPeripheralComponents/DrinkData.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TerminalMainComponent",

  components: { DrinksResults, DrinkData },

  data() {
    return {
      singleDrinkDataToDisplay: [],
    };
  },
  methods: {
    ...mapActions(["fetchDrinks"]),

    getSingleDrinkData(value) {
      this.singleDrinkDataToDisplay = value;

      return this.singleDrinkDataToDisplay;
    },
  },

  computed: mapGetters(["allDrinks", "userDrinkSearchStateGetter"]),
  created() {
    this.fetchDrinks();
  },
};
</script>

<style scoped>
.terminal-main-container {
  display: flex;
  flex-direction: row;
  height: 300px;
  overflow: hidden;
}
.terminal-child-1 {
  overflow-y: scroll;
}
.terminal-child-2 {
  overflow-y: scroll;
  width: 100%;
}

@media (max-width: 400px) {
  .terminal-main-container {
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
  }
}
</style>
