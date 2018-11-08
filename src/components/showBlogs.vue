/* eslint-disable */

<template>
<v-app dark class="text-xs-center main">
<div class="showBlogs">
    <h1 class="main display-1">{{msg}}</h1>
    <v-text-field class="card" type="text" v-model="search" placeholder="Search blogs"></v-text-field>
    <div v-for="blog in filteredBlogs"  v-bind:key="blog.id" class="single-blog">
        <div class="card">
        <v-card>
        <router-link v-bind:to="'/blog/' + blog.id">
        <v-card-title class="justify-center">
        <h2>{{blog.title}}</h2>
        </v-card-title>
        <article>{{blog.content | snippet}}</article>
        </router-link>
        </v-card>
        </div>
    </div>
</div>
</v-app>
</template>


<script>
export default {
  data() {
    return {
      msg: "All Blogs",
      blogs: [],
      search: ''
    }
  },
  methods: {
  },
  filters: {
      snippet(value){
          return value.slice(0,100) + '...';
      }
  },
  created() {
      this.$http.get('https://blog-1e589.firebaseio.com/posts.json').then(function(data){
          return data.json();
        //   this.blogs = data.body;
      }).then(function(data){
          var blogsArray = [];
          for(let key in data){
              data[key].id = key;
              blogsArray.push(data[key]);
          }
          this.blogs = blogsArray;
      })
  },
  computed: {
      filteredBlogs: function(){
          
          return this.blogs.filter((blog) => {
              console.log(this.search);
              return blog.title.toUpperCase().match(this.search.toUpperCase());
          })
      }
      }
  }

</script>

<style scoped>
.card{
    margin: 20px auto;
    width:60%;
    overflow-wrap: break-word;
    cursor: pointer;
}

a{
    text-decoration: none;
    color: #eee;
}

h2{
    text-transform: uppercase;
}

article{
    padding: 2em;
}

.main{
    padding:2em;
}
</style>
