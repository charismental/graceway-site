<template>
  <div>
    <blog-filter :blogs="blogs" @select-category="filterCategory"></blog-filter>
    <router-view v-if="$route.name === 'Blog'"></router-view>
    <v-container v-else>
      <v-chip @click="selectBlog(blog.slug)" v-for="blog in filteredBlogs" :key="blog.slug">
        {{ blog.title }}
      </v-chip>
      <!-- <div v-for="(blog, i) in blogs" :key="i">{{ blog.author }}</div> -->
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import BlogFilter from '../components/BlogFilter.vue';

export default {
  name: 'Blogs',
  components: { BlogFilter },
  data: () => ({
    reveal: false,
    blogs: [],
    selectedCategory: '',
  }),
  watch: {
    selectedCategory(newVal, oldVal) {
      if (!oldVal && this.$route.name !== 'Blogs') {
        this.$router.push({ name: 'Blogs' });
      }
    },
  },
  computed: {
    filteredBlogs() {
      if (this.selectedCategory) {
        return this.blogs.filter((blog) => blog.category?.name === this.selectedCategory);
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
      // this.$router.push({ name: 'Blog', params: { slug: blogSlug } })
      // this.blogsThatAreInTheSelectedCategory = someMethodToFilter(category)
    },
    getBlogs() {
      const url = 'https://gwrapi.herokuapp.com/blogs';
      axios
        .get(url)
        .then((res) => {
          if (res?.data) {
            this.blogs = res.data;
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    },
  },
  created() {
    this.getBlogs();
  },
};
</script>

<style lang="scss" scoped>
.main_row {
  clip-path: polygon(0 0, 35% 0, 100% 100%, 0% 100%);
}
.blog_text {
  font-size: 1.3rem;
  height: 100%;
  line-height: 2rem;
  margin-top: 40px;
  margin-bottom: 100px;
}
</style>
