<template>
  <div>
    <blog-filter
      :blogs="blogs"
      @select-category="filterCategory"
    ></blog-filter>
    <router-view v-if="$route.name === 'Blog'"></router-view>
    <v-container v-else>
      <v-row justify="center" align="center">
        <v-col v-for="blog in filteredBlogs"
        :key="blog.slug" lg="5" sm="10" md="6" >
          <v-card @click="selectBlog(blog.slug)"
          elevation="10"
          class="mx-auto">
            <v-img
              height="300"
              :src="blog.picture"
              cover
            >
            </v-img>
            <v-card-title>
              {{ blog.title }}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text-center" >
              {{blog.intro_text}}
            </v-card-text>
            <v-row class="justify-end align-end">
              <v-col lg="3" md="4" sm="5">
                {{ blog.date_created}}
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- <div v-for="(blog, i) in blogs" :key="i">{{ blog.author }}</div> -->
    </v-container>
  </div>
</template>

<script>
import BlogFilter from '../components/BlogFilter.vue';

export default {
  name: 'Blogs',
  components: { BlogFilter },
  data: () => ({
    selectedCategory: '',
  }),
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
    filteredBlogs() {
      if (this.selectedCategory) {
        return this.blogs.filter(
          (blog) => blog.category?.name === this.selectedCategory,
        );
      }
      return this.blogs;
    },
  },
  methods: {
    selectBlog(slug) {
      this.$router.push({ name: 'Blog', params: { blogSlug: slug } });
    },
    filterCategory(category) {
      if (category === this.selectedCategory) {
        this.selectedCategory = '';
      } else {
        this.selectedCategory = category;
      }
    },
    getBlogs() {
      this.$store.dispatch('getBlogs');
    },
  },
  created() {
    this.getBlogs();
  },
};
</script>

<style lang="scss" scoped>
</style>
