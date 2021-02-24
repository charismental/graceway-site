<template>
  <div class="how-to-listen">
    <v-container max-width="300">
      <h3 class='text-center'>Find GracewayRadio in these directories!</h3>
      <v-divider inset></v-divider>
      <v-row
      v-for="d in directories" :key="d.name"
      class="justify-center align-center">
        <v-col lg="4" md="6" sm="11">
          <v-card elevation="0">
          <p>Directory: {{d.name}}</p>
          <p v-if="d.link"><span v-html='d.link'></span></p>
          <v-btn
          v-if="d.listen"
           :href="d.listen"
           dark
           elevation="6"
           block
           color="primary"
           class="mb-2"
           target="_blank">Listen Now</v-btn>
          </v-card>
      <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'HowToListen',
  components: {},
  data: () => ({
    directories: [
      {
        name: 'Internet-Radio.com',
        link: '<a href="http://www.internet-radio.com" title="Internet Radio" target="_blank"><img src="http://www.internet-radio.com/images/internet-radio-reflection.png" style="width:70%; alt="Internet Radio"></a>',
        listen: 'https://www.internet-radio.com/search/?radio=graceway',
      },
      {
        name: 'Radioguide.FM',
        link: '<a href="https://www.radioguide.fm/" title="Listen radio"><img src="https://www.radioguide.fm/public/img/banners/banner0.png" style="width:70%" alt="Listen radio"></a>',
      },
      {
        name: 'Zeno.FM',
        listen: 'https://zeno.fm/gracewayradio/',
      },
      {
        name: 'Streamitter.com',
        link: '<a href="https://radio.streamitter.com" target="_blank" title="Streamitter - we love radio"><img src="https://radio.streamitter.com/images/link/300x40-white.png" style="width:70%; border:none;" alt="Streamitter.com - we love radio" /></a>',
        listen: 'https://radio.streamitter.com/station/graceway-radio-E0DS0P',
      },
      {
        name: 'Raddio.net',
        link: '<a target="_blank" href="https://raddio.net/371658-graceway-radio/"><img src="https://raddio.net/img/widgets_3.png"></a>',
        listen: 'https://raddio.net/371658-graceway-radio/',
      },
      {
        name: 'Streamfinder.com',
        link: '<a href="http://streamfinder.com/?ref=g9ztZfAGmFvu5KITeadInJ7yJtkeTUvJ" title="streamfinder online radio guide"><img src="http://streamfinder.com/images/streamfinder-icon.gif" alt="streamfinder streaming radio list" align="absmiddle" border="0"></a>',
        listen: 'https://www.streamfinder.com/streaming-radio/graceway-radio/77010/',
      },
      {
        name: 'Liveradio.ie',
        link: '<a href="https://www.liveradio.ie/"><img src="https://www.liveradio.ie/liveradio-logo.png" width="154" height="36" border="0" alt="Live Radio"/> </a>',
        listen: 'https://www.liveradio.ie/stations/graceway-radio',
      },
    ],
  }),
};
</script>
