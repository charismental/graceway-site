<template>
  <div class="requests">
    <v-card class="mx-auto" max-width="600">
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
    snackbar: false,
    songId: 1200,
    requestHeader: '',
    requestBody: '',
    requestLoading: false,
  }),
  components: {},
  watch: {
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
    makeRequest() {
      this.requestLoading = true;
      const url = `https://gwr-node.herokuapp.com/request?songId=${this.songId}`;
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
