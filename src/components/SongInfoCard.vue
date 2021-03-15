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
          >{{ song && song.title ? song.title : "" }}</v-card-title
        >

        <v-card-subtitle :class="!isMobile ? '' : 'order-3'">{{
          song && song.artist ? song.artist : ""
        }}</v-card-subtitle>
        <!-- song.minsec -->
        <!-- song.album -->
        <v-card-actions :class="!isMobile ? 'mb-2' : 'mb-2 order-4'">
          <v-btn @click="$emit('close-info')" dark icon small>
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-btn
            v-if="!noRequests && !isQueued"
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
        <v-img v-if="song" :src="songPicture"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'SongInfoCard',
  props: {
    noRequests: {
      type: Boolean,
      default: false,
    },
    isMobile: {
      type: Boolean,
    },
    song: {
      type: Object,
    },
    songPicture: {
      type: String,
    },
  },
  computed: {
    isQueued() {
      return false;
      // return (
      //  this.$store.state.songInfo?.songid !== this.song.songid &&
      //   !this.$store.state.songHistory.some((song) => song.songid === this.song.songid)
      //   && !this.$store.state.songQueue.some((song) => song.songid === this.song.songid)
      // );
    },
    requestLoading() {
      return this.$store.state.requestLoading;
    },
    favorited() {
      return this.$store.state.mySongs?.favorites.some((song) => song.songid === this.song?.songid);
    },
  },
  methods: {
    toggleFavorite() {
      this.$store.dispatch('toggleFavorite', this.song);
    },
    makeRequest() {
      this.$emit('make-request', this.song.songid);
    },
  },
};
</script>
