<template>
  <!-- <div class="about"> -->
  <v-container>
    <v-row class="mt-6 justify-center">
      <v-col cols="4">
        <v-img src="~@/assets/logo.png"></v-img>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="6 my-auto">
        <v-card-text class="description">
          <span class="station_name">GraceWay Radio</span> is a one-of-a-kind station that is
          dedicated to the transmission of true worship and
          Spirit-inspired messages that will foster real spiritual growth in listeners. We are
          completely non-profit, and do not air advertisements--our station is completely
          faith-based and listener-supported.
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
  <!-- </div> -->
</template>

<!--  ###############FOR SMALL SCREENS####################
  <v-container>
    <v-row class="mt-6 justify-center">
      <v-col cols="6">
        <v-card elevation="4">
          <v-img src="~@/assets/logo.png"></v-img>

          <v-card-text class="description">
            GraceWay Radio is a one-of-a-kind station that is dedicated to the transmission of true
            worship and Spirit-inspired messages that will foster real spiritual growth in
            listeners. We are completely non-profit, and do not air advertisements--our station is
            completely faith-based and listener-supported.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  -->

<style lang="scss" scoped>
.description {
  line-height: 1.5rem;
  text-indent: 2rem;
}
.paragraph_holder {
  background-image: url("~@/assets/logo.png");
  background-size: cover;
  opacity: 0.2;
}
.station_name {
  font-size: 1.3rem;
}
</style>
