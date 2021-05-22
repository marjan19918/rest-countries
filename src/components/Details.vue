<template>
<div>
<h1>hi</h1>
<form @submit="onsubmit">
  <input type="text" v-model="region"><button type="submit">submit</button>
  <p>{{showfilter}}ki</p>
</form>
<form action="" @submit="clicked">
  <input type="text" v-model="name"><button type="submit">name</button>
</form>
<div v-for="country in count" :key="country.id">
  <router-link to="/detailcountry" >
<p @click='selectcountry'>{{country.name}}</p>
  </router-link>

</div>

<!-- <img :src="flag" alt=""> -->
  <!-- <p>{{country.name}}</p> -->
</div>
  
</template>

<script>
 import {mapGetters,mapActions, mapMutations} from 'vuex'
export default {
name:'Details',
data() {
  return {
    region:'',
    name:''
  }
},
// data() {
//   return {
//     country:this.$route.params
//   }
// },
// props:['countrydetal'],
methods: {
  ...mapActions(['fetchcountries']),
  ...mapMutations(['setfilterregion','setfiltername','setshowcountry','selectcountry']),
  onsubmit(e){e.preventDefault();
 this.$store.commit('setfilterregion',this.region)

 },
 clicked(e){e.preventDefault(),
 this.$store.commit('setfiltername',this.name)
 },
 selectcountry(e){console.log(e.srcElement.outerText),
 this.$store.commit('selectcountry',e.srcElement.outerText)
 console.log(this.$store.state.detailcountriy)
 }
},
computed:{
// countries:mapGetters(['allcountries'])
count(){
  return this.$store.state.showcountry
},
showfilter(){
  return this.$store.state.regionfilter
},

// showcountry(){
// return this.$store.state.showcountry
// }
},

mounted() {
  this.fetchcountries()
 this.$store.commit('setshowcountry')
},

}

</script>

<style>

</style>