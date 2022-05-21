<template>
  <div class="main">
    <select
      v-model="selected"
      @click="bindCategoryToDataList()"
      class="btn btn-secondary dropdown-toggle"
    >
      <option value="Filter By:" disabled>Filter By:</option>
      <option value="Category">Category</option>
      <option value="Ingredient">Ingredient</option>
    </select>

    <input
      type="text"
      v-model="filter"
      list="filters"
      @input="evokeFocusOutfilter()"
    />
    <datalist id="filters">
      <option v-for="filter in filters">{{ filter }}</option>
    </datalist>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FilterBarContainer",

  data() {
    return {
      selected: "Filter By:",
      filter: "",
      filters: [],
      Category: [
        "Cocktail",
        "Ordinary Drink",
        "Homemade Liqueur",
        "Other/Unknown",
      ],
      Ingredient: [
        "Gin",
        "Dry Vermouth",
        "Olive",
        "Olive Brine",
        "Lemon",
        "Sweet Vermouth",
        "Orange Juice",
        "Angostura Bitters",
        "Vodka",
        "Raspberry Liqueur",
        "Peach nectar",
        "Peach schnapps",
        "Peach nectar",
        "Lemon peel",
        "Cranberry juice",
        "Chocolate liqueur",
        "Amaretto",
        "Chocolate Sauce",
        "Salted Chocolate",
        "Apple juice",
        "Lime",
        "Lime juice",
        "Ice",
        "Strawberries",
      ],
    };
  },
  methods: {
    bindCategoryToDataList() {
      if (this.selected == "Category") {
        this.filters = this.Category;
      } else if (this.selected == "Ingredient") {
        this.filters = this.Ingredient;
      }
    },

    evokeFocusOutfilter() {
      this.$store.dispatch("filterDrinks", {
        SelectedCategory: this.selected,
        SelectedFilter: this.filter,
      });
    },
  },
};
</script>

<style>
.main {
  height: fit-content;
  display: flex;
  flex-direction: column;
}
</style>
