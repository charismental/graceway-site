  <template>
  <v-container>
    <v-row class="mt-6 justify-center">
      <v-col sm='6' md="12">
        <v-card :elevation="$vuetify.breakpoint.smAndDown ? 4 : 0">
          <v-row no-gutters>
            <v-col cols="12" md="4" class='wrap'>
              <v-img src="~@/assets/logo.png" contain></v-img>
            </v-col>
            <v-divider v-if="$vuetify.breakpoint.mdAndUp" vertical></v-divider>
            <v-col cols="12" md="6" class='align-self-center'>
              <v-card-text class="description" >
                GraceWay Radio is a one-of-a-kind station that is dedicated to
                the transmission of true worship and Spirit-inspired messages
                that will foster real spiritual growth in listeners. We are
                completely non-profit, and do not air advertisements--our
                station is completely faith-based and listener-supported.
              </v-card-text>
             <!--   <v-row class='ma-2'>
              <v-btn href="mailto:admin@gracewayradio.com" class="mx-2" icon>
              <v-icon>mdi-email</v-icon>
              </v-btn>
            <v-btn href="https://www.facebook.com/gracewayradio" target="_blank" icon>
              <v-icon>mdi-facebook</v-icon>
              </v-btn>
              </v-row>-->
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<style lang="scss" scoped>
.description {
  font-size: 1.3rem;
  line-height: 1.8rem;
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
