<template>
  <v-container>
    <v-card elevation=0>
    <v-row
      class="d-flex flex-row justify-center"
      no-gutters
      align='center'
    >
      <v-col class='main_row flex-grow-0 flex-shrink-1' md='5'>
        <v-img src='https://rb.gy/vwzqov' contain ></v-img>
      </v-col>
      <v-col >
          <v-card-title
            primary-title
            class='display-1 mb-2'
          >
            {{title.toUpperCase()}}
          </v-card-title>
          <hr>
          <v-row >
          <v-col class='mr-6'>By: {{author}}</v-col>
          <v-col >{{dateCreated.slice(0,10)}}</v-col>
          <div v-for='s in stars' :key='s' class='mt-2 ml-1'>
            <!-- <v-img src='../assets/star.png'  contain position='left' width=15></v-img> -->
            <v-icon style='color:gold;'>mdi-star</v-icon>
          </div>
          </v-row>
          <v-row>
          </v-row>
          <div class='mt-2'>Category: {{category.name}}</div>
          <div class='d-inline-flex flex-row' v-for='t in tags' :key='t.id'>
            <div class='pa-1'>#{{t.tag}}</div>
          </div>
      </v-col>
    </v-row>
    </v-card>
        <v-card-text class="blog_text" v-html="blogText">
        </v-card-text>
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
    stars: 0,
    category: '',
    title: '',
    author: '',
    body: '',
    extraBody: '',
    picture: '',
  }),
  computed: {
    blogText() {
      return this.body + this.extraBody;
    },
  },
  methods: {
    getBlog() {
      const { blogId } = this.$route.params;
      const url = `https://gwrapi.herokuapp.com/blogs/${blogId}`;
      axios
        .get(url)
        .then((res) => {
          this.tags = res.data.tags;
          this.category = res.data.category;
          this.title = res.data.title;
          this.author = res.data.author;
          this.body = res.data.body;
          this.extraBody = res.data.extra_body;
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

<style lang='scss' scoped>
.main_row {
  clip-path: polygon(0 0, 35% 0, 100% 100%, 0% 100%);
}
.blog_text {
  font-size: 1.3rem;
  height:100%;
  line-height: 2rem;
  margin-top: 40px;
  margin-bottom: 100px;
}

</style>
