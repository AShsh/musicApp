<template>
  <div class='sidebar'>
    <div class='logo-holder'>
      <a class='logo' href='index.html'>musicApp</a>
    </div>
    <div class='sidebar-content'>
      <SelectorPlaylist />
      <AddSong />
      <ShowSongs />
    </div>
        
  </div>
</template>

<style scoped>
.sidebar {
  left: 0;
  width: 100%;
  float: left;
  color: #fdfdfd;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgba(65, 165, 192, 0.6);
  overflow-y: auto;
  overflow-x: hidden;
}
@media (min-width: 992px) {
  .sidebar {
    border-right: 1px solid #fdfdfd;
    width: 30%;
    min-width: 400px;
    height: 100vh;
  }
}
.logo-holder {
  text-align: center;
  padding: 15px;
  margin-bottom: 35px;
}
.logo {
  font-family: "Kaushan Script", cursive;
  color: #fdfdfd;
  font-size: 30px;
  text-decoration: none;
}
.logo:after {
  content: "";
  position: absolute;
  bottom: -10px;
  width: 60%;
}
.sidebar-content {
  padding: 0 15px;
}
.row {
  margin-bottom: 45px;
}
.songs-list {
  list-style: none;
  padding: 0;
}
.songs-list li {
  margin: 0 0 25px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>


<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

import AddSong from "./songs/AddSong";
import ShowSongs from "./songs/ShowSongs";
import SelectorPlaylist from "./songs/SelectorPlaylist";

export default {
  name: "Songs",
  components: {
    AddSong: AddSong,
    ShowSongs: ShowSongs,
    SelectorPlaylist: SelectorPlaylist
  }
};
</script>
