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
        <v-btn color="blue darken-2" dark fab>
          <v-icon v-if="!openShare">mdi-share-variant</v-icon>
          <v-icon v-else>mdi-close</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="#1877f2"
        @click.stop
        :data-href="`https://gracewayradio.com/verse/${$route.params.verseId}`"
      >
        <a
          target="_blank"
          :href="`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgracewayradio.com%2Fverse%2F${$route.params.verseId}&amp;src=sdkpreparse`"
          style="text-decoration: none"
        >
          <v-icon color="white">mdi-facebook</v-icon>
        </a>
      </v-btn>
      <v-btn
        @click.stop
        fab dark
        small
        color="#bd081c"
        >
        <a a data-pin-do="buttonPin" data-pin-tall="true" data-pin-round="true"
        :href="`https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fgracewayradio.com%2Fverse%2F${$route.params.verseId}&description=Verse%20of%20the%20Day`"
        style="text-decoration: none">
        <v-icon>mdi-pinterest</v-icon>
        </a>
      </v-btn>
      <v-btn @click.stop fab dark small
        color="#1da1f2">
        <a
         target="_blank"
         class="twitter-share-button"
         data-size="large"
         :href="`https://twitter.com/intent/tweet?url=https%3A%2F%2Fgracewayradio.com%2Fverse%2F${$route.params.verseId}`"
         style="text-decoration: none">
        <v-icon>mdi-twitter</v-icon>
        </a>
      </v-btn>
      <v-btn @click.stop fab dark small color="#c32aa3">
        <a href="https://instagram.com/gracewayradio/"
        style="text-decoration: none">
        <v-icon>mdi-instagram</v-icon>
        </a>
      </v-btn>
    </v-speed-dial>
  </v-sheet>
</template>

<script>
export default {
  name: 'VerseDisplay',
  data: () => ({
    openSpeedDial: false,
  }),
  metaInfo() {
    return {
      meta: [
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Graceway Radio - Verse of the day' },
        {
          name: 'twitter:description',
          content: "Graceway Radio - See today's verse!",
        },
        {
          name: 'twitter:creator', content: '@gracewayradio',
        },
        {
          name: 'twitter:site', content: '@gracewayradio',
        },
        { name: 'twitter:image', content: this.verseOfTheDay },
        // Facebook OpenGraph
        { property: 'og:title', content: `Graceway Radio - Verse of the day ${this.todayDate}` },
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
    openShare: {
      get() {
        if (this.isMobile) {
          return true;
        }
        return this.openSpeedDial;
      },
      set() {
        this.openSpeedDial = !this.openSpeedDial;
      },
    },
    todayDate() {
      const today = new Date();
      const dd = today.getDate();
      const mm = today.getMonth() + 1;
      return `${mm}-${dd}`;
    },
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
      const url = `https://gracewayradio.com/verse/verse${dayOfYear}.jpg`;
      return url;
    },
  },
  methods: {
    imgErrorHandler() {
      // this is overwritten by computed verseofTheDay, will trigger console error
      const random = Math.floor(Math.random() * 10);
      this.$refs.verseOfDay.src = `https://gracewayradio.com/verse/verse00${random}.jpg`;
    },
  },
};
</script>

<style>
.v-dialog.v-dialog--active {
  overflow-y: inherit !important;
}
</style>
