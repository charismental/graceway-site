  <template>
  <v-container class='mt-2'>
    <v-card :elevation='$vuetify.breakpoint.smAndDown ? 4 : 0'>
      <v-row>
        <v-col>
          <v-img
            :style='$vuetify.breakpoint.mdAndUp ? "position:absolute;" : "height:50vh;"'
            src="~@/assets/logo.png"
            alt="logo"
            contain
            id="logo"
          ></v-img>
        </v-col>
        <v-col>
          <v-card-text
            class="description"
            :style=
            '$vuetify.breakpoint.mdAndDown ? "padding:2em;" : "padding:2.5em;max-width: 600px;"'
          >
            <p class="seq">
              GraceWay Radio is a one-of-a-kind station that is dedicated to
              the transmission of true worship and Spirit-inspired messages
              that will foster real spiritual growth in listeners. We are
              completely non-profit, and do not air advertisements--our
              station is completely faith-based and listener-supported.
            </p>
              <p class='seq'>Graceway Radio -</p>
              <small class='font-italic seq'>Pure Worship, Pure Word, Pure Radio</small>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'About',
  mounted() {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut', duration: 1.5 },
    });
    tl.from('.description', { opacity: 0, delay: 0.5, duration: 1 }, '-=1.5')
      .from('.description', { x: '-120%', backdropFilter: 'blur(0px)' })
      .from(
        '.seq',
        {
          y: -500, opacity: 0, stagger: 0.2, duration: 2,
        },
        '-=.5',
      );
  },
};
</script>

<style lang="scss" scoped>
#logo {
  height: 90vh;

  &:before {
    content: "";
    z-index: 10;
    position: absolute;
    height: 100%;
    width: 100%;
    top: -105%;
    left: -105%;
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
    top: -105%;
    left: -105%;
  }
  to {
    left: 100%;
    top: 100%;
  }
}

.description {
  top: calc(100% - 50%);
  position: relative;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3em;
  z-index: 1;
  backdrop-filter: blur(30px);
  border: solid 2px transparent;
  background-clip: padding-box;
  box-shadow: 10px 10px 10px rgba(39, 46, 58, 0.08);
  line-height: 1.8rem;
  font-size: 1.3rem;
  text-indent: 2rem;

  @media screen and (max-width: 960px) {
    top: 0;
  }
}
</style>
