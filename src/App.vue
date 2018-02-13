<template>
  <div id='app' class='music-app'>
      <Songs />
      <Playlists />
  </div>
</template>

<style>
.music-app {
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

@media (min-width: 992px) {
  .music-app {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    background-image: url(./assets/img-01.jpeg);
    background-position: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
/* global */
h1,
h2,
h3,
h4 {
  text-transform: uppercase;
  color: #4a4a4a;
  font-family: "Oswald", sans-serif;
}

.main-content h1,
.main-content h2,
.main-content h3,
.main-content h4 {
  color: #42a5c0;
}

h2 i {
  margin-right: 5px;
}

a {
  text-decoration: none;
}

input[type="submit"],
button,
.btn {
  font-weight: 700;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  margin-bottom: 10px;
  background-color: transparent;
  color: #fdfdfd;
  border: 1px solid #fdfdfd;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
}

.sidebar .btn:hover,
.sidebar button:hover {
  background-color: #fdfdfd;
  color: #42a5c0;
}

.main-content input[type="submit"]:hover,
.main-content btn:hover,
.main-content button:hover {
  background-color: #42a5c0;
  border-color: #42a5c0;
}

.sidebar .btn:focus,
.sidebar button:focus,
.main-content input[type="submit"]:focus,
.main-content btn:focus,
.main-content button:focus {
  opacity: 0.8;
}

input {
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  padding: 10px;
  border: 1px solid #fdfdfd;
  border-radius: 4px;
  color: #fdfdfd;
  background-color: transparent;
  margin-bottom: 20px;
  font-size: 1em;
}

label {
  color: #4a4a4a;
  font-family: "Oswald", sans-serif;
  margin: 10px;
}

input:focus {
  border-color: #4a4a4a;
  outline: none;
}
/* select */
.v-select .dropdown-toggle {
  border: 1px solid #fdfdfd;
  color: #fdfdfd;
}

.v-select .dropdown-menu {
  background: #42a5c0;
  display: block !important;
  border: 1px solid #fdfdfd;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}

.v-select .open-indicator:before {
  border-color: #fdfdfd;
}

.v-select .dropdown-toggle .clear {
  line-height: 0;
}

label,
input {
  display: block;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>

<script>
import Songs from "@/components/Songs";
import Playlists from "@/components/Playlists";

export default {
  name: "App",
  components: {
    Songs: Songs,
    Playlists: Playlists
  }
};
</script>
