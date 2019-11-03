<template>
    <form>
        <div>
            <label class = "control-label"> Item  </label>
            <select @change="chance()" v-model="selected">
                <option value ="">Pilih Items</option>
                <option v-for="item in items" :value="item">
                    {{item.name_items}}
                </option>
            </select>
        </div>
        <div>
            <label for ="name"><b>Sold: </b></label>

        </div>
    </form>
</template>
<script>
import { API_URL } from '../backend/axios/api'
export default {
    data: ()=>({
        items: "",
        selected:""
    }),
    mounted(){
        this.axios(API_URL+"/item/index",{
            headers:{
                'Authorization': localStorage.token
            }
        })
        .then(response => {
            console.log(response.data);
            this.items = response.data;
        }).catch(error => {
            console.error(error);
            this.items = error;
        });
    },
    methods:{
        chance(){
            console.log(this.selected)
        }
    }
}
</script>

<style>
    .control-label{
        width: 100%;
    }
</style>
