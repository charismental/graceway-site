<template>
  <v-navigation-drawer
    fixed
    style="z-index: 4; padding-top: 60px"
    width="300"
    v-model="openPlayer"
  >
    <div class="album-art" style="position: relative">
      <v-img
        width="auto"
        height="300"
        :src="itemImg(songInfo)"
        :alt="songInfo && songInfo.title ? songInfo.title : 'Graceway Radio'"
        onerror="this.src='https://gracewayradio.com/artwork/customMissing.jpg'"
      >
      </v-img>

      <v-btn fab color="grey lighten-1" large bottom right absolute @click="$emit('play-pause')">
        <v-icon large v-if="!radioIsPlaying">mdi-play</v-icon>
        <v-icon large v-else>mdi-pause</v-icon>
      </v-btn>
    </div>
    <div class="song-meta white--text">
      <div class="text-h6 marquee-container">
        <div :class="[marqueeTrigger(songInfo, 'title', 18) ? 'marquee' : '']">
          {{ songInfo && songInfo.title ? songInfo.title : "" }}
        </div>
      </div>
      <div class="text-body-2 marquee-container">
        <div :class="[marqueeTrigger(songInfo, 'artist', 36) ? 'marquee' : '']">
          {{ songInfo && songInfo.artist ? songInfo.artist : "" }}
        </div>
      </div>
    </div>
    <v-list dense>
      <v-list-item>
        <v-btn-toggle
          dense
          class="mx-auto"
          v-model="historyUpcoming"
          color="primary accent-3"
          group
        >
          <v-btn class="text-body-1 font-weight-bold text-capitalize" value="upcoming"
            >Upcoming</v-btn
          >
          <v-btn class="text-body-1 font-weight-bold text-capitalize" value="history"
            >History</v-btn
          >
        </v-btn-toggle>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list two-line v-if="historyUpcoming === 'upcoming'">
      <div v-for="(song, i) in history.slice(0, -1)" :key="`${song.artist}_${song.title}`">
        <v-list-item style="cursor: pointer" @click="$emit('song-info')">
          <v-list-item-content>
            <v-list-item-title>{{ song.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ song.artist }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="i !== history.length - 1"></v-divider>
      </div>
    </v-list>
    <v-list two-line v-else>
      <div v-for="(song, i) in queue.slice(0, -1)" :key="`${song.artist}_${song.title}`">
        <v-list-item style="cursor: pointer" @click="viewTheSong(song)">
          <v-list-item-content>
            <v-list-item-title>{{ song.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ song.artist }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="i !== queue.length - 1"></v-divider>
      </div>
    </v-list>
    <v-btn
      color="grey darken-2"
      class="white--text"
      large
      fab
      absolute
      right
      style="bottom: 10px"
      @click="openPlayer = false"
    >
      <v-icon large>mdi-close</v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SidePlayer',
  data: () => ({
    historyUpcoming: 'upcoming',
  }),
  props: {
    openPlayer: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  computed: {
    radioIsPlaying() {
      return this.$store.state.radioIsPlaying;
    },
    loadingSongInfo() {
      return this.$store.state.loadingSongInfo;
    },
    queue() {
      return this.$store.state.queue;
    },
    history() {
      return this.$store.state.history;
    },
    songInfo() {
      return this.$store.state.songInfo;
    },
  },
  methods: {
    itemImg(item) {
      this.$store.dispatch('itemImg', item);
    },
    viewSongInfo(songObj) {
      this.$store.dispatch('viewSongInfo', songObj);
    },
    marqueeTrigger(el, att, val) {
      return !!(el && el[att] && el[att].length > val);
    },
  },
};
</script>

<style>
.song-meta {
  padding-top: 5px;
  padding-left: 5px;
  height: 65px;
  background-color: dodgerblue;
}
.album-art {
  max-height: 300px;
}
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-130%);
  }
}
@-webkit-keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-130%);
  }
}
.marquee-container {
overflow: hidden;
 }
.marquee {
  white-space: nowrap;
  animation: marquee 8s linear infinite;
  -webkit-animation: marquee 8s linear infinite;
}
.marquee:hover {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
 }
</style>
