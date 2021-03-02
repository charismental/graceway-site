/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    feedbackLoading: false,
    mySongs: {
      rated: [],
      favorites: [],
    },
  },
  mutations: {
    SET_FEEDBACK_LOADING(_state, _status) {
      _state.feedbackLoading = _status;
    },
    INITIALIZE_STORE(_state) {
      if (localStorage.getItem('mySongs')) {
        const stored = JSON.parse(localStorage.getItem('mySongs'));
        _state.mySongs = { ...stored };
      }
    },
    ADD_SONG_TO_FAVORITES(_state, _songObj) {
      if (!_state.mySongs.favorites.some((song) => song.songid === _songObj.songid)) {
        _state.mySongs.favorites.push(_songObj);
      }
    },
    REMOVE_SONG_FROM_FAVORITES(_state, _songId) {
      const filtered = [..._state.mySongs.favorites].filter((song) => song.songid !== _songId);
      _state.mySongs.favorites = filtered;
    },
    TOGGLE_SONG_RATING(_state, { songId, rating }) {
      if (_state.mySongs.rated.some((song) => song.songid === songId)) {
        const myRated = [..._state.mySongs.rated];
        const ratedIndex = myRated.findIndex((song) => song.songid === songId);
        if (ratedIndex !== -1) {
          if (myRated[ratedIndex].rating !== rating) {
            myRated[ratedIndex].rating = rating;
            _state.mySongs.rated = myRated;
          }
        }
      } else {
        _state.mySongs.likes.push({ songid: songId, rating });
      }
    },
  },
  actions: {
    toggleFavorite({ state, commit }, songObj) {
      const songId = songObj.songid;
      const url = `https://gwr-node.herokuapp.com/api/song/${songId}`;
      commit('SET_FEEDBACK_LOADING', true);
      if (state.mySongs.favorites.some((song) => song.songid === songId)) {
        commit('REMOVE_SONG_FROM_FAVORITES', songId);
        axios.post(url, { unfavorite: true })
          .then((res) => {
            if (res?.data?.songid) {
              // eslint-disable-next-line no-console
              console.log('unfavorited successfully');
            } else if (res?.data?.message) {
              // eslint-disable-next-line no-console
              console.log(res.data.message);
            }
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err.message);
          })
          .finally(() => {
            commit('SET_FEEDBACK_LOADING', false);
          });
      } else {
        const mapped = {
          songid: songObj.songid,
          title: songObj.title,
          artist: songObj.artist,
          album: songObj.album,
          picture: songObj.picture,
        };
        commit('ADD_SONG_TO_FAVORITES', mapped);
        axios.post(url, { favorite: true })
          .then((res) => {
            if (res?.data?.songid) {
              // eslint-disable-next-line no-console
              console.log('unfavorited successfully');
            } else if (res?.data?.message) {
              // eslint-disable-next-line no-console
              console.log(res.data.message);
            }
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err.message);
          })
          .finally(() => {
            commit('SET_FEEDBACK_LOADING', false);
          });
      }
    },
  },
  modules: {
  },
});
