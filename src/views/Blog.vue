/* eslint-disable new-cap */
/* eslint-disable new-cap */
/* eslint-disable max-len */
<template>
  <v-container>
    <v-row
      class="blog justify-start mt-4 mb-4 main_row"
      no-gutters
      align='end'
    >
      <v-col :cols='$vuetify.breakpoint.smAndDown ? "8" : "5"' >
        <v-card class="main_card">
          <v-card-title
            primary-title
            class='display-1 mb-2'
          >
            &#84;itle
          </v-card-title>
          <div class="d-flex justify-space-between mb-2">
          <div class='ml-2'>By: Smithy McSmithers</div>
          <div class='caption  mr-2'>{{date}}</div>
          </div>
          <v-divider></v-divider>
          <v-card-text >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              @click='reveal=true'
            >
              Read More &rarr;
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <v-card
              v-if='reveal'
              class='transition-ease-in-ease-out v-card--reveal'
              style='height:100%;'
            >
              <v-card-text>
                <p>
                  ...when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into e
                  lectronic typesetting, remaining essentially unchanged. It was popularised in the
                  1
                  960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker including versions
                  of
                  Lorem Ipsum.
                </p>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  @click='reveal = false'
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-spacer></v-spacer>
    <v-row>
      <v-col
        v-for='n in 8'
        :key='n'
        cols='12'
        sm='4'
      >
        <v-hover
          v-slot='{ hover }'
          open-delay="100"
        >
          <v-card
            class='pa-2'
            outlined
            title
            :elevation='hover ? 16 : 2'
            :class='{ "onHover" : hover }'
            id="secondary_blog_entry"
          >
            <v-col class='pa-4 mb-0'>
              <v-img
                src='https://rb.gy/j6ersb'
                contain
                class='token_img'
                gradient='to bottom right, rgba(254,255,255,.2) 0%,rgba(221,241,249,.3) 70%,
                rgba(160,216,239,.5) 100%'
              ></v-img>
            </v-col>
            <v-col class='mt-0'>
              <v-card-title title>&#84;&#105;&#116;&#108;&#101;</v-card-title>
              <v-card-text>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </v-card-text>
            </v-col>

          </v-card>
        </v-hover>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  name: 'Blog',
  components: {},
  data: () => ({
    reveal: false,
    date: '',
  }),
  methods: {
    getDate() {
      // const todaysDate = new Date();
      const currentDateWithFormat = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
      this.date = currentDateWithFormat;
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style lang='scss' scoped>
.main_row {
  background: url('https://rb.gy/vwzqov'), url('https://rb.gy/vwzqov');
  height: 100%;
  background-blend-mode: darken;
  background-position: center center;
  background-size: cover;
  height: 600px;

  & .main_card {
      background: transparent;

    & * {
      color: white;
      font-size: 1.2em;
      border: none;
      background: transparent;
    }
  }

}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
#secondary_blog_entry {
  height: auto;

  .token_img {
    opacity: 0.8;
    border-radius: 8px;
  }
}
</style>

//TODO  Enter props of individual blog posts
//TODO  force side by side cols on small blog cards !optional
//TODO  Dynamically truncate text of child blog posts
