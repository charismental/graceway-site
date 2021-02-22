<template>
  <div class="requests">
    <v-card style="position: relative" class="mx-auto" max-width="600">
      <v-overlay absolute :value="searchLoading">
        <v-progress-circular indeterminate></v-progress-circular>
      </v-overlay>
      <v-card-text>
        <v-text-field
          placeholder="Search if you dare..."
          v-model="searchTerm"
        ></v-text-field>
        <v-list v-if="searchResults.length">
          <v-list-item
            style="cursor: pointer"
            @click="makeRequest(item.songid)"
            v-for="item in searchResults"
            :key="item.songid"
          >
            {{ item.title }} - {{ item.artist }}
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto mt-4" max-width="600">
      <v-card-text>
        <div class="px-6">
          <v-text-field type="number" v-model.number="songId" />
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn :loading="requestLoading" block color="primary" @click="makeRequest"
          >Submit Request</v-btn
        >
      </v-card-actions>
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
// requestHeader === 'Request Successful'
import axios from 'axios';

export default {
  name: 'Requests',
  data: () => ({
    searchTerm: '',
    searchResults: [],
    snackbar: false,
    songId: 1200,
    requestHeader: '',
    requestBody: '',
    requestLoading: false,
    searchLoading: false,
  }),
  components: {},
  watch: {
    searchTerm(val) {
      if (val.length >= 4) {
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
