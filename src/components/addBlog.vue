
<template>
<v-app dark>
  <v-container>
  <div class="blog">
    <!-- Blog input -->
    <form v-if="!submitted">
    <h2 class="display-1 text-xs-center font-weight-bold letters title-space">Blog Title:</h2>
    <v-text-field class="text-area-color" type="text" placeholder="Title" v-model.lazy="blog.title"></v-text-field>
    <h2 class="display-1 text-xs-center font-weight-bold title-space">Blog content:</h2>
    <v-textarea class="text-xs-center text-area-color" style="white-space: pre-wrap;" rows="15" cols="80" placeholder="Content" v-model.lazy="blog.content"></v-textarea>
    <br>
    <div class="text-xs-center">
    <div class="cat-space">
    <label>Advice</label>
    <input type="checkbox" value="Advice" v-model="blog.categories">
    </div>

    <div class="cat-space">
    <label>Money Tips</label>
    <input type="checkbox" value="Money Tips" v-model="blog.categories">
    </div>

    <div class="cat-space">
    <label>Travel</label>
    <input type="checkbox" value="Travel" v-model="blog.categories">
    </div>

    <div class="cat-space">
    <label>Jobs</label>
    <input type="checkbox" value="Jobs" v-model="blog.categories">
    </div>

    </div>
    <br>
    <div class="text-xs-center">
    <v-btn color="primary" v-on:click.prevent="submitBlog">Submit Blog</v-btn>
    </div>
    </form>

    <!-- Blog Demo -->
    <div class="text-xs-center">
    <h2 v-if="submitted">Thank you for submitting</h2>
    <div class="blog-demo">
    <h1 class="blog-heading letters">{{blog.title | addWord}}</h1>
    <p class="blog-content letters">{{blog.content}}</p>
    <div class="cat-list">
    <v-list>
      <li v-for="category in blog.categories" v-bind:key="category.id">{{category}}</li>
    </v-list>
    </div>
    </div>
    </div>


  </div>
  </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
      },
      submitted: false,
    };
  },
  methods: {
    submitBlog() {
      console.log('submitting blog');
      this.$http.post('https://blog-1e589.firebaseio.com/posts.json', this.blog,
      ).then((data) => {
        console.log(data);
        this.submitted = true;
      });
    },
  },
  filters: {
    addWord(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.text-area-color{
  background-color: rgba(114, 114, 114, 0.2);
  border-radius: 5px;
}

.letters{
  letter-spacing: .12em;
}

.title-space, .cat-space{
  padding: 1em;
}

.blog-demo{
  background-color: rgba(114, 114, 114, 0.1);
  padding:2em;
  margin: 2em;
}
.blog-heading, .blog-content{
  padding-bottom: 1em;
}

</style>
