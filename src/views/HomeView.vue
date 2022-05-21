<template>
  <div class="home-main-container">
    <div class="search-bar-container">
      <SearchBarContaniner />
    </div>
    <div class="filter-sort-container">
      <FilterBar />
      <DrinkSorting />
    </div>

    <div class="terminal-container">
      <TerminalMainComponent />
    </div>
  </div>
</template>

<script>
import SearchBarContaniner from "../components/HomeViewComponents/HomeViewPeripheralComponents/SearchBarContaniner.vue";
import FilterBar from "../components/HomeViewComponents/HomeViewPeripheralComponents/FilterBar.vue";
import DrinkSorting from "../components/HomeViewComponents/HomeViewPeripheralComponents/DrinkSorting.vue";
import TerminalMainComponent from "../components/HomeViewComponents/TerminalComponents/TerminalMainComponent.vue";

export default {
  name: "HomeView",
  components: {
    SearchBarContaniner,
    FilterBar,
    DrinkSorting,
    TerminalMainComponent,
  },
};
</script>

<style scoped>

.filter-sort-container {
  margin: auto;
  padding: 15px;
  width: 98%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
}

.terminal-container {

  margin-bottom: 50px;
}
</style>
