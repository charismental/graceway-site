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
      <v-carousel-item v-for="slide in slideShow" :key="slide.src" eager>
        <v-img
          :src="`https://raw.githubusercontent.com/charismental/images/main/${slide.src}`"
          height="100%"
          eager
        />
      </v-carousel-item>
    </v-carousel>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-hover v-slot:default="{ hover }">
            <v-img src="~@/assets/blog.jpg">
              <v-expand-transition>
                <div
                  class="d-flex transition-fast-in-fast-out cyan lighten-2 v-card--reveal"
                  :style="
                    hover || $vuetify.breakpoint.smAndDown ? 'height: 38%' : 'height: 5%'
                  "
                >
                  <div
                    v-if="hover || $vuetify.breakpoint.smAndDown"
                    class="hover-text rounded transition-fast-in-fast-out"
                    style="background-color: #0d47a1"
                    :style="$vuetify.breakpoint.smAndDown ? 'font-size: 10vw' : ''"
                  >
                    Blog Page
                  </div>
                </div>
              </v-expand-transition></v-img
            >
          </v-hover>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-dialog v-model="showVerse" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-card style="cursor: pointer" v-bind="attrs" v-on="on" @click="toggleVerse">
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
                        :style="$vuetify.breakpoint.smAndDown ? 'font-size: 10vw' : ''"
                      >
                        <span
                          v-if="$vuetify.breakpoint.lgAndUp || $vuetify.breakpoint.smOnly"
                        >
                          Verse of the Day
                        </span>
                        <span v-else>Today's Verse</span>
                      </div>
                    </div>
                  </v-expand-transition></v-img
                >
              </v-hover>
            </v-card>
          </template>
          <v-card class="mx-auto">
            <v-img :src="verseOfTheDay"></v-img>
            <v-btn
              color="grey lighten-2"
              fab
              absolute
              small
              style="top: 10px; right: 10px"
              @click="showVerse = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-hover v-slot:default="{ hover }">
            <v-img src="~@/assets/news.jpg">
              <v-expand-transition>
                <div
                  class="d-flex transition-fast-in-fast-out cyan lighten-2 v-card--reveal"
                  :style="
                    hover || $vuetify.breakpoint.smAndDown ? 'height: 38%' : 'height: 5%'
                  "
                >
                  <div
                    v-if="hover || $vuetify.breakpoint.smAndDown"
                    class="hover-text transition-fast-in-fast-out"
                    style="background-color: #0d47a1"
                    :style="$vuetify.breakpoint.smAndDown ? 'font-size: 10vw' : ''"
                  >
                    What's New
                  </div>
                </div>
              </v-expand-transition></v-img
            >
          </v-hover>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data: () => ({
    model: 0,
    showVerse: false,
    slideShow: [
      {
        src: '01 christmas.jpg',
      },
      {
        src: '02.jpg',
      },
      {
        src: '03 christmas.jpg',
      },
      {
        src: '04.jpg',
      },
      // {
      //   src: '04 donation.jpg',
      // },
      {
        src: '05 christmas.jpg',
      },
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
    verseOfTheDay() {
      let dateDigit = new Date().toISOString().charAt(9);
      if (dateDigit === 0) {
        dateDigit = 5;
      }
      const url = 'https://raw.githubusercontent.com/charismental/images/main/verse/';
      return `${url}verse00${dateDigit}.jpg`;
    },
  },
  methods: {
    toggleVerse() {
      this.showVerse = !this.showVerse;
    },
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
