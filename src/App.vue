<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid px-5">
      <a class="navbar-brand" href="#"
        ><img src="./assets/logo.png" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav px-5">
          <li class="nav-item">
            <router-link to="/" class="nav-link active"
              ><b>Upcoming</b></router-link
            >
          </li>

          <li class="nav-item">
            <router-link to="/Populaire" class="nav-link"
              ><b>Populaire</b></router-link
            >
          </li>

          <li class="nav-item">
            <router-link to="/Watchlist" class="nav-link"
              >watchlist
              <b><i class="bi bi-collection-play"></i></b></router-link
            >
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link"
              >
              <b>About</b></router-link
            >
          </li>

          <li class="nav-item">
            <router-link to="/Contact" class="nav-link"
              ><b>Contact</b></router-link
            >
          </li>
        </ul>
      
      </div>
    </div>
  </nav>
  <div class="row">
    <div class="mt-5 py-5" v-if="loading">
      <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
  <router-view />

  <footer>
    <div class="row">
      <div class="col">
        <div class="container-fluid py-5">
          <h5>Ghassen Ahmed DSI22 <i class="fa-regular fa-copyright"></i></h5>
          <p>
            Hi! I'm Ghassen. I was born in Bizerte, Tunisia,<br />
            and now I’m studen bachelor IT at the higher institute of technology
            of Bizerte
          </p>
          <div class="social-media">
            <a href="" class=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href="" class=""><i class="fa-brands fa-twitter"></i></a>
            <a href="" class=""><i class="fa-brands fa-github"></i></a>
            <a href="" class=""><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="container-fluid py-5">
          <h5>
            Mohamed Rayen Ben Hassine DSI22
            <i class="fa-regular fa-copyright"></i>
          </h5>
          <p>
            Hi! I'm Mohamed. I was born in Bizerte, Tunisia,<br />
            and now I’m studen bachelor IT at the higher institute of technology
            of Bizerte
          </p>
          <div class="social-media">
            <a href="" class=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href="" class=""><i class="fa-brands fa-twitter"></i></a>
            <a href="" class=""><i class="fa-brands fa-github"></i></a>
            <a href="" class=""><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },

  mounted() {
    setTimeout(() => (this.loading = false), 2000);
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  background: #cd0753;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  position: fixed !important;
  width: 100%;
  z-index: 999;
}
img {
  width: 100px;
}
a {
  color: #eeeeee !important;
  font-size: 20px !important;
  margin-right: 20px;
}
button {
  color: #eeeeee;
}
.recherche {
  margin-left: 138px;
}
footer {
  background: #cd0753;
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
  border-top: solid 20px #9b0941b6;
}
footer h5,
p {
  color: #eeeeee;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 5px;
}
bold {
  font-weight: 900;
}
.nav-item {
  font-weight: 300;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
