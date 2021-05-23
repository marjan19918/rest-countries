<template>
  <div :class="[darkmode ? 'dark':'mainhome']">
    <Header  @setdark="darkmode= !darkmode" :dark='darkmode'/>
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
      
    ]),

  
   

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
      
      this.$router.push({name:'detailcountry',params:{name:this.countryname}});
    },
   
  },
  computed: {
    
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
  
  
  mounted() {
    this.fetchcountries();
    
   this.darkmode=JSON.parse(localStorage.getItem('darkmode') )
  
   
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