<template>
  <div class='main-content'>
    <div class='container'>
      <AddPlaylist />
      <ShowPlaylists />
    </div>
    <div class='bottom-line'>
      <span>Your lovely music in one place</span>
      <a class='logo' href='index.html'>musicApp</a>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  position: relative;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  overflow: hidden;
}
@media (min-width: 992px) {
  .main-content {
    height: 100vh;
  }
}
.main-content:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
}
.main-content .container {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 10px 10px 70px 10px;
}
@media (min-width: 992px) {
  .main-content .container {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 15px 35px 50px;
  }
}
ul {
  padding: 0;
  list-style: none;
  margin: 0;
}
li {
  margin: 0;
}
.title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  max-width: 400px;
  margin: 0 auto;
}
.title p {
  margin: 0;
}
.bottom-line {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #000;
  color: #42a5c0;
  z-index: 1;
  width: 100%;
  padding: 10px 0;
  font-size: 12px;
}
.bottom-line .logo {
  font-family: 'Kaushan Script', cursive;
  color: #fdfdfd;
  font-size: 18px;
  text-decoration: none;
  margin: 0 5px;
}
</style>


<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

import AddPlaylist from './playlists/AddPlaylist';
import ShowPlaylists from './playlists/ShowPlaylists';
export default {
  name: 'Playlists',
  components: {
    AddPlaylist: AddPlaylist,
    ShowPlaylists: ShowPlaylists
  }
};
</script>
