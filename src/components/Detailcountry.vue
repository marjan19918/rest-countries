<template>
  <div :class="[darkmode ? 'dark':'maindetail',]">
    <Header @setdark="darkmode= !darkmode" />
    <div class="button"><button :class="[darkmode ? 'darkel':'']" @click="$router.go(-1)">&#8592;  back</button></div>
    <div class="subdetail">
        <div class="flag"><img :src="detail.flag" alt=""></div>
        <div class="detail">
            <h3 @click="show">{{detail.name}}</h3>
            <div class="detalinfo">
            
            <div class="leftdetail">
            <p>NativeName:<span>{{detail.nativeName}}</span></p>
            <p>Population:<span>{{detail.population}}</span></p>
            <p>Region:<span>{{detail.region}}</span></p>
            <p>Sub Region:<span>{{detail.subregion}}</span></p>
            <p>Capital:<span>{{detail.capital}}</span></p>
            </div>
            <div class="rightdetail">

                <p>Top Level Domain:
                
                  <span v-for="topd in topleveldom " :key="topd" >{{topd}}</span>
                
                    </p>
                <p>Curencies:<span v-for="curr in itemcur " :key="curr">{{curr.name}}</span></p>
               
                    
                <p>Languages:<span v-for="language in itemlang" :key="language " class="vforcont">{{language.name}}</span></p>
                
                    
            </div>
            </div>
            <div class="butdetail" >
                <span >
                Border countries:</span ><span v-for="itemm in (detail.borders)" :class="[darkmode ? 'darkel':'butdetailspan']" :key="itemm" @click="fetchbordercountry" >{{itemm}}</span> 
                
                    
               
                
                
                
                </div>
        </div>
    </div>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Header from './Header' 
export default {
    data() {
        return {
            item:'',
             darkmode:'',
             countryname:''
        }
    },
    components:{Header},
computed:{
    detail(){
        
        return this.$store.state.detailcountriy;
    },
    itemlang (){
return this.$store.state.detailcountriy.languages
    },
    itemcur(){
        return this.$store.state.detailcountriy.currencies
        },
        topleveldom(){
            return this.$store.state.detailcountriy.topLevelDomain
        },
      
},
methods:{
    ...mapMutations(["selectcountry"]),
    show(){console.log(localStorage.darkmode);},
   async fetchbordercountry(value){
       console.log(value.target.innerHTML);
    
     const data= await fetch('https://restcountries.eu/rest/v2/alpha/'+value.target.innerHTML)
       const res= await data.json()
        console.log(res.name);
        this.countryname=res.name
        this.$store.commit("selectcountry", this.countryname);
    }

},
watch:{ darkmode:function(){
      localStorage.setItem('darkmode',JSON.stringify(this.darkmode))
    }},
mounted(){

    this.darkmode=JSON.parse(localStorage.getItem('darkmode') )
}
}

</script>

<style scoped >

  .maindetail{
      
display: flex;
flex-direction: column;

 }  

.dark{background-color: hsl(207, 26%, 17%);
color: white;}
.button{
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: flex-start;
    border-top:3px solid hsla(0, 0%, 98%, 0.877) ;

}
.button button{
margin-left: 100px;
padding: 10px 15px;
 border: 1px solid hsla(0, 0%, 98%, 0.877);
   box-shadow: 2px 2px 2px hsl(0, 0%, 98%);
   background-color: white;
   border-radius: 5px;
}

.subdetail{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 130px;

}
.flag{
    width: 38%;
    display: flex;
    padding-left: 100px;

}
.flag img{
    width: 100%;
}
.detail{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 38%;
    padding: 50px;

}
h3{text-align: start;}
.detalinfo{
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
}
.leftdetail{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 25px;
   
}
.rightdetail{
      display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 25px;
  
}
.butdetail{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

}
.butdetailspan{

   padding: 5px 10px;
  
   box-shadow: 2px 2px 2px hsl(0, 0%, 98%);
   border-radius: 5px;
   
}
span{
    margin:1px 5px;
    font-size: 16px ;
    font-weight: 600;
}
p{
    font-size: 16px;
    font-weight: 800;
}
button.darkel{
    background-color: hsl(209, 23%, 22%);
    border:none;
    box-shadow: 1px 1px hsl(209, 23%, 22%);
    /* border: 1px solid black ; */
    border: 1px solid hsl(209, 23%, 22%) ;
    /* box-shadow: 2px 2px black; */
    color: white;
}
.darkel{
    background-color: hsl(209, 23%, 22%);
    
    border:none;
    border-radius: 5px;
    box-shadow: 2px 2px hsl(209, 23%, 22%);
    color: white;
    padding: 5px 10px;
}
.vforcont{
    display: inline;
}
@media screen and (max-width: 1065px){
   .detalinfo{flex-direction: column;} 
}
@media screen and (max-width:890px) {
    .subdetail{
        flex-direction: column;
    }
    .flag{
        width: 95%;
        padding-left: 5px;
    }
    .detalinfo{
        width: 100%;
    }
}
@media screen and (max-width:420px){
   
    .maindetail{
         background-color:hsl(0, 0%, 98%) ; 
    }
    .butdetailspan{
        background-color: white;
        box-shadow: 2px 2px 2px gainsboro; 
    }
   .flag{
       padding-left: 10px; 
        margin-right: 10px;
   }
   .detalinfo p{
       line-height: 27px;
       padding: 10px;
   }
  
   .detail{
       padding: 0px;
       width: 100%;
   }
   .leftdetail{
       width: 100%;
   }
   .rightdetail{
    margin-top: 20px; 
    width: 100%;  
   } 
   
  
} 
</style>