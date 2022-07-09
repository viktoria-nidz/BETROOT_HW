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
      pageCutHigh: 1,
    };
  },
  created() {
    this.favorites = JSON.parse(localStorage.getItem("favorites list")) || [];
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
            `https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&y=${this.year}&type=${this.movieType}&page=${this.page}`
          )
          .then((response) => {
            this.totalPages = Math.ceil(response.data.totalResults / 10);
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
            `https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&page=${this.page}`
          )
          .then((response) => {
            this.totalPages = Math.ceil(response.data.totalResults / 10);
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
            `https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&y=${this.year}&page=${this.page}`
          )
          .then((response) => {
            this.totalPages = Math.ceil(response.data.totalResults / 10);
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
            `https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&type=${this.movieType}&page=${this.page}`
          )
          .then((response) => {
            this.totalPages = Math.ceil(response.data.totalResults / 10);
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

    getMovieInfo(movieID) {
      // Make a request for a user with a given ID
      axios
        .get(
          `https://www.omdbapi.com/?apikey=${this.API_KEY}&plot=full&i=${movieID}`
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
    showMovieInfo() {
      this.showModal = true;
    },
    showFavoriteList() {
      this.showFavorite = true;
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
    changeTheme() {
      if (this.theme === "dark") {
        this.theme = "light";
      } else {
        this.theme = "dark";
      }
      this.setCookie("my-color-theme", this.theme);
    },
    goToPage(pageNum) {
      this.page = pageNum;
      this.searchMovies();
    },
    // COOKIES START
    setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
    eraseCookie(name) {
      document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },
    // COOKIIES END
    burgerStates() {
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
    },
  },
};
Vue.createApp(App).mount("#app");
