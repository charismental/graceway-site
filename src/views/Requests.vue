<template>
  <div class="requests">
    <v-dialog v-model="openSongInfo" width="fit-content">
      <v-card color="#1F7087" dark
      style="position: relative pa-2"
      :width="isMobile ? 'min-content': 'fit-content'"
      class="mx-auto">
        <v-overlay absolute v-if="$store.state.feedbackLoading">
          <v-progress-circular indeterminate></v-progress-circular>
        </v-overlay>
        <div
        :class="!isMobile ?
        'd-flex flex-no-wrap justify-space-between'
        :'d-flex flex-wrap-reverse justify-space-between'"
        >
          <div class="my-auto">
            <v-card-title :class="!isMobile ? 'mt-2' : 'order-2;'"
            :style="!isMobile ? '' : 'font-size:0.9em;'">{{
              activeSong && activeSong.title ? activeSong.title : ""
            }}</v-card-title>

            <v-card-subtitle :class="!isMobile ? '' : 'order-3'">{{
              activeSong && activeSong.artist ? activeSong.artist : ""
            }}</v-card-subtitle>

            <v-card-actions :class="!isMobile ? 'mb-2' : 'mb-2 order-4'">
              <v-btn @click="closeSongInfo"
              dark icon small>
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-btn
                class="text-capitalize"
                outlined
                rounded
                @click="makeRequest(activeSong.songid)"
                >Request Song</v-btn
              >
              <v-btn
              small icon @click="toggleFavorite(activeSong)">
                <v-icon
                  color="error"
                  v-if="
                    activeSong && activeSong.songid && songIsFavorited(activeSong.songid)
                  "
                  >mdi-heart</v-icon
                >
                <v-icon v-else>mdi-heart-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar :size="isMobile ? 270 : 160"
          tile :class="!isMobile ? 'ma-3' : 'order-1 mx-auto ma-3 pa-2'">
            <v-img v-if="activeSong" :src="itemImg(activeSong)"></v-img>
          </v-avatar>
        </div>
      </v-card>

      <!-- <song-info-card
      :isMobile="isMobile"
      :song="activeSong"
      :favorited="songIsFavorited(activeSong)"
      :songPicture="itemImg(activeSong)"
      @make-request="makeRequest(activeSong.songid)"
      @toggle-favorite="toggleFavorite(activeSong.songid)"
      @close-info="closeSongInfo"
      ></song-info-card> -->

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
import axios from 'axios';
// import SongInfoCard from '../components/SongInfoCard.vue';

export default {
  name: 'Requests',
  data: () => ({
    smallScreen: false,
    openSongInfo: false,
    searchTerm: '',
    recentSearches: [],
    searchResults: [],
    snackbar: false,
    songId: 1200,
    requestHeader: '',
    requestBody: '',
    requestLoading: false,
    searchLoading: false,
    activeSong: null,
  }),
  components: {},
  watch: {
    recentSearches() {
      this.saveSearch();
    },
    searchTerm(val) {
      if (val.length >= 3) {
        this.fetchSongs();
      }
    },
    requestHeader(val) {
      if (val) {
        this.snackbar = true;
        setTimeout(() => {
          this.closeSnackbar();
        }, 4000);
      }
    },
  },
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return !this.smallScreen;
      }
      return this.smallScreen;
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
    randomColor() {
      const random = Math.floor(Math.random() * 16777215).toString(16);
      return `#${random}`;
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
      this.$nextTick(() => {
        this.requestHeader = '';
        this.requestBody = '';
      });
    },
    fetchSongs() {
      this.searchLoading = true;
      const url = `https://gwr-node.herokuapp.com/api/songs?search=${this.searchTerm}`;

      axios
        .get(url)
        .then((res) => {
          if (res?.data && Array.isArray(res.data)) {
            this.searchResults = res.data;
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        })
        .finally(() => {
          this.searchLoading = false;
        });
    },
    makeRequest(id) {
      if (this.requestLoading) {
        return;
      }
      this.requestLoading = true;
      let { songId } = this;
      if (id) {
        songId = id;
      }
      const url = `https://gwr-node.herokuapp.com/api/request?songId=${songId}`;
      const parser = new DOMParser();
      axios
        .get(url)
        .then((res) => {
          const doc = parser.parseFromString(res.data, 'text/html');
          const responseElement = doc.getElementById('content');
          this.requestHeader = responseElement.children[0].innerHTML;
          this.requestBody = responseElement.children[1].innerHTML.replace('<br>', '');
          if (this.requestHeader === 'Request Successful') {
            const now = new Date();
            const recentRequestObj = {
              search: this.searchTerm,
              color: this.randomColor(),
              expiry: now.getTime() + 10800000,
            };
            const notGunnaDoIt = this.recentSearches.some(
              (term) => term.search === recentRequestObj.search,
            );
            if (!notGunnaDoIt) {
              this.recentSearches.push(recentRequestObj);
            }
            this.searchTerm = '';
            this.searchResults = [];
            setTimeout(() => {
              this.closeSongInfo();
            }, 3000);
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        })
        .finally(() => {
          this.requestLoading = false;
          setTimeout(() => {
            this.closeSongInfo();
          }, 3000);
        });
    },
  },
  mounted() {
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
