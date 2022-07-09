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
      movieType: "Type",
      movieList: [],
      movieInfo: {},
      showModal: false,
      showFavorite: false,
      favorites: [],
      totalPages: 0,
      page: 1,
      hamburgerControl: "disable",
      sideBlockControl: "closed",
      theme: "dark",
      perPage: 10,
      pageCutLow: 1,
      pageCutHigh: 1
    };
  },
  created: function created() {
    this.favorites = JSON.parse(localStorage.getItem("favorites list")) || [];
  },
  components: {
    movieItem: movieItem
  },
  methods: {
    searchMovies: function searchMovies() {
      var _this = this;

      if (this.search !== "" && this.year !== "" && this.movieType !== "Choose type") {
        // Make a request for a user with a given ID
        axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&s=").concat(this.search, "&y=").concat(this.year, "&type=").concat(this.movieType, "&page=").concat(this.page)).then(function (response) {
          _this.totalPages = Math.ceil(response.data.totalResults / 10);
          _this.movieList = response.data.Search;
        })["catch"](function (error) {
          // handle error
          console.log(error);
        }).then(function () {// always executed
        });
      } else if (this.search !== "") {
        // Make a request for a user with a given ID
        axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&s=").concat(this.search, "&page=").concat(this.page)).then(function (response) {
          _this.totalPages = Math.ceil(response.data.totalResults / 10);
          _this.movieList = response.data.Search;
        })["catch"](function (error) {
          // handle error
          console.log(error);
        }).then(function () {// always executed
        });
      } else if (this.search !== "" && this.year !== "") {
        // Make a request for a user with a given ID
        axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&s=").concat(this.search, "&y=").concat(this.year, "&page=").concat(this.page)).then(function (response) {
          _this.totalPages = Math.ceil(response.data.totalResults / 10);
          _this.movieList = response.data.Search;
        })["catch"](function (error) {
          // handle error
          console.log(error);
        }).then(function () {// always executed
        });
      } else if (this.search !== "" && this.movieType !== "Choose type") {
        // Make a request for a user with a given ID
        axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&s=").concat(this.search, "&type=").concat(this.movieType, "&page=").concat(this.page)).then(function (response) {
          _this.totalPages = Math.ceil(response.data.totalResults / 10);
          _this.movieList = response.data.Search;
        })["catch"](function (error) {
          // handle error
          console.log(error);
        }).then(function () {// always executed
        });
      }
    },
    getMovieInfo: function getMovieInfo(movieID) {
      var _this2 = this;

      // Make a request for a user with a given ID
      axios.get("https://www.omdbapi.com/?apikey=".concat(this.API_KEY, "&plot=full&i=").concat(movieID)).then(function (response) {
        _this2.movieInfo = response.data;

        _this2.showMovieInfo();
      })["catch"](function (error) {
        // handle error
        console.log(error);
      }).then(function () {// always executed
      });
    },
    showMovieInfo: function showMovieInfo() {
      this.showModal = true;
    },
    showFavoriteList: function showFavoriteList() {
      this.showFavorite = true;
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
    },
    changeTheme: function changeTheme() {
      if (this.theme === "dark") {
        this.theme = "light";
      } else {
        this.theme = "dark";
      }

      this.setCookie("my-color-theme", this.theme);
    },
    goToPage: function goToPage(pageNum) {
      this.page = pageNum;
      this.searchMovies();
    },
    // COOKIES START
    setCookie: function setCookie(name, value, days) {
      var expires = "";

      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }

      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie: function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == " ") {
          c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }

      return null;
    },
    eraseCookie: function eraseCookie(name) {
      document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },
    // COOKIIES END
    burgerStates: function burgerStates() {
      if (this.hamburgerControl === "disable") {
        this.hamburgerControl = "is-active";
      } else {
        this.hamburgerControl = "disable";
      }

      if (this.sideBlockControl === "closed") {
        this.sideBlockControl = "open";
      } else {
        this.sideBlockControl = "closed";
      }
    }
  }
};
Vue.createApp(App).mount("#app");