<template>
  <div class="requests">
    <v-card class="mx-auto" max-width="600">
      <v-card-text>
        <div class="px-6">
          <v-text-field type="number" v-model.number="songId" />
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn block color="primary" @click="makeRequest">Submit Request</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Requests',
  data: () => ({
    songId: 1200,
  }),
  components: {},
  methods: {
    makeRequest() {
      const url = `https://gwr-node.herokuapp.com/request?songId=${this.songId}`;
      axios
        .get(url, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
          },
        })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res.data);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    },
  },
};
</script>
