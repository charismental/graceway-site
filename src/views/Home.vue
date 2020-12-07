<template>
  <v-container fluid class="px-6">
    <!-- style="transform:rotate(-90deg)" -->
    <v-carousel
      v-model="model"
      width="1200"
      height="auto"
      :show-arrows="false"
      cycle
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
                  :style="hover || $vuetify.breakpoint.smAndDown ? 'height: 38%' : 'height: 5%'"
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
        <v-card>
          <v-hover v-slot:default="{ hover }">
            <v-img src="~@/assets/verse.jpg">
              <v-expand-transition>
                <div
                  class="d-flex transition-fast-in-fast-out cyan lighten-2 v-card--reveal"
                  :style="hover || $vuetify.breakpoint.smAndDown ? 'height: 38%' : 'height: 5%'"
                >
                  <div
                    v-if="hover || $vuetify.breakpoint.smAndDown"
                    class="hover-text transition-fast-in-fast-out"
                    style="background-color: #0d47a1"
                    :style="$vuetify.breakpoint.smAndDown ? 'font-size: 10vw' : ''"
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
              </v-expand-transition></v-img
            >
          </v-hover>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-hover v-slot:default="{ hover }">
            <v-img src="~@/assets/news.jpg">
              <v-expand-transition>
                <div
                  class="d-flex transition-fast-in-fast-out cyan lighten-2 v-card--reveal"
                  :style="hover || $vuetify.breakpoint.smAndDown ? 'height: 38%' : 'height: 5%'"
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
    <v-divider class="mt-4"></v-divider>
    <v-row>
      <v-col cols="12" sm="6" md="3" order="1">
        <v-card elevation="0">
          <v-card-title class="justify-center text-h4">About Us</v-card-title>
          <v-card-text class="pr-0">
            GraceWay Radio is a one-of-a-kind station that is dedicated to the
            transmission of true worship and Spirit-inspired messages that will
            foster real spiritual growth in listeners...
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="4"
        class="offset-md-1"
        order-md="2"
        order="3"
        align-self="center"
      >
        <v-row>
          <v-col cols="3">
            <v-btn x-large icon>
              <v-icon x-large>mdi-facebook</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn x-large icon>
              <v-icon x-large>mdi-twitter</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn x-large icon>
              <v-icon x-large>mdi-pinterest</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn x-large icon>
              <v-icon x-large>mdi-instagram</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field outlined label="Newsletter signup"></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" md="3" order="2" order-md="3" class="offset-md-1">
        <v-card elevation="0">
          <v-card-title class="justify-center text-h4">Contact</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
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
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
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
        src: '04 donation.jpg',
      },
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
