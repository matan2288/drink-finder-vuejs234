import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      drinks: [],
      userDrinkSearchState: "vodka",
      filterdDrinks: [],
    };
  },
  getters: {
    allDrinks: (state) => state.drinks,
    userDrinkSearchStateGetter: (state) => state.userDrinkSearchState,
  },
  mutations: {
    setDrinks: (state, settedDrinks) => (state.drinks = settedDrinks),
    async setTheStateToUsersSearchTextMutation(state, payload) {
      state.userDrinkSearchState = payload;
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${payload}`
      );
      state.drinks = response.data;
    },

    sortDrinksMutation(state, payload) {
      switch (payload) {
        case "Name A-Z": {
          state.drinks.drinks = state.drinks.drinks.sort((a, b) =>
            a.strDrink.normalize().localeCompare(b.strDrink.normalize())
          );
          break;
        }
        case "Name Z-A": {
          state.drinks.drinks = state.drinks.drinks.sort((b, a) =>
            a.strDrink.normalize().localeCompare(b.strDrink.normalize())
          );
          break;
        }
        case "Date ↓": {
          state.drinks.drinks = state.drinks.drinks.sort(
            (d1, d2) =>
              new Date(d1.dateModified).getTime() -
              new Date(d2.dateModified).getTime()
          );
          break;
        }
        case "Date ↑": {
          state.drinks.drinks = state.drinks.drinks.sort(
            (d1, d2) =>
              new Date(d2.dateModified).getTime() -
              new Date(d1.dateModified).getTime()
          );
          break;
        }
      }
    },
    async filterDrinksMutation(state, payload) {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${state.userDrinkSearchState}`
      );

      if (
        payload.SelectedFilter == "" ||
        state.drinks.drinks
          .map((item) => {
            return item.strIngredient1;
          })
          .toString()
          .includes(payload.SelectedFilter, 0) === false
      ) {
        state.drinks = response.data;
      }

      if (
        payload.SelectedFilter !== "" &&
        payload.SelectedCategory == "Category"
      ) {
        state.drinks.drinks = state.drinks.drinks.filter((item) => {
          return item.strCategory == payload.SelectedFilter;
        });
      }

      if (
        payload.SelectedFilter !== "" &&
        payload.SelectedCategory == "Ingredient"
      ) {
        state.drinks.drinks = state.drinks.drinks.filter((ingredient)=> {
          return (
            ingredient.strIngredient1 == payload.SelectedFilter ||
            ingredient.strIngredient2 == payload.SelectedFilter ||
            ingredient.strIngredient3 == payload.SelectedFilter ||
            ingredient.strIngredient4 == payload.SelectedFilter ||
            ingredient.strIngredient5 == payload.SelectedFilter
          );
        });
      }
    },
  },
  actions: {
    async fetchDrinks({ commit, state }) {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${state.userDrinkSearchState}`
      );
      commit("setDrinks", response.data);
    },

    sortDrinks: ({ commit }, payload) => {
      commit("sortDrinksMutation", payload);
    },

    filterDrinks: ({ commit }, payload) => {
      commit("filterDrinksMutation", payload);
    },
  },
});
