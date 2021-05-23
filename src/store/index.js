import { createStore } from 'vuex'

export default createStore({
  state: {
    
    country:[],
    showcountry:[],
    regionfilter:'',
    namefilter:'',
    initialname:[],
    detailcountriy:{},
    darkmode:false,
    setbordercountry:{}

    
  },
  mutations: {
     setcountries:(state,countries)=>(state.country=countries,state.showcountry=countries),
     setfiltername:(state,payload)=>(
       state.namefilter=payload,
     state.showcountry=state.country.filter(co=>co.name.toLowerCase()==state.namefilter)
     ),
    
     setlivesearch:(state,payload)=>(state.showcountry=state.country.filter(val=>val.name.toLowerCase().startsWith(payload))),
     settheme:(state,payload)=>(state.darkmode=!payload),

     setfilterregion:(state,payload)=>(
      
      state.showcountry=state.country.filter(co=>co.region==payload)
      ),
      selectcountry:(state,payload)=>(state.detailcountriy=state.showcountry.find(co=>co.name==payload))
     
  },
  actions: {
     async fetchcountries({commit}){
            
      const data= await fetch('https://restcountries.eu/rest/v2/all')
       const betterres=await data.json()
        console.log(betterres)
        commit('setcountries',betterres)
  },
  
  filtercountries(state,){}
  },
  getters: {
     allcountries:(state)=>state.country

  },
  modules: {
  }
})
