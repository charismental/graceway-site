<template>
  <v-container>
    <v-card :width="isMobile ? '90vw' : '50vw'" class="mx-auto">
      <!-- first-row  -->
      <v-row class="justify-center align-center">
        <!-- :style='{ backgroundImage: `url("${imageUrl}")` }' -->
        <v-col cols="12" class="pt-0">
          <v-img :src="picture" class="rounded-t-lg" max-height="240">
            <v-card-title
              class="blog-title justify-center text-capitalize font-italic white--text"
              :style="
                $vuetify.breakpoint.mdAndDown ? 'font-size:1.5rem;' : 'font-size:2.5rem;'
              "
            >
              {{ title }}
            </v-card-title>
            <hr />
            <v-row>
              <v-col md="3" sm="6">
                <v-card-text class="ml-2 pa-0 info-text">By: {{ author }}</v-card-text>
                <v-card-text class="mt-2 ml-2 pa-0 info-text">{{
                  dateCreated
                }}</v-card-text>
              </v-col>
              <v-col md="3" class="ml-auto">
                <v-card-text class="mb-0 pa-0 info-text">
                  <div>Category: {{ category.name }}</div>
                </v-card-text>
                <v-card-text class="mb-0 pa-0 info-text">
                  <div class="d-inline-flex flex-row mr-2" v-for="t in tags" :key="t.id">
                    <div class="pa-1">{{ t.tag_hash }}</div>
                  </div>
                </v-card-text>
              </v-col>
            </v-row>
          </v-img>
        </v-col>
      </v-row>
      <v-card-text
        class="blog-text pb-16 text-center"
        :class="isMobile ? 'px-4' : 'px-16'"
        v-html="body"
      >
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Blogs',
  components: {},
  data: () => ({
    reveal: false,
    dateCreated: '',
    tags: [],
    category: '',
    title: '',
    author: '',
    body: '',
    picture: '',
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  methods: {
    getBlog() {
      const { blogSlug } = this.$route.params;
      const url = `https://gwrapi.herokuapp.com/blogs/${blogSlug}`;
      axios
        .get(url)
        .then((res) => {
          this.tags = res.data.tags;
          this.category = res.data.category;
          this.title = res.data.title;
          this.author = res.data.author;
          this.body = res.data.body;
          this.picture = res.data.picture;
          this.dateCreated = res.data.date_created;
          this.stars = res.data.stars;
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    },
  },
  mounted() {
    this.getBlog();
  },
};
</script>

<style lang="scss" scoped>
.info-text {
  font-size: 1.3rem;
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 0.92);
  color: white;
}
.first-row {
  max-height: 400px;
  min-height: 300px;
  background-size: cover;
  background: silver;
  background-position: left center;
  background-blend-mode: exclusion;
  background-repeat: no-repeat;
  color: white;
}
.blog-title {
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 0.92);
  backdrop-filter: brightness(120%) blur(5px);
}
.blog-text {
  font-size: 1.3rem;
  height: 100%;
  line-height: 2rem;
  margin-bottom: 100px;
}
</style>
