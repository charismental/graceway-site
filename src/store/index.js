/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    feedbackLoading: false,
    loadingSongInfo: false,
    requestLoading: false,
    searchLoading: false,
    radioIsPlaying: false,
    openSongInfo: false,
    activeSong: null,
    songInfo: {},
    history: [],
    queue: [],
    mySongs: {
      rated: [],
      favorites: [],
    },
    requestBody: '',
    requestHeader: '',
    recentSearches: [],
    searchResults: [],
    features: [],
    blogs: [],
    searchTerm: '',
  },
  mutations: {
    RADIO_IS_PLAYING(_state, _radioIsPlaying) {
      _state.radioIsPlaying = _radioIsPlaying;
    },
    SET_ACTIVE_SONG(_state, _activeSong) {
      _state.activeSong = _activeSong;
    },
    SET_SONG_OBJECT(_state, _song) {
      _state.songInfo = _song;
    },
    SET_SONG_HISTORY(_state, _history) {
      _state.history = _history;
    },
    SET_SONG_QUEUE(_state, _queue) {
      _state.queue = _queue;
    },
    SET_SONG_LOADING(_state, _load) {
      _state.loadingSongInfo = _load;
    },
    SET_BLOG_RESULTS(_state, _blogs) {
      _state.blogs = _blogs;
    },
    SET_FEATURES_RESULTS(_state, _features) {
      _state.features = _features;
    },
    SET_SEARCH_RESULTS(_state, _searchResults) {
      _state.searchResults = _searchResults;
    },
    SET_RECENT_SEARCHES(_state, _recentSearches) {
      _state.recentSearches = _recentSearches;
    },
    SET_REQUEST_STRINGS(_state, _requestStrings) {
      _state.requestBody = _requestStrings.body;
      _state.requestHeader = _requestStrings.header;
    },
    SET_SEARCH_TERM(_state, _searchTerm) {
      _state.searchTerm = _searchTerm;
    },
    SET_FEEDBACK_LOADING(_state, _status) {
      _state.feedbackLoading = _status;
    },
    SET_REQUEST_LOADING(_state, _status) {
      _state.requestLoading = _status;
    },
    SET_SEARCH_LOADING(_state, _status) {
      _state.searchLoading = _status;
    },
    INITIALIZE_STORE(_state) {
      if (localStorage.getItem('mySavedSongs') && !Array.isArray(localStorage.getItem('mySavedSongs'))) {
        const stored = JSON.parse(localStorage.getItem('mySavedSongs'));
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
  getters: {
    itemImg: (state) => (songObj) => {
      const url = 'https://gracewayradio.com/artwork/';
      if (songObj?.picture) {
        return url + songObj.picture;
      }
      if (state.loadingSongInfo) {
        return `${url}loading.gif`;
      }
      return `${url}customMissing.jpg`;
    },
  },
  actions: {
    RadioIsPlaying({ commit }, value) {
      commit('RADIO_IS_PLAYING', value);
    },
    viewSongInfo({ commit }, songObj) {
      commit('SET_ACTIVE_SONG', songObj);
      // set state to open the dialog?
    },
    getSongInfo({ commit }) {
      commit('SET_SONG_LOADING', true);
      axios
        .get('https://cascadechapel.com/samHTMweb/info.json')
        .then((res) => {
          if (res.data.song_info) {
            commit('SET_SONG_OBJECT', res.data.song_info);
            commit('SET_SONG_HISTORY', res.data.song_queue);
            commit('SET_SONG_QUEUE', res.data.song_history);
          }
          commit('SET_SONG_LOADING', false);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
          commit('SET_SONG_LOADING', false);
        });
    },
    getBlogs({ commit }) {
      const url = 'https://gwrapi.herokuapp.com/blogs';
      axios
        .get(url)
        .then((res) => {
          if (res?.data && Array.isArray(res.data)) {
            const blogObjects = res.data;
            commit('SET_BLOG_RESULTS', blogObjects);
          } // else ??
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    },
    getFeatures({ commit }) {
      const url = 'https://gwrapi.herokuapp.com/featurette';
      axios
        .get(url)
        .then((res) => {
          if (res && res.data && Array.isArray(res.data)) {
            const featuresObj = res.data.map((feature) => ({
              image: feature.image,
              content: feature.content,
              link: feature.link,
              startPublish: feature.start_publish_date,
              endPublish: feature.end_publish_date,
            }));
            // const features = [...state.features, ...featuresObj];
            commit('SET_FEATURES_RESULTS', featuresObj);
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    },
    fetchSongs({ commit }, searchTerm) {
      commit('SET_SEARCH_LOADING', true);
      const url = `https://gwr-node.herokuapp.com/api/songs?search=${searchTerm}`;

      axios
        .get(url)
        .then((res) => {
          if (res?.data && Array.isArray(res.data)) {
            commit('SET_SEARCH_RESULTS', res.data);
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        })
        .finally(() => {
          commit('SET_SEARCH_LOADING', false);
        });
    },
    makeRequest({ commit, state }, { songId, searchTerm }) {
      commit('SET_REQUEST_LOADING', true);
      const url = `https://gwr-node.herokuapp.com/api/request?songId=${songId}`;
      const parser = new DOMParser();
      axios
        .get(url)
        .then((res) => {
          const doc = parser.parseFromString(res.data, 'text/html');
          const responseElement = doc.getElementById('content');
          const requestHeader = responseElement.children[0].innerHTML;
          const requestBody = responseElement.children[1].innerHTML.replace('<br>', '');
          if (requestHeader === 'Request Successful') {
            const now = new Date();
            const recentRequestObj = {
              search: searchTerm,
              color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
              expiry: now.getTime() + 10800000,
            };
            const notGunnaDoIt = state.recentSearches.some(
              (term) => term.search === recentRequestObj.search,
            );
            if (!notGunnaDoIt) {
              const recentSearches = [...state.recentSearches, recentRequestObj];
              commit('SET_RECENT_SEARCHES', recentSearches);
            }
            commit('SET_SEARCH_TERM', '');
            commit('SET_SEARCH_RESULTS', []);
          }
          const requestStrings = {
            header: requestHeader,
            body: requestBody,
          };
          commit('SET_REQUEST_STRINGS', requestStrings);
          return requestStrings;
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        })
        .finally(() => {
          commit('SET_REQUEST_LOADING', false);
        });
    },
    setSearchTerm({ commit }, searchTerm) {
      commit('SET_SEARCH_TERM', searchTerm);
    },
    toggleFavorite({ state, commit }, songObj) {
      const songId = songObj.songid;
      const url = `https://gwr-node.herokuapp.com/api/song/${songId}`;
      commit('SET_FEEDBACK_LOADING', true);
      if (state.mySongs.favorites.some((song) => song.songid === songId)) {
        commit('REMOVE_SONG_FROM_FAVORITES', songId);
        axios.post(url, { feedback: { unfavorite: true } })
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
        axios.post(url, { feedback: { favorite: true } })
          .then((res) => {
            if (res?.data?.songid) {
              // eslint-disable-next-line no-console
              console.log('Favorited Successfully');
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
    setRecentSearches({ commit }, recentSearches) {
      commit('SET_RECENT_SEARCHES', recentSearches);
    },
  },
});
