<template>
  <div class="blogfilter">
    <v-container rounded="xl">
      <v-row justify="center">
        <v-col cols="12">
          <v-card>
            <v-card-title>
              Search for blogs based on Category
            </v-card-title>
          </v-card>
              <v-chip-group>
                <v-chip
                  v-for="b in blogs"
                  :key="b.slug"
                  label
                  @click="selectCategory(b.category.name)"
                >
                  {{b.category.name}}
                </v-chip>
              </v-chip-group>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'BlogFilter',
  data: () => ({
    // blogs: [],
    // categories: [],
  }),
  props: {
    blogs: {
      type: Array,
    },
  },
  components: {},
  methods: {
    selectCategory(category) {
      this.$emit('select-category', category);
    },
  },
  // methods: {
  //   getAllCategories() {
  //     const categoryUrl = 'https://gwrapi.herokuapp.com/category';
  //     axios
  //       .get(categoryUrl)
  //       .then((res) => {
  //         if (res?.data) {
  //           this.categories = res.data;
  //         }
  //       })
  //       .catch((err) => {
  //         // eslint-disable-next-line no-console
  //         console.error(err);
  //       });
  //   },
  //   getCategoryBlogs(category) {
  //     if (typeof category === 'object' && category.blogs) {
  //       category.blogs.forEach((b) => {
  //         this.blogs.push(b);
  //       });
  //     }
  //   },
  // },
  // created() {
  //   this.getCategoryBlogs();
  // },
};
</script>

<style lang="scss" scoped>
.blogfilter {
  background: blue;
  max-height: 20em;
  min-height: 10em;
}
</style>
