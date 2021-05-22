<template>
  <div class="filtercont">
        <form action="" @submit="pushname" >
            <button type="submit" prevent :class="[dark ? 'darkmode' : '']">&#x1F50E;&#xFE0E;</button>
            <input @input="changehandler" type="text" placeholder="Search for a country" v-model="name" :class="[dark ? 'darkmode' : '']">
        </form>

    <!-- <p>{{region}}</p> -->
  </div>
</template>

<script>
import _ from 'lodash'
export default {
data() {
    return {
        name:'',
        
      
    } 
},
props:{
  dark:false
},

 methods: {
      pushname(e){
          e.preventDefault()
          console.log('hiu')
          this.$emit('findcountry',this.name)
          
      },
      changehandler(value){
        // this.name=value
        this.searchcountry(this.name)
      },
    //   findregion(region){
    //       console.log(this.region)
    //       this.$emit('findregion',this.region.selected.region)
    //   }
    searchcountry:_.throttle(function(value){this.$emit('findcountrylive',value),300;})
    },
}
</script>

<style scoped>
.darkmode{
  background-color:hsl(209, 23%, 22%) ;
}
.filtercont{
  width: 50%;
    padding: 50px  ;
display: flex;
flex-direction: row;
justify-content: flex-start;
/* background-color:hsl(0, 0%, 98%) ; */

}
  form{
   flex-direction: row;
    display: flex;
    max-width: 400px;
    height: 50px;
        }
        input{
            outline: none;
          background-color: white; 
    padding: 10px;
    /* width: 100%; */
    width: 400px;
    height: 30px;
    
    border: none;
        }
        button{
      background-color: white;
    padding: 0px;
    width: 50px;
    height: 50px;
    border: none;
        }
        @media screen and (max-width: 820px){
         
         .filtercont{
           padding: 5px;
         }
        }
        @media screen and (max-width:420px){
          input{
            width: 100%;
          }
          form{
            width:95%;
          }
          .filtercont{
            width: 92%;
    padding: 1px;
          }
        }
</style>