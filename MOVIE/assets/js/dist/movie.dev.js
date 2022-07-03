"use strict";

var App = {
  data: function data() {
    return {
      API_KEY: "bf99cef6",
      search: "",
      movieList: [],
      movieInfo: {},
      showModal: false
    };
  },
  methods: {
    searchMovies: function searchMovies() {
      var _this = this;

      if (this.search !== "") {
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
    }
  }
};
Vue.createApp(App).mount("#app");