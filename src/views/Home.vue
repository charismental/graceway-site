<template>
  <v-container fluid class="px-6">
    <v-carousel
      v-model="model"
      width="1200"
      height="auto"
      :show-arrows="false"
      :hide-delimiters="$vuetify.breakpoint.smAndDown"
      cycle
      interval="8000"
      style="position: relative"
    >
      <v-carousel-item
        :style="slide && slide.link ? 'cursor: pointer' : ''"
        @click="navigateTo(slide)"
        v-for="slide in slideShow"
        :key="slide.src"
        eager
      >
        <v-img
          :src="`https://gracewayradio.com/slide/${slide.src}`"
          height="100%"
          eager
        />
      </v-carousel-item>
    </v-carousel>
    <v-row>
      <v-col cols="12" md="4">
        <v-card
          @click="
            $router.push({
              name: 'Blogs',
            })
          "
        >
          <v-hover v-slot:default="{ hover }">
            <v-img src="~@/assets/blog.jpg">
              <v-expand-transition>
                <div
                  class="d-flex transition-fast-in-fast-out cyan lighten-2 v-card--reveal"
                  :style="
                    hover || $vuetify.breakpoint.smAndDown
                      ? 'height: 38%'
                      : 'height: 5%'
                  "
                >
                  <div
                    v-if="hover || $vuetify.breakpoint.smAndDown"
                    class="hover-text rounded transition-fast-in-fast-out"
                    style="background-color: #0d47a1"
                    :style="
                      $vuetify.breakpoint.smAndDown ? 'font-size: 10vw' : ''
                    "
                  >
                    Blog Page
                  </div>
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-dialog :value="showVerse" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-card
              style="cursor: pointer"
              v-bind="attrs"
              v-on="on"
              @click="activateVerse"
            >
              <v-hover v-slot:default="{ hover }">
                <v-img src="~@/assets/verse.jpg">
                  <v-expand-transition>
                    <div
                      class="d-flex transition-fast-in-fast-out cyan lighten-2 v-card--reveal"
                      :style="
                        hover || $vuetify.breakpoint.smAndDown
                          ? 'height: 38%'
                          : 'height: 5%'
                      "
                    >
                      <div
                        v-if="hover || $vuetify.breakpoint.smAndDown"
                        class="hover-text transition-fast-in-fast-out"
                        style="background-color: #0d47a1"
                        :style="
                          $vuetify.breakpoint.smAndDown ? 'font-size: 10vw' : ''
                        "
                      >
                        <span
                          v-if="
                            $vuetify.breakpoint.lgAndUp ||
                            $vuetify.breakpoint.smOnly
                          "
                        >
                          Verse of the Day
                        </span>
                        <span v-else>Today's Verse</span>
                      </div>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
            </v-card>
          </template>
          <router-view v-click-outside="closeVerse"></router-view>
        </v-dialog>
      </v-col>
      <v-col cols="12" md="4">
        <v-card @click.stop="dialog = true">
          <v-hover v-slot:default="{ hover }">
            <v-img src="~@/assets/news.jpg">
              <v-expand-transition>
                <div
                  class="d-flex transition-fast-in-fast-out cyan lighten-2 v-card--reveal"
                  :style="
                    hover || $vuetify.breakpoint.smAndDown
                      ? 'height: 38%'
                      : 'height: 5%'
                  "
                >
                  <div
                    v-if="hover || $vuetify.breakpoint.smAndDown"
                    class="hover-text transition-fast-in-fast-out"
                    style="background-color: #0d47a1"
                    :style="
                      $vuetify.breakpoint.smAndDown ? 'font-size: 10vw' : ''
                    "
                  >
                    Featured
                  </div>
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </v-card>
        <v-dialog
          scrollable
          transition="dialog-bottom-transition"
          v-model="dialog"
          overlay-color="#263238"
          overlay-opacity=".8"
          max-width="400"
        >
          <v-card>
            <v-card-text v-for="(feature, i) in availableFeatures" :key="i" class="mt-4 mb-4">
              <v-img contain :src="feature.image" class="mb-2"></v-img>
              <div v-html="feature.content"></div>
              <div v-for="l in feature.link" :key="l.id">
                <a :href="l.link" target="_blank">
                  {{l.link_text}}</a
                >
              </div>
            </v-card-text>
            <v-card-actions @click="dialog = false">
              <v-btn @click="dialog = false" color="primary"> Close </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-snackbar v-model="showSnackbar" multi-line color="warning">
      <div class="text-body-1 text-center">{{ snackBarText }}</div>
    </v-snackbar>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    model: 0,
    showSnackbar: false,
    dialog: false,
    dialogText: '',
    snackBarText: '',
    // features: [],
    // content: '',
    // image: '',
    // link: [],
    slideShow: [
      // {
      //   src: '01 valentine.jpg',
      // },
      {
        src: '02.jpg',
      },
      // {
      //   src: '03 valentine.jpg',
      // },
      {
        src: '04.jpg',
      },
      {
        src: '04 donation.jpg',
        link: 'Donate',
      },
      // {
      //   src: '05 new year.jpg',
      // },
      {
        src: '06.jpg',
      },
      {
        src: '07.jpg',
      },
      {
        src: '08.jpg',
      },
    ],
  }),
  computed: {
    features() {
      return this.$store.state.features;
    },
    availableFeatures() {
      const today = new Date();
      const myToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
      today.setHours(0);

      return this.features.filter((feature) => {
        const startDate = new Date(feature.startPublish);
        startDate.setHours(startDate.getHours() + 8);
        const endDate = new Date(feature.endPublish);
        endDate.setHours(endDate.getHours() + 8);
        return endDate >= myToday && myToday >= startDate;
      });
    },
    showVerse() {
      return this.$route.meta && this.$route.meta.showModal;
    },
    dayOfYear() {
      const getLength = (number) => number.toString().length;
      const today = new Date();
      let dayOfYear = Math.floor(
        // eslint-disable-next-line comma-dangle
        (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
      ).toString();
      if (getLength(parseInt(dayOfYear, 10)) === 1) {
        dayOfYear = `00${dayOfYear}`;
      } else if (getLength(parseInt(dayOfYear, 10)) === 2) {
        dayOfYear = `0${dayOfYear}`;
      }
      return dayOfYear;
    },
  },
  methods: {
    getFeatures() {
      this.$store.dispatch('getFeatures');
    },
    navigateTo(slideObject) {
      if (slideObject?.link) {
        this.$router.push({ name: slideObject.link });
      }
    },
    triggerSnackbar(text) {
      this.snackBarText = text;
      this.showSnackbar = true;
    },
    closeVerse() {
      this.$router.push({ name: 'Home' });
    },
    activateVerse() {
      this.$router.push({ name: 'Verse', params: { verseId: this.dayOfYear } });
    },
  },
  mounted() {
    this.getFeatures();
  },
};
</script>

<style>
.hover-text {
  font-size: 3.5vw;
  font-weight: 900;
  color: white;
  padding: 0.1em 0.5em 0.2em;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
