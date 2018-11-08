/* eslint-disable */
<template>
    <nav>
        <ul>
            <li><router-link to="/" exact> Blogs </router-link></li>
            <li><router-link to="/add" exact> Add Blog </router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped>
nav {
  background-color: rgb(31, 31, 31);
  font-family: 'Roboto', sans-serif;
}

ul {
  list-style-type: none;
  text-align: center;
}

li {
  display: inline-block;
  padding: 20px;
  font-size: 30px;
  cursor: pointer;
}
a{
    text-decoration: none;
    color: aliceblue;
    border-radius: 10px;
    padding: 6px 8px;
    
}



.router-link-active{
  background: #eee;
  color: black;
}
</style>
