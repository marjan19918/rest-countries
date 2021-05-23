<template>
  <header :class="[dark ? 'darkmode' : '']">
      <h1>Where in the world?</h1>
      
          <span class="fi" @click="$emit('setdark')"><span class="bi">&#x263e;</span> Dark mode</span>
  </header>
</template>

<script>
export default {
props:{
    dark:Boolean
}
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


.bi,span{
    font-size: 20px;
   cursor: pointer;
}
.darkmode{
  background-color:hsl(207, 26%, 17%) ;
  color: white;
    
}
@media screen and (max-width:420px){
   header{padding: 20px;} 
   h1{font-size: 16px;}
   span{
       font-size: 14px;
   }
}
</style>