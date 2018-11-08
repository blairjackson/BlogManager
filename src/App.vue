/* eslint-disable */
<template>
  <div>
    <appHeader></appHeader>
    <router-view></router-view>
 
  </div>
</template>

<script>
import addBlog from "./components/addBlog";
import appFooter from "./components/footer";
import appHeader from "./components/header";
import showBlogs from "./components/showBlogs";
import singleBlog from "./components/singleBlog";


export default {
  name: "App",
  components: {
    addBlog,
    appFooter,
    appHeader,
    showBlogs,
    singleBlog
  }
};
</script>

<style>
#app{
  height:100%;
  width:100%;
}
</style>
