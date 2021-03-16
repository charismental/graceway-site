<template>
  <v-expand-transition>
    <v-footer :height="playerIsOpen ? '500vh' : '100px'" app padless>
      <v-card
        flat
        tile
        :height="playerIsOpen ? '500vh' : '100px'"
        color="#1E90FF"
        width="100%"
        class="text-center"
      >
        <v-container fluid class="pa-0">
          <v-row class="ml-0" align="center">
            <v-col class="pa-0" :cols="playerIsOpen ? '5' : '3'">
              <v-img
              :src="itemImg(songInfo)"
              :height="playerIsOpen ? '100%' : '100px'"
              :max-width="playerIsOpen ? '100%' : '100px'"
              :class="playerIsOpen ? 'mx-auto' : ''"> </v-img>
            </v-col>
            <v-col :cols="playerIsOpen ? '5' : '8'" class="pr-0">
              <div class="marquee-container">
                <span
                  class="d-block text-left text-title white--text"
                  :class="[marqueeTrigger(songInfo, 'title', 16) ? 'marquee' : '']"
                  >{{
                    songInfo && songInfo.title ? songInfo.title : ""
                  }}</span
                >
                <span
                  class="d-block text-left mt-n1 text-subtitle-1 white--text"
                  :class="[
                    marqueeTrigger(songInfo, 'artist', 18) ? 'marquee' : '',
                  ]"
                  >{{
                    songInfo && songInfo.artist
                      ? songInfo.artist
                      : ""
                  }}</span
                >
              </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col col="1" class="align-center pl-0 pr-7">
              <v-btn text icon @click="$emit('play-pause')" dark height="40" width="40">
                <v-icon v-if="!isPlaying" size="40">mdi-play</v-icon>
                <v-icon size="40" v-else>mdi-pause</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-footer>
  </v-expand-transition>
</template>

<script>
export default {
  name: 'player',
  props: {
    playerIsOpen: {
      type: Boolean,
    },
    isPlaying: {
      type: Boolean,
    },
  },
  computed: {
    songInfo() {
      return this.$store.state.songInfo;
    },
  },
  methods: {
    marqueeTrigger(el, att, val) {
      return !!(el && el[att] && el[att].length > val);
    },
    itemImg(songInfo) {
      this.$store.dispatch('itemImg', songInfo);
    },
    // refreshSongInfo() {
    //   this.$store.dispatch("getCurrentSongs")
    //   // eslint-disable-next-line no-console
    //   console.log("update the song info, jimmy!")
    // },
    // playPause() {
    //   this.$store.dispatch('playPause')
    // }
  },
};
</script>

<style>
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
  width: 200px;
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
