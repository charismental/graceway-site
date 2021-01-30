<template>
  <v-container>
    <v-card
      :width="isMobile ? '90vw' : '50vw'"
      class="mx-auto"
    >
      <!-- first-row  -->
      <v-row class="justify-center align-center">
        <v-col
          cols="12"
          class="pt-0"
        >
          <v-img
            :src="picture"
            class="rounded-t-lg"
            max-height="240"
            position='top center'
            cover
          >
            <v-card-title class="blog-title
            white--text justify-center align-self-end"
            :style="$vuetify.breakpoint.mdAndUp ? 'font-size:1.8rem;' : 'font-size:1rem;'">
                {{ title }}
            </v-card-title>
          </v-img>
        </v-col>
      </v-row>
      <v-row justify='space-between'>
        <v-col>
          <v-card-text class="ml-2 mt-2 pa-0 info-text">
            <div>Category: {{ category.name }}</div>
          </v-card-text>
          <v-card-text class="ml-2 mb-0 pa-0 info-text">
            <div
              class="d-inline-flex flex-row mr-2"
              v-for="t in tags"
              :key="t.id"
            >
              <div class="pa-1">{{ t.tag_hash }}</div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
      <v-card-text
        class="blog-text pb-16 text-center"
        :class="isMobile ? 'px-4' : 'px-16'"
        :style=
        "$vuetify.breakpoint.mdAndUp ?
        'font-size:1.2rem;line-height:2rem;' :
        'font-size:1rem;line-height:1.2rem;'"
        v-html="body"
      >
      </v-card-text>
      <v-row>
      <v-col>
      <v-card-text class="info-text">
        By: {{ author }}
      </v-card-text>
      </v-col>
      <v-col>
        <v-card-text class="info-text">
        {{dateCreated}}
        </v-card-text>
      </v-col>
      </v-row>
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
  color: darkgray;
}
.first-row {
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
}
.blog-title {
  text-shadow: 4px 2px 5px rgba(0,21,169,0.59);
}
.blog-text {
  margin-bottom: 2rem;
}
</style>
