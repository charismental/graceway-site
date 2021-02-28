<template>
  <v-container>
    <h3 class="text-center">Find GracewayRadio in these directories!</h3>
    <v-divider inset></v-divider>
    <div v-if="isMobile">
      <v-row v-for="d in directories" :key="d.name" class="justify-center align-center">
        <v-col lg="4" md="6" sm="11">
          <v-card elevation="0">
            <p>Directory: {{ d.name }}</p>
            <p v-if="d.link"><span v-html="d.link"></span></p>
            <v-btn
              v-if="d.listen"
              :href="d.listen"
              dark
              elevation="6"
              block
              color="primary"
              class="mb-2"
              target="_blank"
              >Listen Now</v-btn
            >
          </v-card>
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </div>
    <div v-else align="center">
      <v-row align="center" justify="space-between">
        <v-col v-for="d in directories" :key="d.name" cols="6">
          <v-card width="700">
            <v-row align="center" justify="center">
              <v-col >
                <v-card-title>
                  {{ d.name }}
                </v-card-title>
                <v-card-subtitle v-if="d.link" v-html="d.link"> </v-card-subtitle>
              </v-col>
              <v-col >
                  <v-btn
                    bottom
                    v-if="d.listen"
                    :href="d.listen"
                    dark
                    elevation="6"
                    color="primary"
                    target="_blank"
                    >Listen Now</v-btn
                  >
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'HowToListen',
  components: {},
  data: () => ({
    model: 0,
    directories: [
      {
        name: 'Internet-Radio.com',
        link: '<a href="http://www.internet-radio.com" title="Internet Radio" target="_blank"><img src="http://www.internet-radio.com/images/internet-radio-reflection.png" style="width:80%;height:30px;" alt="Internet Radio"></a>',
        listen: 'https://www.internet-radio.com/search/?radio=graceway',
      },
      {
        name: 'Radioguide.FM',
        link: '<a href="https://www.radioguide.fm/" title="Listen radio"><img src="https://www.radioguide.fm/public/img/banners/banner0.png" style="width:80%;height:30px;" alt="Listen radio"></a>',
      },
      {
        name: 'Zeno.FM',
        link: '<img src="https://www.zeno.fm/widget/assets/images/elements/logo-zeno-black.png" style="width:80%;height:30px;" alt="Zeno">',
        listen: 'https://zeno.fm/gracewayradio/',
      },
      {
        name: 'Streamitter.com',
        link: '<a href="https://radio.streamitter.com" target="_blank" title="Streamitter - we love radio"><img src="https://radio.streamitter.com/images/link/300x40-white.png" style="width:80%;height:30px;" alt="Streamitter.com - we love radio" /></a>',
        listen: 'https://radio.streamitter.com/station/graceway-radio-E0DS0P',
      },
      {
        name: 'Raddio.net',
        link: '<a target="_blank" href="https://raddio.net/371658-graceway-radio/"><img src="https://raddio.net/img/widgets_3.png" style="width:80%;height:40px;"></a>',
        listen: 'https://raddio.net/371658-graceway-radio/',
      },
      {
        name: 'Streamfinder.com',
        link: '<a href="http://streamfinder.com/?ref=g9ztZfAGmFvu5KITeadInJ7yJtkeTUvJ" title="streamfinder online radio guide"><img src="http://streamfinder.com/images/streamfinder-icon.gif" style="width:80%;height:30px;" alt="streamfinder streaming radio list" align="absmiddle" border="0"></a>',
        listen: 'https://www.streamfinder.com/streaming-radio/graceway-radio/77010/',
      },
      {
        name: 'Liveradio.ie',
        link: '<a href="https://www.liveradio.ie/"><img src="https://www.liveradio.ie/liveradio-logo.png" style="width:80%;height:30px;" border="0" alt="Live Radio"/> </a>',
        listen: 'https://www.liveradio.ie/stations/graceway-radio',
      },
      {
        name: 'Listenonlineradio.com',
        link: '<a href="https://www.listenonlineradio.com"><img src="https://www.listenonlineradio.com/assets/images/468x60.png" style="width:80%;height:30px;" border="0" alt="Listen Online Radio"/> </a>',
        listen: 'https://www.listenonlineradio.com/usa/graceway-radio',
      },
    ],
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>
