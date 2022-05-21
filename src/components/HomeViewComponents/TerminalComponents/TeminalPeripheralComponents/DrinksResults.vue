<template>
  <ul class="list-group w-100">
    <li
      tabIndex="-1"
      class="mt-1"
      v-for="drink in allDrinks.drinks"
      :key="drink.idDrink"
      @click="getSingleDrinkData(drink)"
    >
      <div class="drink-title">{{ drink.strDrink }}</div>
      <div class="drink-other">
        {{ drink.strCategory }} / {{ drink.strGlass }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "DrinksResults",

  props: {
    allDrinks: Object,
    getSingleDrinkData: Function,
  },
};
</script>

<style scoped>
li {
  text-align: start;

  cursor: pointer;
  background-color: rgb(162, 161, 161);
  border-radius: 5px;
  color: white;
  padding: 8px;
}
li:focus {
  background-color: #7e0303;
}
.drink-title {
  font-size: 1.3rem;
  margin-left: 8px;
}
.drink-other {
  margin-left: 8px;
  color: rgb(206, 203, 203);
}
</style>
