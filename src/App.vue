<template>
  <v-app>
        <v-navigation-drawer
      v-model="openSideNav"
      right
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevate-on-scroll app color="white">
      <div class="d-flex align-center">
        <v-img
          alt="Graceway Radio Logo"
          contain
          class="ml-4 mt-2"
          src="@/assets/logo.png"
          max-height="60"
          max-width="60"
        />
      </div>
      <v-toolbar-title class="text-h5 ml-2"> Graceway Radio </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        text
        active-class="active-button"
        exact
        class="mr-1"
        small
        :to="{ name: 'Home' }"
        >Home</v-btn
      >
      <v-btn text class="mr-1" small :to="{ name: 'About' }"
        >Program Schedule</v-btn
      >
      <v-btn text class="mr-1" small>How to Listen</v-btn>
      <v-btn text class="mr-1" small>Blog</v-btn>
      <v-btn text class="mr-1" small>Contact</v-btn>
      <v-btn text class="mr-1" small>Make a Donation</v-btn>
      <v-app-bar-nav-icon @click.stop="openSideNav = !openSideNav"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <v-container fluid class="px-6">
        <!-- style="transform:rotate(-90deg)" -->
        <v-carousel v-model="model" height="320" :show-arrows="false" cycle>
          <v-carousel-item v-for="(color, i) in colors" :key="color">
            <v-sheet :color="color" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">Slide {{ i + 1 }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    model: 0,
    openSideNav: false,
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
  }),
};
</script>

<style scoped>
.active-button {
  color: red;
}
</style>
