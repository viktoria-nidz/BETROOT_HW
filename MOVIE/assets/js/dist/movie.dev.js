"use strict";

var movieItem = {
  props: ["movie"],
  methods: {
    getMovieInfo: function getMovieInfo(id) {
      this.$emit("getMovieInfo", id);
    },
    addToFavorites: function addToFavorites(id) {
      this.$emit("addToFavorites", id);
    }
  },
  template: "#movieItem"
};
var App = {
  data: function data() {
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
      storage: {}
    };
  },
  created: function created() {
    var localFavoritesList = localStorage.getItem("favorites list");
    this.storage = JSON.parse(localFavoritesList);
    localFavoritesList;

    for (key in this.storage) {
      this.favorites.push(this.storage[key]);
    }
  },
  components: {
    movieItem: movieItem
  },
  methods: {
    searchMovies: function searchMovies() {
      var _this = this;

      if (this.search !== "" && this.year !== "" && this.movieType !== "Choose type") {
        // Make a request for a user with a given ID
        axios.get("http://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&s=").concat(this.search, "&y=").concat(this.year, "&type=").concat(this.movieType)).then(function (response) {
          _this.movieList = response.data.Search;
        })["catch"](function (error) {
          // handle error
          console.log(error);
        }).then(function () {// always executed
        });
      } else if (this.search !== "" && this.year !== "") {
        // Make a request for a user with a given ID
        axios.get("http://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&s=").concat(this.search, "&y=").concat(this.year)).then(function (response) {
          _this.movieList = response.data.Search;
        })["catch"](function (error) {
          // handle error
          console.log(error);
        }).then(function () {// always executed
        });
      } else if (this.search !== "" && this.movieType !== "Choose type") {
        // Make a request for a user with a given ID
        axios.get("http://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&s=").concat(this.search, "&type=").concat(this.movieType)).then(function (response) {
          _this.movieList = response.data.Search;
        })["catch"](function (error) {
          // handle error
          console.log(error);
        }).then(function () {// always executed
        });
      } else if (this.search !== "") {
        // Make a request for a user with a given ID
        axios.get("http://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&s=").concat(this.search)).then(function (response) {
          _this.movieList = response.data.Search;
        })["catch"](function (error) {
          // handle error
          console.log(error);
        }).then(function () {// always executed
        });
      }
    },
    showMovieInfo: function showMovieInfo() {
      this.showModal = true;
    },
    showFavoriteList: function showFavoriteList() {
      this.showFavorite = true;
    },
    getMovieInfo: function getMovieInfo(movieID) {
      var _this2 = this;

      // Make a request for a user with a given ID
      axios.get("http://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&plot=full&i=").concat(movieID)).then(function (response) {
        _this2.movieInfo = response.data;

        _this2.showMovieInfo();
      })["catch"](function (error) {
        // handle error
        console.log(error);
      }).then(function () {// always executed
      });
    },
    addToFavorites: function addToFavorites(movieID) {
      var movieIndex = this.movieList.findIndex(function (el) {
        return el.imdbID === movieID;
      });
      var movieIndex2 = this.favorites.findIndex(function (el) {
        return el.imdbID === movieID;
      });

      if (movieIndex2 === -1) {
        this.favorites.push(this.movieList[movieIndex]);
      } else {
        this.favorites.splice(movieIndex2, 1);
      }

      localStorage.setItem("favorites list", JSON.stringify(this.favorites));
    },
    moviesAndFavorites: function moviesAndFavorites() {
      var _this3 = this;

      var movieArr = [];
      this.movieList.forEach(function (el) {
        var findFav = _this3.favorites.find(function (movie) {
          return el.imdbID === movie.imdbID;
        });

        el.inFav = findFav !== undefined ? true : false;
        movieArr.push(el);
      });
      return movieArr;
    }
  }
};
Vue.createApp(App).mount("#app");