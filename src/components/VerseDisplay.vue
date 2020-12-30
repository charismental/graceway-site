<template>
  <v-sheet class="mx-auto" style="position: relative">
    <v-img :src="verseOfTheDay" ref="verseOfDay" @error="imgErrorHandler"></v-img>
    <v-btn
      color="grey lighten-2"
      fab
      absolute
      small
      style="top: 10px; right: 10px"
      :to="{ name: 'Home' }"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-speed-dial
      v-model="openShare"
      :style="speedDialStyle"
      style="position: absolute"
      :direction="isMobile ? 'right' : 'top'"
      open-on-hover
    >
      <template v-slot:activator>
        <v-btn v-model="openShare" color="blue darken-2" dark fab>
          <v-icon v-if="!openShare">mdi-share-variant</v-icon>
          <v-icon v-else>mdi-close</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="#1877f2">
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn fab dark small color="#bd081c">
        <v-icon>mdi-pinterest</v-icon>
      </v-btn>
      <v-btn fab dark small color="#1da1f2">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn fab dark small color="#c32aa3">
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-sheet>
</template>

<script>
export default {
  name: 'VerseDisplay',
  data: () => ({
    openShare: false,
  }),
  metaInfo() {
    return {
      meta: [
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Graceway Radio - Verse of the day' },
        {
          name: 'twitter:description',
          content: "Graceway Radio - See today's verse!",
        },
        { name: 'twitter:image', content: this.verseOfTheDay },
        // Facebook OpenGraph
        { property: 'og:title', content: 'Graceway Radio - Verse of the day' },
        { property: 'og:site_name', content: 'Graceway Radio' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: this.verseOfTheDay },
        {
          property: 'og:description',
          content: "Graceway Radio - See today's verse!",
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    speedDialStyle() {
      if (this.isMobile) {
        return 'top: -60px; left: 50%; transform: translate(-250%)';
      }
      return 'bottom: 0; right: -60px';
    },
    verseOfTheDay() {
      const dayOfYear = this.$route.params.verseId;
      const url = `https://raw.githubusercontent.com/charismental/images/main/verse/verse${dayOfYear}.jpg`;
      return url;
    },
  },
  methods: {
    imgErrorHandler() {
      // this is overwritten by computed verseofTheDay, will trigger console error
      const random = Math.floor(Math.random() * 10);
      this.$refs.verseOfDay.src = `https://raw.githubusercontent.com/charismental/images/main/verse/verse00${random}.jpg`;
    },
  },
  watch: {
    isMobile(val) {
      if (val) {
        this.openShare = true;
      }
    },
  },
};
</script>

<style>
.v-dialog.v-dialog--active {
  overflow-y: inherit !important;
}
</style>
