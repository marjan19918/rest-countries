<template>


  <div class="kl" >
    <!-- <router-link :to="{name:'Details',params:{countrydetal:country}}"> -->
      <div class="countrycont" @click="$emit('coutryclicked',id,name)" @dbclick="$emit('choosename',name)" :class="[dark ? 'darkmode' : '']">
        <div class="imgcont">
         <img :src="country.flag" alt="flag"> 
         </div>
        <div class="infocont" :class="[dark ? 'darkmode' : '']">
<p class="name">{{country.name}}</p>
  <p><span>Population:</span>{{country.population}}</p>
  <p><span>Region:</span>{{country.region}}</p>
  <p><span>Capital:</span>{{country.capital}}</p>
        </div>
 
      </div>
      <!-- </router-link> -->
  </div>
  
</template>

<script>
export default {
props:{
    country:Object,
    dark:false

},
methods: {
  
},
}
</script>

<style scoped>

.countrycont{
  
  margin: 30px 15px;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 370px;
  /* border: 1px solid black; */
  border-radius: 5px;
  background-color: white;
}

.imgcont{
  /* width: 100%; */
 
  /* height: 300px; */
  /* height: 50%; */
  height: 220px;
border-radius: 5px 5px 0px 0px;
}
.imgcont img{
  width: 100%;
   object-fit: cover;
   height: 100%;
}
.infocont{
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
 
}
.kl{
  display: flex;
   flex-direction: row;
   flex-wrap: wrap;
}

p{display: inline;
line-height: 15px;font-size: 14px;line-height: 26px;}
span{
  display: inline;
  font-weight: 600;
  font-size: 14px;
  
}
.name{
  font-size: 18px;
  display: block;
  font-weight: 800;
  margin-bottom: 15px;
  margin-top: 5px;
}
.darkmode{
  background-color:hsl(209, 23%, 22%);
  color: white; 
  margin-bottom: 5px solid hsl(209, 23%, 22%);
}
</style>