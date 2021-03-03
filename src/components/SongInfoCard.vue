<template>
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
              song && song.title ? song.title : ""
            }}</v-card-title>

            <v-card-subtitle :class="!isMobile ? '' : 'order-3'">{{
              song && song.artist ? song.artist : ""
            }}</v-card-subtitle>

            <v-card-actions :class="!isMobile ? 'mb-2' : 'mb-2 order-4'">
              <v-btn @click="$emit('close-info')"
              dark icon small>
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-btn
                class="text-capitalize"
                outlined
                rounded
                @click="$emit('make-request')"
                >Request Song</v-btn
              >
              <v-btn
              small icon @click="$emit('toggle-favorite')">
                <v-icon
                  color="error"
                  v-if="
                    song && song.songid && favorited(song.songid)
                  "
                  >mdi-heart</v-icon
                >
                <v-icon v-else>mdi-heart-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar :size="isMobile ? 270 : 160"
          tile :class="!isMobile ? 'ma-3' : 'order-1 mx-auto ma-3 pa-2'">
            <v-img v-if="song" :src="songPicture"></v-img>
          </v-avatar>
        </div>
      </v-card>
</template>

<script>

export default {
  name: 'SongInfoCard',
  props: {
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
  methods: {
    makeRequest() {
      this.$emit('make-request', this.song.songid);
    },
    togFav() {
      this.$emit('toggle-favorite', this.song.songid);
    },
    favorited() {
      return this.song.songid;
    },
  },
};
</script>
