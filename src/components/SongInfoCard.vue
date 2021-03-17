<template>
  <v-card
    color="#1F7087"
    dark
    style="position: relative pa-2"
    :width="isMobile ? 'min-content' : 'fit-content'"
    class="mx-auto"
  >
    <v-overlay absolute v-if="$store.state.feedbackLoading">
      <v-progress-circular indeterminate></v-progress-circular>
    </v-overlay>
    <div
      class="d-flex justify-space-between"
      :class="!isMobile ? 'flex-no-wrap' : 'flex-wrap-reverse'"
    >
      <div class="my-auto">
        <v-card-title
          :class="!isMobile ? 'mt-2' : 'order-2;'"
          :style="!isMobile ? '' : 'font-size:0.9em;'"
          >{{ activeSong && activeSong.title ? activeSong.title : "" }}</v-card-title
        >

        <v-card-subtitle :class="!isMobile ? '' : 'order-3'">{{
          activeSong && activeSong.artist ? activeSong.artist : ""
        }}</v-card-subtitle>
        <!-- song.minsec -->
        <!-- song.album -->
        <v-card-actions :class="!isMobile ? 'mb-2' : 'mb-2 order-4'">
          <v-btn @click="$emit('close-info')" dark icon small>
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-btn
            v-if="!noRequests"
            :loading="requestLoading"
            class="text-capitalize"
            outlined
            rounded
            @click="makeRequest"
            >Request Song</v-btn
          >
          <v-btn small icon @click="toggleFavorite">
            <v-icon color="error" v-if="favorited">mdi-heart</v-icon>
            <v-icon v-else>mdi-heart-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </div>

      <v-avatar
        :size="isMobile ? 270 : 160"
        tile
        :class="!isMobile ? 'ma-3' : 'order-1 mx-auto ma-3 pa-2'"
      >
        <v-img v-if="activeSong" :src="itemImg"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'SongInfoCard',
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    itemImg() {
      return this.$store.getters.itemImg(this.activeSong);
    },
    noRequests() {
      if (this.activeSong?.songid) {
        return (this.$store.state.history.some((song) => song?.songid === this.activeSong.songid)
          || this.$store.state.queue.some((song) => song?.songid === this.activeSong.songid)
        );
      }
      return true;
    },
    activeSong() {
      return this.$store.state.activeSong;
    },
    requestLoading() {
      return this.$store.state.requestLoading;
    },
    favorited() {
      return this.$store.state.mySongs?.favorites.some(
        (song) => song.songid === this.activeSong?.songid,
      );
    },
  },
  methods: {
    toggleFavorite() {
      this.$store.dispatch('toggleFavorite', this.activeSong);
    },
    makeRequest() {
      // handle request obj here, dispatch directly
      this.$emit('make-request', this.activeSong.songid);
    },
  },
};
</script>
