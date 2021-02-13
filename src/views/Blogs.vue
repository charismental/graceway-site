<template>
  <div>
    <!-- <blog-filter></blog-filter> -->
    <router-view v-if="$route.name === 'Blog'"></router-view>
    <v-container v-else>
      <!-- <div v-for="(blog, i) in blogs" :key="i">{{ blog.author }}</div> -->
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
// import BlogFilter from '../components/BlogFilter.vue';

export default {
  name: 'Blogs',
  // components: { BlogFilter },
  data: () => ({
    reveal: false,
    blogs: [],
  }),
  computed: {
    // blogText() {
    //   return this.body + this.extraBody;
    // },
  },
  methods: {
    getBlogs() {
      const url = 'https://gwrapi.herokuapp.com/simple/';
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
