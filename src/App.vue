<template>
  <v-app>
    <audio id="audio" :src="stream">
      Your browser does not support the audio element.
    </audio>
    <v-dialog v-model="openSongInfo" width="fit-content">
      <song-info-card
        :isMobile="isMobile"
        :song="activeSong"
        noRequests
        :songPicture="itemImg(activeSong)"
        @close-info="closeSongInfo"
      ></song-info-card>
    </v-dialog>
    <v-dialog :value="firstVisit" max-width="600">
      <v-card class="welcome-card pb-6" dark rounded elevation="12">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn small icon @click="firstVisit = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-text class="py-8">
          <div class="text-h4 text-center" style="color: #15cad5">
            Welcome to Graceway Radio!
          </div>
          <div class="text-h5 text-center">
            Please click below to start listening
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn class="mx-auto" fab color="grey lighten-1" large @click="playPause">
            <v-icon large v-if="!radioIsPlaying">mdi-play</v-icon>
            <v-icon large v-else>mdi-pause</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-app-bar elevate-on-scroll app color="white">
      <div class="d-flex align-center">
        <v-img
          style="cursor: pointer"
          @click="navigateHome"
          alt="Graceway Radio Logo"
          contain
          :class="isMobile ? '' : 'ml-2'"
          src="@/assets/logo.png"
          max-height="60"
          max-width="60"
        />
      </div>
      <v-toolbar-title class="ml-2" style="cursor: pointer" @click="navigateHome">
        <div :class="$vuetify.breakpoint.smAndUp ? 'text-h5' : 'text-body-1'">
          Graceway Radio
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-if="!isMobile">
        <v-btn
          v-for="navItem in navItems.filter(nav => !nav.disabled)"
          :key="navItem.name"
          :text="!navItem.featured"
          active-class="active-button"
          class="mr-1"
          :color="navItem.featured ? 'warning' : ''"
          exact
          :small="$vuetify.breakpoint.lgAndUp"
          :x-small="$vuetify.breakpoint.mdAndDown"
          :to="navItem.link"
          >{{ navItem.name }}</v-btn
        >
      </div>
      <v-app-bar-nav-icon
        v-if="isMobile"
        @click.stop="openSideNav = !openSideNav"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <div v-if="!isMobile">
      <v-btn
        color="primary"
        @click="openPlayer = true"
        elevation="0"
        tile
        style="
          transform: rotate(90deg);
          z-index: 3;
          position: fixed;
          left: -125px;
          top: 50%;
          width: 300px;
          height: 60px;
        "
        ><div class="text-capitalize text-h3">Listen</div>
        <v-btn
          fab
          small
          absolute
          style="transform: rotate(-90deg); right: 0"
          @click.stop="playPause"
        >
          <v-icon v-if="!radioIsPlaying">mdi-play</v-icon>
          <v-icon v-else>mdi-pause</v-icon>
        </v-btn>
      </v-btn>
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

          <v-btn fab color="grey lighten-1" large bottom right absolute @click="playPause">
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
          <div v-for="(song, i) in songQueue.slice(0, -1)" :key="`${song.artist}_${song.title}`">
            <v-list-item style="cursor: pointer" @click="viewSongInfo(song)">
              <v-list-item-content>
                <v-list-item-title>{{ song.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ song.artist }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider v-if="i !== songQueue.length - 1"></v-divider>
          </div>
        </v-list>
        <v-list two-line v-else>
          <div v-for="(song, i) in songHistory.slice(0, -1)" :key="`${song.artist}_${song.title}`">
            <v-list-item style="cursor: pointer" @click="viewSongInfo(song)">
              <v-list-item-content>
                <v-list-item-title>{{ song.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ song.artist }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider v-if="i !== songQueue.length - 1"></v-divider>
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
    </div>
    <v-navigation-drawer v-model="openSideNav" right app temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="navItem in navItems.filter(nav => !nav.disabled)" :key="navItem.name">
            <v-list-item-title @click="navTo(navItem.link)">{{ navItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
      <c-footer v-if="$route.name !== 'About'" />
    </v-main>
    <v-expand-transition>
      <bottom-player
        v-if="isMobile"
        :currentSongInfo="songInfo"
        :songPicture="itemImg(songInfo)"
        :isPlaying="radioIsPlaying"
        @play-pause="playPause"
      />
    </v-expand-transition>
  </v-app>
</template>

<script>
import axios from 'axios';
import CFooter from '@/components/Footer.vue';
import BottomPlayer from '@/components/BottomPlayer.vue';
import SongInfoCard from '@/components/SongInfoCard.vue';

export default {
  name: 'App',
  components: { CFooter, BottomPlayer, SongInfoCard },
  data: () => ({
    openSongInfo: false,
    activeSong: null,
    stream: 'https://us3.streamingpulse.com/ssl/graceway_pulse',
    // stream: 'https://rcast.live/stream/64776',
    openSideNav: false,
    firstVisit: false,
    songInfo: null,
    songHistory: [],
    songQueue: [],
    loadingSongInfo: false,
    openPlayer: false,
    radioIsPlaying: false,
    historyUpcoming: 'upcoming',
    navItems: [
      {
        name: 'Home',
        link: { name: 'Home' },
        featured: false,
      },
      {
        name: 'Speakers',
        link: { name: 'FeaturedSpeakers' },
        featured: false,
        disabled: false,
      },
      {
        name: 'Schedule',
        link: { name: 'ProgramSchedule' },
        featured: false,
        disabled: false,
      },
      {
        name: 'Requests',
        link: { name: 'Requests' },
        featured: false,
        disabled: false,
      },
      {
        name: 'About',
        link: { name: 'About' },
        featured: false,
      },
      {
        name: 'Blog',
        link: { name: 'Blogs' },
        featured: false,
        // disabled: true,
      },
      {
        name: 'Contact',
        link: { name: 'Contact' },
        featured: false,
        disabled: true,
      },
      {
        name: 'Links',
        link: { name: 'HowToListen' },
        featured: false,
        disabled: false,
      },
      {
        name: 'Donate',
        link: { name: 'Donate' },
        featured: true,
        disabled: false,
      },
    ],
  }),
  watch: {
    $route() {
      this.openPlayer = false;
    },
  },
  created() {
    this.getSongInfo();
    // eslint-disable-next-line no-unused-vars
    const newInterval = setInterval(this.getSongInfo, 10000);
  },
  methods: {
    closeSongInfo() {
      this.openSongInfo = false;
      this.activeSong = null;
    },
    viewSongInfo(songObj) {
      this.activeSong = songObj;
      this.openSongInfo = true;
    },
    marqueeTrigger(el, att, val) {
      return !!(el && el[att] && el[att].length > val);
    },
    itemImg(item) {
      const url = 'https://gracewayradio.com/artwork/';
      if (item?.picture) {
        return url + item.picture;
      }
      if (this.loadingSongInfo) {
        return `${url}loading.gif`;
        // return `${url}graceway.png`;
      }
      return `${url}customMissing.jpg`;
    },
    getSongInfo() {
      this.loadingSongInfo = true;
      axios
        .get('https://cascadechapel.com/samHTMweb/info.json')
        .then((res) => {
          if (res.data.song_info) {
            this.songInfo = res.data.song_info;
            this.songQueue = res.data.song_queue;
            this.songHistory = res.data.song_history;
          }
          this.loadingSongInfo = false;
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
          this.loadingSongInfo = false;
        });
    },
    playPause() {
      if (this.firstVisit) {
        setTimeout(() => {
          this.firstVisit = false;
          if (!this.isMobile) {
            this.openPlayer = true;
          }
        }, 1200);
      }
      if (this.radioIsPlaying) {
        this.radioIsPlaying = false;
        // eslint-disable-next-line no-undef
        audio.pause();
      } else {
        this.radioIsPlaying = true;
        // eslint-disable-next-line no-undef
        audio.play();
      }
    },
    navigateHome() {
      if (this.$route.name !== 'Home') {
        this.$router.push({ name: 'Home' });
      }
    },
    navTo(linkObj) {
      if (linkObj?.name && this.$route.name !== linkObj.name) {
        this.$router.push(linkObj);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.firstVisit = true;
    }, 1800);
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style>
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

html {
  height: -webkit-fill-available;
}
</style>

<style lang="scss" scoped>
.welcome-card {
  background-color: #323232;
  border: 2px solid #15cad5;
}
.active-button {
  color: blue;
}
.album-art {
  max-height: 300px;
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
.song-meta {
  padding-top: 5px;
  padding-left: 5px;
  height: 65px;
  background-color: dodgerblue;
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
</style>
