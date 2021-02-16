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
            position='center center'
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
    <v-row class="justify-center align-end">
      <v-col cols="4">
        <v-btn block color="accent" elevation="2" to="/blog">
        <v-icon class="pr-2">mdi-arrow-left-bold-outline</v-icon>Go Back</v-btn>
      </v-col>
    </v-row>
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
::v-deep .blog-text >  {

  h2 {
    margin-bottom:0.5em;
  }
  hr {
    margin-bottom:1em;
  }

  blockquote {
    background: #f9f9f9;
    font-weight: bold;
    border-left: .8em solid darkgrey;
    margin: 1.6em 2em;
    padding: 1em 2em;
    quotes: "\201C""\201D""\2018""\2019";

      &::before {
      color: #ccc;
      content: open-quote;
      font-size: 4em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }
    p {
      display: inline;
    }
  }
}
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
