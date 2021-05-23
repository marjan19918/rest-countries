<template>
  <div class="mainloading">
      <div class="loading"></div>
  </div>
</template>

<script>
export default {

}
</script >

<style scoped>
.mainloading{
    width: 100%;
    height: 800px;
}
.loading{
    margin: 200px auto;
    
    width: 100px;
    height: 100px;
    border-radius: 200px;
    border:10px dotted black;
    
    animation:loading 1s linear  infinite  ;
    
}
@keyframes loading {
   0%{transform: rotate(0deg);} 
   50%{transform: rotate(180deg);}
   100%{transform: rotate(360deg);}
}

</style>