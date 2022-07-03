const App = {
  data() {
    return {
      API_KEY: "bf99cef6",
      search: "",
      movieList: [],
      movieInfo: {},
      showModal:false,

    };
  },
  methods: {
    searchMovies() {
      if (this.search !== "") {
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
    getMovieInfo(movieID) {
      // Make a request for a user with a given ID
      axios
        .get(`http://www.omdbapi.com/?apikey=${this.API_KEY}&plot=full&i=${movieID}`)
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
  },
};
Vue.createApp(App).mount("#app");
