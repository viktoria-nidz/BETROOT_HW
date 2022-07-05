const movieItem = {
  props: ["movie"],
  methods: {
    getMovieInfo(id) {
      this.$emit("getMovieInfo", id);
    },
    addToFavorites(id) {
      this.$emit("addToFavorites", id);
    },
  },
  template: "#movieItem",
};

const App = {
  data() {
    return {
      API_KEY: "bf99cef6",
      search: "",
      year: "",
      movieType: "Choose type",
      movieList: [],
      movieInfo: {},
      showModal: false,
      showFavorite: false,
      favorites: [],

      storage: {},
    };
  },
  created() {
    const localFavoritesList = localStorage.getItem("favorites list");
    this.storage = JSON.parse(localFavoritesList);
    localFavoritesList;
    for (key in this.storage) {
      this.favorites.push(this.storage[key]);
    }
  },
  components: {
    movieItem,
  },
  methods: {
    searchMovies() {
      if (
        this.search !== "" &&
        this.year !== "" &&
        this.movieType !== "Choose type"
      ) {
        // Make a request for a user with a given ID
        axios
          .get(
            `http://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&y=${this.year}&type=${this.movieType}`
          )
          .then((response) => {
            this.movieList = response.data.Search;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      } else if (this.search !== "" && this.year !== "") {
        // Make a request for a user with a given ID
        axios
          .get(
            `http://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&y=${this.year}`
          )
          .then((response) => {
            this.movieList = response.data.Search;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      } else if (this.search !== "" && this.movieType !== "Choose type") {
        // Make a request for a user with a given ID
        axios
          .get(
            `http://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&type=${this.movieType}`
          )
          .then((response) => {
            this.movieList = response.data.Search;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      } else if (this.search !== "") {
        // Make a request for a user with a given ID
        axios
          .get(
            `http://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}`
          )
          .then((response) => {
            this.movieList = response.data.Search;
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      }
    },
    showMovieInfo() {
      this.showModal = true;
    },
    showFavoriteList() {
      this.showFavorite = true;
    },
    getMovieInfo(movieID) {
      // Make a request for a user with a given ID
      axios
        .get(
          `http://www.omdbapi.com/?apikey=${this.API_KEY}&plot=full&i=${movieID}`
        )
        .then((response) => {
          this.movieInfo = response.data;
          this.showMovieInfo();
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },

    addToFavorites(movieID) {
      const movieIndex = this.movieList.findIndex(
        (el) => el.imdbID === movieID
      );
      const movieIndex2 = this.favorites.findIndex(
        (el) => el.imdbID === movieID
      );

      if (movieIndex2 === -1) {
        this.favorites.push(this.movieList[movieIndex]);
      } else {
        this.favorites.splice(movieIndex2, 1);
      }
      localStorage.setItem("favorites list", JSON.stringify(this.favorites));
    },
    moviesAndFavorites() {
      let movieArr = [];
      this.movieList.forEach((el) => {
        let findFav = this.favorites.find((movie) => {
          return el.imdbID === movie.imdbID;
        });
        el.inFav = findFav !== undefined ? true : false;
        movieArr.push(el);
      });
      return movieArr;
    },
  },
};
Vue.createApp(App).mount("#app");
