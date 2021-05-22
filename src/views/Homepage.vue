<template>
  <div :class="[darkmode ? 'dark':'mainhome']">
    <Header  @setdark="darkmode= !darkmode"/>
    <div class="filtercont">
      <Filters @findcountry="findcountry" @findcountrylive='livesearch' :dark='darkmode'/>
      <FilterRegion @input="inputregion" :dark='darkmode' />
    </div>

    <div class="countrycontainer">
      <Countries :countries="count" @choosename="chooseName" @clickedcountry="handledetail" :dark='darkmode' />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Filters from "../components/Filters";
import FilterRegion from "../components/regionfilter";
import Countries from "../components/countries";

import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Header,
    Filters,
    FilterRegion,
    Countries,
  },
  data() {
    return {
      countries: [],
      error: null,
      load: () => {},
      region: "",
      name: "",
      countrydetail: {},
      id: "",
      darkmode: false  ,
      livename:'',
      countryname:"",
      abbr:[]
    };
  },

  methods: {

    ...mapActions(["fetchcountries"]),
    ...mapMutations([
      "setfilterregion",
      "setfiltername",
      "setshowcountry",
      "selectcountry",
      "settheme",
      "setlivesearch",
      // "setabbr"
    ]),
//  convertabbr(value){
//    this.countryname=value
//   if(this.countryname.includes(' ')){if (this.countryname.includes('and')) {
//   this.countryname=this.countryname.replace('and',"I") }
//   this.abbr.push((''.concat(this.countryname.match(/[A-Z]/g))).replace(/[,]/g,''))
//   }else{
//     // b=this.countryname.replace(/[aeiou]/g, ''),
//     this.abbr.push(this.countryname.replace(/[aeiou]/g, '').slice(0,3)),this.abbr.push(this.countryname.slice(0,3))

//   }
//   console.log(this.abbr);
//   return this.abbr
//  },
    // inputregion(regioon){
    //   this.region=regioon
    //   console.log(this.countries)
    //  },
    // findcountry(namee){

    //   this.name=namee
    //   this.region=''
    // console.log(this.name)
    // },
    //  setDark(){this.$store.commit("settheme",this.darkmode),console.log('huij');},
  
   

    findcountry(namee) {
      this.name = namee;
      this.$store.commit("setfiltername", this.name);
    },
    livesearch(value){
      this.livename=value;
      this.$store.commit("setlivesearch",this.livename)
    },
    inputregion(regioon) {
      this.region = regioon;
      console.log(this.region);
      this.$store.commit("setfilterregion", this.region.target.value);
    },
    handledetail(id,name) {
      this.countryname=name
      console.log(id);
      this.id = id;
      this.$store.commit("selectcountry", this.countryname);
      console.log(this.$store.state.detailcountriy);
      // this.convertabbr(name)
      // this.$store.commit('setabbr',this.abbr)
      this.$router.push({name:'detailcountry',params:{name:this.countryname}});
    },
    //   handledetail(id){
    //     console.log(id)
    // this.countrydetail=this.countries.find(country=>country.numericCode==id)
    // console.log(this.countrydetail)
    //     this.$router.push({name:'Details',params:{country:countrydetail}})
    //     console.log(this.countrydetail)
    //   }
  },
  computed: {
    //   filtercountries(){
    //  if(this.region !== ''){ return this.countries.filter(gh=>gh.region==this.region.target.value)}
    //  else if(this.name !== '' ){this.region=''; return this.countries.filter(gh=>gh.name.toLowerCase()==this.name.toLowerCase(),console.log(this.name))}
    //  else{return this.countries}
    //   },
    count() {
      return this.$store.state.showcountry;
    },
    showfilter() {
      return this.$store.state.regionfilter;
    },

  },
  watch:{
    darkmode:function(){
      localStorage.setItem('darkmode',JSON.stringify(this.darkmode))
    }
  },
  
  // mounted(){

  //  fetch('https://restcountries.eu/rest/v2/all')
  //  .then((res)=>res.json())
  //  .then((data)=>this.countries=data)
  //  .catch((err)=>this.error=err)

  // },
  mounted() {
    this.fetchcountries();
    
   this.darkmode=JSON.parse(localStorage.getItem('darkmode') )
  
    //  this.$store.commit('setshowcountry')
  },
};
</script>

<style>
.mainhome {
  margin: 0px;
  padding: 0px;
  background:hsl(0, 0%, 98%) 
}
.dark{
  margin: 0px;
  padding: 0px;
  background-color: hsl(207, 26%, 17%);
  /* color: white; */
   /* background:hsl(0, 0%, 98%)  */
}
.filtercont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.countrycontainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
@media screen and (max-width: 420px){
  .filtercont{
    flex-direction: column;
    width: 100%;
  }
}
</style>