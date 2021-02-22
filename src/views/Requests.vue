<template>
  <div class="requests">
    <v-dialog v-model="openSongInfo" width="500">
      <v-card color="#1F7087" dark>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline">{{
              activeSong && activeSong.title ? activeSong.title : ""
            }}</v-card-title>

            <v-card-subtitle>{{
              activeSong && activeSong.artist ? activeSong.artist : ""
            }}</v-card-subtitle>

            <v-card-actions>
              <v-btn @click="closeSongInfo" dark icon small>
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-btn
                class="ml-2 text-capitalize"
                outlined
                rounded
                @click="makeRequest(activeSong.songid)"
                >Request Song</v-btn
              >
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <v-img :src="itemImg(activeSong)"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-dialog>
    <v-card class="mx-auto" max-width="600" max-height="800">
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
          <v-list-item v-for="item in searchResults" :key="item.songid">
            <v-list-item-content>
              <v-list-item-title style="cursor: pointer" @click="viewSongInfo(item)">
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle
                style="cursor: pointer"
                @click="searchTerm = item.artist"
              >
                {{ item.artist }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
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

export default {
  name: 'Requests',
  data: () => ({
    openSongInfo: false,
    searchTerm: '',
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
  methods: {
    itemImg(item) {
      const url = 'https://gracewayradio.com/artwork/';
      if (item?.picture) {
        return url + item.picture;
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
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        })
        .finally(() => {
          this.requestLoading = false;
        });
    },
  },
};
</script>
