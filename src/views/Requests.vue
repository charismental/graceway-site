<template>
  <div class="requests">
    <v-dialog v-model="openSongInfo" width="fit-content">
      <song-info-card
        :isMobile="isMobile"
        :song="activeSong"
        :favorited="songIsFavorited(activeSong)"
        :songPicture="itemImg(activeSong)"
        @make-request="makeRequest"
        @toggle-favorite="toggleFavorite"
        @close-info="closeSongInfo"
      ></song-info-card>
    </v-dialog>
    <v-card class="mx-auto mt-8 mb-8" width="600" max-height="800">
      <v-card-text class="px-16">
        <v-text-field
          placeholder="Enter title or artist name..."
          v-model="searchTerm"
        ></v-text-field>
      </v-card-text>
      <v-card-text style="position: relative">
        <v-overlay absolute :value="searchLoading">
          <v-progress-circular indeterminate></v-progress-circular>
        </v-overlay>
        <v-list v-if="searchResults.length" height="600" style="overflow-y: auto">
          <v-list-item v-for="item in searchResults" :key="item.songid" class="song_list">
            <v-avatar class="mr-2">
              <v-img :src="itemImg(item)"></v-img>
            </v-avatar>
            <v-list-item-content>
              <v-list-item-title
                style="cursor: pointer"
                @click="viewSongInfo(item)"
                id="list_link"
                :style="isMobile ? 'font-size:0.8rem;' : 'font-size:1.1rem'"
              >
                {{ item.title }}
              </v-list-item-title>
              <v-tooltip bottom v-if="!isMobile">
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item-subtitle
                    v-on="on"
                    v-bind="attrs"
                    style="cursor: pointer"
                    @click="searchTerm = item.artist"
                    :style="isMobile ? 'font-size:0.8rem;' : 'font-size:1.1rem'"
                  >
                    {{ item.artist }}
                  </v-list-item-subtitle>
                </template>
                <span>Search Artist {{ item.artist }}?</span>
              </v-tooltip>
              <v-list-item-subtitle
                v-else
                :style="isMobile ? 'font-size:0.8rem;' : 'font-size:1.1rem'"
              >
                {{ item.artist }}
              </v-list-item-subtitle>
              <v-list-item-subtitle style="cursor: pointer" class="text-caption">
                {{ item.album }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card v-if="recentSearches.length" width="600" class="mx-auto" elevation="0">
      <v-card-title>Recently Searched</v-card-title>
      <v-divider inset></v-divider>
      <v-row justify="space-around">
        <v-col v-for="(term, i) in recentSearches" :key="i">
          <v-chip-group column>
            <v-chip
              @click="searchTerm = term.search"
              :color="term.color"
              class="ma-2"
              text-color="white"
              >{{ term.search }}</v-chip
            >
          </v-chip-group>
        </v-col>
      </v-row>
    </v-card>
    <v-snackbar
      :timeout="-1"
      :color="requestHeader === 'Request Successful' ? 'success' : 'warning'"
      v-model="snackbar"
    >
      <div class="white--text text-h3">{{ requestHeader }}</div>
      <div class="black--text text-body-2" v-if="requestBody">{{ requestBody }}</div>
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="closeSnackbar"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import debounce from 'lodash.debounce';
import SongInfoCard from '../components/SongInfoCard.vue';

export default {
  name: 'Requests',
  data: () => ({
    openSongInfo: false,
    snackbar: false,
    activeSong: null,
  }),
  components: { SongInfoCard },
  watch: {
    recentSearches() {
      this.saveSearch();
    },
    searchTerm(val) {
      if (val.length >= 3) {
        this.search(val);
      }
    },
    requestHeader(val) {
      if (val) {
        this.snackbar = true;
        setTimeout(() => {
          this.closeSnackbar();
          this.closeSongInfo();
        }, 4000);
      }
    },
  },
  computed: {
    recentSearches: {
      get() {
        return this.$store.state.recentSearches;
      },
      set(recentSearches) {
        this.$store.dispatch('setRecentSearches', recentSearches);
      },
    },
    searchTerm: {
      get() {
        return this.$store.state.searchTerm;
      },
      set(searchTerm) {
        this.$store.dispatch('setSearchTerm', searchTerm);
      },
    },
    searchResults() {
      return this.$store.state.searchResults;
    },
    requestHeader() {
      return this.$store.state.requestHeader;
    },
    requestBody() {
      return this.$store.state.requestBody;
    },
    searchLoading() {
      return this.$store.state.searchLoading;
    },
    requestLoading() {
      return this.$store.state.requestLoading;
    },
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  methods: {
    toggleFavorite(songObj) {
      this.$store.dispatch('toggleFavorite', songObj);
    },
    songIsFavorited(songId) {
      return this.$store.state.mySongs?.favorites.some((song) => song.songid === songId);
    },
    saveSearch() {
      const parsed = JSON.stringify(this.recentSearches);
      localStorage.setItem('recentSearches', parsed);
    },
    itemImg(item) {
      const url = 'https://gracewayradio.com/artwork/';
      if (item) {
        return url + item?.picture;
      }
      if (this.loadingSongInfo) {
        return `${url}loading.gif`;
      }
      return `${url}customMissing.jpg`;
    },
    viewSongInfo(songObj) {
      this.activeSong = songObj;
      this.openSongInfo = true;
    },
    closeSongInfo() {
      this.openSongInfo = false;
      this.activeSong = null;
    },
    closeSnackbar() {
      this.snackbar = false;
      this.$store.commit('SET_REQUEST_STRINGS', { body: '', header: '' });
    },
    fetchSongs() {
      this.$store.dispatch('fetchSongs', this.searchTerm);
    },
    makeRequest(id) {
      if (this.requestLoading) {
        return;
      }
      const requestObj = {
        songId: id,
        searchTerm: this.searchTerm,
      };
      this.$store.dispatch('makeRequest', requestObj).then((response) => {
        if (response?.requestHeader) {
          setTimeout(() => {
            this.closeSongInfo();
          }, 3000);
        }
      });
    },
  },
  mounted() {
    this.search = debounce(this.fetchSongs.bind(this), 1000);
    if (localStorage.getItem('recentSearches')) {
      const searches = JSON.parse(localStorage.getItem('recentSearches'));
      const filteredSearches = [];
      searches.forEach((search) => {
        const now = new Date();
        if (now.getTime() > search.expiry) {
          localStorage.removeItem(search);
        } else {
          filteredSearches.push(search);
        }
      });
      this.recentSearches = filteredSearches;
    }
  },
};
</script>

<style lang="scss" scoped>
.song_list {
  background: #eee;

  &:first-child {
    border-top: 1px solid black;
  }
  &:nth-child(even) {
    background: #f8f8f8;
  }
  &:hover {
    background: #dbdbdb;
  }
}
#list_link {
  transition: all 0.5 ease-in-out;
  &:hover {
    color: blue !important;
    font-size: 1.1em;
  }
}
</style>
