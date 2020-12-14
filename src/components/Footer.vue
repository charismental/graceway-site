<template>
  <div>
    <v-divider class="mt-4"></v-divider>

    <v-row>
      <v-col cols="12" sm="6" md="3" order="1">
        <v-card elevation="0">
          <v-card-title class="justify-center text-h4">About Us</v-card-title>
          <v-card-text class="pr-0">
            GraceWay Radio is a one-of-a-kind station that is dedicated to the
            transmission of true worship and Spirit-inspired messages that will foster
            real spiritual growth in listeners...
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
            <v-btn x-large icon target="_blank" href="https://facebook.com/gracewayradio">
              <v-icon x-large>mdi-facebook</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn x-large icon href="https://twitter.com/gracewayradio" target="_blank">
              <v-icon x-large>mdi-twitter</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
              x-large
              icon
              target="_blank"
              href="https://www.pinterest.com/0d3aa86dbac59562a79530250b16e8"
            >
              <v-icon x-large>mdi-pinterest</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
              x-large
              icon
              target="_blank"
              href="https://www.instagram.com/gracewayradio/"
            >
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
          <v-card-text class='text-center'>
            <v-btn href="mailto:admin@gracewayradio.com" icon>
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <p class="font-weight-thin text-center">&copy; 2020 GraceWay Radio</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
};
</script>
