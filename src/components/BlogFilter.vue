<template>
  <v-container
    rounded="xl"
    class="blogfilter"
    elevation="10"
  >
    <v-row justify="center">
      <v-col cols="12">
          <div class="text-center text-xl-h2 text-md-h3 text-sm-h4">
            Welcome To Our Blog Page
          </div>
          <v-divider></v-divider>
          <div class="subtitle font-weight-light mt-3 mb-0">Search By Category</div>
      </v-col>
    </v-row >
    <v-row class="row_two" justify="center" align="center">
      <v-col v-if="!isMobile">
        <v-chip-group column >
          <v-chip
            :disabled="$route.name === 'Blog'"
            v-for="b in blogs"
            :key="b.id"
            label
            color="primary"
            @click="selectCategory(b.category.name)"
          >
            {{b.category.name}}
          </v-chip>
        </v-chip-group>
        <v-chip color="accent" to="/blog" v-if="$route.name === 'Blog'">
        <v-icon class="pr-2">mdi-arrow-left-bold-outline</v-icon>Go Back</v-chip>
      </v-col>
      <v-col v-else>
        <v-select
          :items="blogs"
          name="Categories"
          item-text="category.name"
          label="Categories"
          item-value="category.name"
          persistent-hint
          @change="selectCategory"
          clearable
          item-color="primary"
          solo>
        </v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'BlogFilter',
  data: () => ({
  }),
  props: {
    blogs: {
      type: Array,
    },
  },
  components: {},
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  methods: {
    selectCategory(category) {
      // eslint-disable-next-line no-console
      console.log(category);
      this.$emit('select-category', category);
    },
  },
};
</script>

<style lang="scss" scoped>
.blogfilter {
  max-height: 20em;
  min-height: 10em;
  max-width: calc(100vw - 20%);

  > .row_two {
    background: blue;
    opacity: 0.8;
    border-radius: 10px;
  }
}
</style>
