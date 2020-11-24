<template>
  <!-- <div class="about"> -->
  <v-container>
    <v-row class="mt-6 justify-center">
      <v-col cols="4 wrap">
        <v-img src="~@/assets/logo.png"></v-img>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="6 my-auto">
        <v-row>
          <v-card-text class="description">
            <span class="station_name">GraceWay Radio</span> is a one-of-a-kind station that is
            dedicated to the transmission of true worship and Spirit-inspired messages that will
            foster real spiritual growth in listeners. We are completely non-profit, and do not air
            advertisements--our station is completely faith-based and listener-supported.
          </v-card-text>
        </v-row>
        <v-row>
          <v-card-subtitle>
            <v-col>
              Contact Us:
            </v-col>
            <v-col>
              <a href="mailto:admin@gracewayradio.com" class="mr-2">
                <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2
                6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20
                18H4V8L12 13L20 8V18Z"
                  />
                </svg>
              </a>
              <a href="https://www.facebook.com/mastersvoiceradio" target="_blank">
              <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2
                17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44
                7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45
                6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89
                14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                />
              </svg>
              </a>
            </v-col>
          </v-card-subtitle>
        </v-row>
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
  font-weight: bold;
}

.wrap {
  display: inline-block;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
  }
  &:before {
    content: "";
    z-index: 10;
    position: absolute;
    height: 200%;
    width: 200%;
    top: -120%;
    left: -120%;
    background: linear-gradient(
      transparent 0%,
      rgba(255, 255, 255, 0.1) 45%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.1) 55%,
      transparent 100%
    );
    transition: all 4s;
    transform: rotate(-45deg);
    animation: shine 8s infinite forwards;
  }
}
@keyframes shine {
  from {
    top: -120%;
    left: -120%;
  }
  to {
    left: 100%;
    top: 100%;
  }
}
</style>
