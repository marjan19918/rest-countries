 <template>
 
<div class="lki" >
    <div  class="lki" v-for="country in countries" :key="country.numericCode"  >
        
<Country :country='country' @coutryclicked="$emit('clickedcountry',country.numericCode,country.name)"  @choosename="$emit('choosename',country.name)" :dark='dark' />

    </div>


</div>


  
</template>

<script>
import Country from './country'
export default {
components:{
    Country
},
props:{
countries:Array,
dark:false
}
}
</script>

<style>
.darkmode{
  background-color:hsl(209, 23%, 22%);
  color: white; 
  margin-bottom: 5px solid hsl(209, 23%, 22%);
}
.lki{
   display: flex;
   flex-direction: row;
   flex-wrap: wrap; 
    justify-content: space-around;
 
}
</style>