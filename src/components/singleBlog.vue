/* eslint-disable */
<template>
<v-app dark>
    <div class="text-xs-center blog-size center">
        <h1 class="title-space letters upper blog-heading">{{blog.title}}</h1>
        <article class="cat-space">{{blog.content}}</article>
        <v-list class="cat-space">
            <li v-for="category in blog.categories" v-bind:key="category.key">{{category}}</li>
        </v-list>
    </div>
</v-app>

</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            blog: {}
        }
    },
    created(){
        console.log("fetching blogs");
        this.$http.get('https://blog-1e589.firebaseio.com/posts/' + this.id + '.json').then(function(data){
          return data.json();
    }).then(function(data){
        this.blog = data;
        console.log(data);
    });
}}

</script>

<style scoped>

.text-area-color{
  background-color: rgba(114, 114, 114, 0.2);
  border-radius: 5px;
}

.letters{
  letter-spacing: .12em;
}

.title-space, .cat-space{
  padding: 1em;
  margin: 1em;
}

.upper{
    text-transform: uppercase;
}

.blog-size{
    width:60%;
}

.center{
    margin: 2em auto;
}


</style>
