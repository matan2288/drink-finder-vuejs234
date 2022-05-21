<template>
  <form @submit.prevent="evokeSearchBtn">
    <div class="input-group mb-3 w-50 mx-auto">
      <input
        type="text"
        class="form-control"
        placeholder="Drink's Name"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        v-model="searchBarText"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          id="button-addon2"
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  </form>

  <div class="old-results-container-parent">
    <div v-for="oldSearch in PreviousSearches">
      <button
        @click="evokePreviousResults(oldSearch)"
        type="button"
        class="btn btn-secondary btn-sm mt-1 sbtn"
      >
        {{ oldSearch }}
      </button>
    </div>
  </div>
  <button
    @click="clearPreviousResults(PreviousSearches)"
    class="btn btn-danger"
  >
    Clear Previous Results
  </button>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

//?Get actions - mapActions>Implement them into methods

export default {
  name: "SearchBarContainer",

  data() {
    return {
      searchBarText: "",
      PreviousSearches: [],
    };
  },

  methods: {
    evokeSearchBtn() {
      if (!this.searchBarText) {
        alert("Please Type Something!");
        return;
      }
      this.PreviousSearches.push(this.searchBarText);
      localStorage.setItem("KEY", JSON.stringify(this.PreviousSearches));

      this.$store.commit(
        "setTheStateToUsersSearchTextMutation",
        this.searchBarText
      );
    },

    clearPreviousResults() {
      localStorage.setItem("KEY", JSON.stringify([]));
      const updatedCleanArray = JSON.parse(localStorage.getItem("KEY"));
      if (updatedCleanArray) {
        this.PreviousSearches = updatedCleanArray;
      }
    },
    evokePreviousResults(oldSearch) {
      this.$store.commit("setTheStateToUsersSearchTextMutation", oldSearch);
    },
  },

  computed: {
    ...mapState({
      userDrinkSearchState: (state) => state.userDrinkSearchState,
    }),
  },

  mounted() {
    const saved = JSON.parse(localStorage.getItem("KEY"));
    if (saved) {
      this.PreviousSearches = saved;
    }
  },
};
</script>

<style>
.old-results-container-parent {
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  min-height: 50px;
  width: 40%;
  margin: auto;
  /* grid ghoes here */
}

.sbtn {
  margin: 5px;
}
</style>
