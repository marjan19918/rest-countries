import { createStore } from 'vuex'

export default createStore({
  state: {
    countries:[{name:'l',lastname:'b'},{name:'a',lastname:'b'},{name:'addEventListener',lastname:'b'}],
    country:[],
    showcountry:[],
    regionfilter:'',
    namefilter:'',
    initialname:[],
    detailcountriy:{},
    darkmode:false,
    setbordercountry:{}

    // abbr:[]
  },
  mutations: {
     setcountries:(state,countries)=>(state.country=countries,state.showcountry=countries),
     setfiltername:(state,payload)=>(
       state.namefilter=payload,
     state.showcountry=state.country.filter(co=>co.name.toLowerCase()==state.namefilter)
     ),
    //  setbordercountry()=>(),
    //  setabbr:(state,payload)=>(state.abbr=payload),
    //  setinitialname:(state,payload)=>(),
     setlivesearch:(state,payload)=>(state.showcountry=state.country.filter(val=>val.name.toLowerCase().includes(payload))),
     settheme:(state,payload)=>(state.darkmode=!payload),

     setfilterregion:(state,payload)=>(
      //  state.regionfilter=payload,
      state.showcountry=state.country.filter(co=>co.region==payload)
      ),
      selectcountry:(state,payload)=>(state.detailcountriy=state.showcountry.find(co=>co.name==payload))
      //  setshowcountry:(state)=>(state.showcountry=state.country)
  },
  actions: {
     async fetchcountries({commit}){
            
      const data= await fetch('https://restcountries.eu/rest/v2/all')
       const betterres=await data.json()
        console.log(betterres)
        commit('setcountries',betterres)
  },
  // setregion({commit}){commit('setfilterregion'),}
  filtercountries(state,){}
  },
  getters: {
     allcountries:(state)=>state.country

  },
  modules: {
  }
})
