<template>
  <v-app>
    <v-app-bar elevate-on-scroll app color="white">
      <div class="d-flex align-center">
        <v-img
          alt="Graceway Radio Logo"
          contain
          class="mt-2"
          :class="isMobile ? '' : 'ml-4'"
          src="@/assets/logo.png"
          max-height="60"
          max-width="60"
        />
      </div>
      <v-toolbar-title class="ml-2">
        <div
          :class="$vuetify.breakpoint.smAndUp ? 'text-h5' : 'text-body-1'"
          class="glitch"
          data-text="Graceway Radio"
        >
          Graceway Radio
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-if="!isMobile">
        <v-btn
          v-for="navItem in navItems"
          :key="navItem.name"
          :text="!navItem.featured"
          active-class="active-button"
          class="mr-2"
          :color="navItem.featured ? 'warning' : ''"
          exact
          :small="$vuetify.breakpoint.lgAndUp"
          :x-small="$vuetify.breakpoint.mdAndDown"
          :to="navItem.link"
          >{{ navItem.name }}</v-btn
        >
      </div>
      <v-app-bar-nav-icon
        v-if="isMobile"
        @click.stop="openSideNav = !openSideNav"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="openSideNav" right app temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="navItem in navItems" :key="navItem.name">
            <v-list-item-title @click="navTo(navItem.link)">{{ navItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    openSideNav: false,
    navItems: [
      {
        name: 'Home',
        link: { name: 'Home' },
        featured: false,
      },
      {
        name: 'Program Schedule',
        link: { name: 'ProgramSchedule' },
        featured: false,
      },
      {
        name: 'How To Listen',
        link: { name: 'HowToListen' },
        featured: false,
      },
      {
        name: 'Blog',
        link: { name: 'Blog' },
        featured: false,
      },
      {
        name: 'Contact',
        link: { name: 'Contact' },
        featured: false,
      },
      {
        name: 'Make A Donation',
        link: { name: 'Donate' },
        featured: true,
      },
    ],
  }),
  methods: {
    navTo(linkObj) {
      this.$router.push(linkObj);
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style lang="scss" scoped>
.active-button {
  color: red;
}
@mixin glitchCopy {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch {
  position: relative;
  color: black;
  font-size: 4em;
  letter-spacing: 0.5em;
  animation: glitch-skew 2s infinite linear alternate-reverse;
  text-shadow: 2px 1px 2px rgba(0, 107, 174, 0.5);
  font-weight: bold;

  &::before {
    @include glitchCopy;
    left: 2px;
    text-shadow: -2px 0 #1b0bf5;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }

  &::after {
    @include glitchCopy;
    left: -2px;
    text-shadow: -2px 0 #00fff9, 2px 2px #00f7ff;
    animation: glitch-anim2 1s infinite linear alternate-reverse;
  }
}
@keyframes glitch-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      transform: skew((random(100) / 100) + deg);
    }
  }
}
@keyframes glitch-anim2 {
  $steps: 10;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      transform: skew((random(100) / 100) + deg);
    }
  }
}
@keyframes glitch-skew {
  $steps: 10;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      transform: skew((random(10) - 5) + deg);
    }
  }
}
</style>
