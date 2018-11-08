<template>
  <div class = "footer">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hey bender',
    };
  },
};
</script>

<style scoped>
.footer{
  position: relative;
  background-color: rgb(90, 36, 36);
  height:100px;
  width:100%;
  bottom:0;
}


h1{
    text-align: center;
    color:aliceblue;
}

</style>
