<template>
  <v-container
    fluid
    class="px-6"
  >
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
      <v-col
        cols="12"
        md="4"
      >
        <v-card @click="
            $router.push({
              name: 'Blogs',
            })
          ">
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
              </v-expand-transition>
            </v-img>
          </v-hover>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <v-dialog
          :value="showVerse"
          max-width="600"
        >
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
                        :style="$vuetify.breakpoint.smAndDown ? 'font-size: 10vw' : ''"
                      >
                        <span v-if="$vuetify.breakpoint.lgAndUp || $vuetify.breakpoint.smOnly">
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
      <v-col
        cols="12"
        md="4"
      >
        <v-card @click.stop="dialog = true">
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
                    Featured
                  </div>
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </v-card>
        <v-dialog
        dark
          scrollable
          transition="dialog-bottom-transition"
          v-model="dialog"
          overlay-color="#263238"
          overlay-opacity=".8"
          max-width="350"
        >
          <v-card v-model="dialogText"
          color="#263238">
            <v-card-text class="mt-4 mb-4">
            <v-img
              contain
              :src="require('@/assets/' + 'shaken.jpg')"
            ></v-img>
              <p>There is a lot of shaking going on in the body of Christ.
                It is a deep shaking that may feel like our roots are being pulling
                out. The shaking of God comes in the form of crisis, or hurt, or
                some other form of physical or emotional pain. If that is happening to
                you, ask yourself this question: Who is doing the shaking? Is it God
                or is it Satan attacking?</p>
              <p>Remember, as a Christian, even
                if it is the Devil, God controls the work of Satan as it
                affects the lives of His followers. If you are a child
                of God and have committed yourself to the Lord then
                you are under His control and His protection. There is a
                call of God on the life of each Christian, to move from a place
                where you worship golden idols, as the ancient Israelis did
                at the base of Mount Sinai, to a place where you can have an
                experience with God, alone, as Moses did at the top of that
                same mountain. But that call demands a change in your life.</p>
              <p>When God moves in your life change will occur. The question
                is: will you cooperate with God or will He have to shake
                you up a bit? Change calls for us to move out of the way of
                pride and into the way of humility. And if you are not
                willing to humble yourself on your own, to change your ways
                , God will change you, and it may not be comfortable or
                painless. When God shakes you, things get broken.</p>
              <p>In honor of the 29th anniversary of Jamie Buckingham’s passing
                from this earth into God's heavenly kingdom,Risky Living Ministries
                is offering this e-book FREE. The offer is good through Feb. 21, 2021.</p>

              <p>To obtain the e-book go to:</p>
              <p>
                <a href="https://www.amazon.com/dp/B08SLCS531?fbclid=
          IwAR0LrHTfi2YPsbtFay_ALesGas5SjtSpWBzGz2teqLzgKiR-KbNk_On6bqc">
                  Amazon Books: Shaken by God by Jamie Buckingham</a>
              </p>
            </v-card-text>
            <v-card-actions @click="dialog=false">
              <v-btn @click="dialog=false" color="primary">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="showSnackbar"
      multi-line
      color="warning"
    >
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
