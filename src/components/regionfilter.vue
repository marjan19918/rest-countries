<template>
<div class="selectcon">
  <select name="serch reigen" :class="[dark ? 'darkmode' : '']" id="" v-model="selected" @input="$emit('input', $event.target.value)" >
      
        <!-- <option value=""  disabled selected class="j">Filter by Region</option> -->
        <option :value='option.value' v-for="option in options" :key='option.text' >{{option.text}}</option>
        <!-- <option :value='options.value'>{{options.text}}</option>
        <option :value='options.value'>{{options.text}}</option>
        <option :value='options.value'>{{options.text}}</option>
        <option :value='options.value'>{{options.text}}</option> -->
    </select>
    <div style="display:none">
        <div>1</div>
        <div>1</div>
        <div>1</div>
    </div>
    
    </div>
</template>

<script>
export default {
    name:'FilterRegion',
    data() {
        return {
              selected: '',
      options: [
          { text: 'Filter by Region', value: '' },
        { text: 'Africa', value: 'Africa' },
        { text: 'America', value: 'Americas' },
        { text: 'Asia', value: 'Asia' },
        { text: 'Europe', value: 'Europe' },
        { text: 'Oceania', value: 'Oceania' },
      ]
        }
    },
    props:{
        dark:Boolean
    }

}
</script>

<style>
.darkmode{
  background-color:hsl(209, 23%, 22%) ;
}
.selectcon{
   width: 50%;
    padding: 50px  ;
display: flex;
flex-direction: row;
justify-content: flex-end;
/* background-color:hsl(0, 0%, 98%) ;  */
}
select{
            padding: 10px;
            width: 200px;
            
        }
        option{padding: 10px;margin: 10px;}
        option[value='']{
            display: none;
        }
        option:focus{
            padding: 10px;
            outline: none;
        }
        @media screen and  (max-width: 800px){
            .selectcon{
              
            padding: 5px;}
            
        }
</style>