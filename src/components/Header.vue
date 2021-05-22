<template>
  <header>
      <h1>Where in the world?</h1>
      <!-- <button>
          <span>&#x263e;</span> Dark mode
          </button> -->
          <span class="fi" @click="$emit('setdark')"><span class="bi">&#x263e;</span> Dark mode</span>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 50px ;
    background-color: white;
    color:hsl(200, 15%, 8%) ;
    align-items: center;
    

}
h1{font-weight: 800;
margin: 0px;

}
/* button{
    width: 100px;
    height: 30px;
    padding-bottom: 29px;
    background-color: white;
    border-color: white;
    outline:none;
} */
.bi{
    font-size: 20px;
   
}
</style>