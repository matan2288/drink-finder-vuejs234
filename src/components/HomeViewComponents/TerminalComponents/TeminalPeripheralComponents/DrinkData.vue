<template>
  <div
    class="jumbotron w-100 no-drink-selected"
    v-if="!this.singleDrinkDataToDisplay.strDrink"
  >
    Click on a drink!
  </div>
  <div class="jumbotron w-100" v-if="this.singleDrinkDataToDisplay.strDrink">
    <img
      :src="this.singleDrinkDataToDisplay.strDrinkThumb"
      class="card-img-top w-25 mt-2 mb-2"
      alt="drinkImg"
      @click="toggleModal"
    />
    <h3>{{ this.singleDrinkDataToDisplay.strDrink }}</h3>
    <p style="font-weight: bold">
      Category: {{ this.singleDrinkDataToDisplay.strCategory }}
    </p>
    <p>Making Instructions:</p>
    <p>{{ this.singleDrinkDataToDisplay.strInstructions }}</p>
    <p style="font-weight: bold; color: #7e0303">
      Ingredients: {{ this.singleDrinkDataToDisplay.strIngredient1 }} |
      {{ this.singleDrinkDataToDisplay.strIngredient2 }} |
      {{ this.singleDrinkDataToDisplay.strIngredient3 }} |
      {{ this.singleDrinkDataToDisplay.strIngredient4 }} |
      {{ this.singleDrinkDataToDisplay.strIngredient5 }} |
    </p>

    <p>Date: {{ formatDate(this.singleDrinkDataToDisplay.dateModified) }}</p>

    <MyModal @close="toggleModal" :modalActive="modalActive">
      <div>
        <img
          :src="this.singleDrinkDataToDisplay.strDrinkThumb"
          class="card-img-top h-100 w-75"
          alt="drinkImg"
        />
      </div>
    </MyModal>
  </div>
</template>

<script>
import dayjs from "dayjs";
import MyModal from "./MyModal.vue";
import { ref } from "vue";

export default {
  name: "DrinkData",
  components: {
    MyModal,
  },

  data() {
    return {
      drinkData: [],
      formattedDate: [],
    };
  },
  props: {
    singleDrinkDataToDisplay: Object,
  },
  methods: {
    formatDate(dateString) {
      return dayjs(dateString).format("DD/MM/YYYY");
    },
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
  },
};
</script>

<style scoped>
img {
  cursor: pointer;
  border-radius: 5px;
  height: auto;
}
.no-drink-selected {
  font-size: 1.5rem;
  color: #7e0303;
  font-weight: bold;
  margin: auto;
}
</style>
