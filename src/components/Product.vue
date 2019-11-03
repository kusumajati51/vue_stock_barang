<template>
    <form>
        <div>
            {{info}}
            <div :class="['form-group', { 'has-error' : errors}]">
                <label class = "control-label"> Category </label>
                <select @change="chance()" v-model="selected">
                    <option value="">Pilih Category</option>
                    <option v-for="item in categories" :value="item">
                    {{ item.name }}
                    </option>
                </select>
            </div>
          {{selected}}
            <label for = "name"><b>Name:  </b></label>
            <label>
                <input type="text" placeholder="Enter Product Name" name = "name" v-model="name" />
            </label>

            <label for = "name"><b>Price:  </b></label>
            <label>
                <input type="text" placeholder="Enter Product Price" name = "name" v-model="price" />
            </label>

            <label for = "name"><b>Quantity:  </b></label>
            <label>
                <input type="text" placeholder="Enter Quantity Products" name = "name" v-model="quantity" />
            </label>

            <div>
                <label>File
                    <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()"/>
                </label>
            </div>

            <div>
                <v-btn type ="button" width="100%"  color="primary" @click="onCreateProduct()">Confirm</v-btn>
            </div>
        </div>
    </form>
</template>

<script>
    import {API_URL} from "../backend/axios/api";

    export default {
        data: () =>({
            index: 0,
            categories: [],
            items: [],
            errors: [],
            name: '',
            selected:'',
            price:'',
            quantity:'',
            param:{},
            file:'',
            info: null
        }),
        mounted(){
          this.axios.get('http://192.168.43.238:3000/api/v1/category/index/spinner',{
              headers:{
                  'Authorization': localStorage.token
              }
          })
              .then(response =>{
                  console.log(response.data.data);
                  this.info = response.data.data;
                  this.categories = response.data.data;
                  // this.categories.forEach(item =>{
                  //     console.log(item.name)
                  // })
              }).catch(errors =>{
                    console.error(errors.response.data.status);
                    this.errors = errors.response.data;
          })
        },
        methods:{
            chance(){
                console.log(this.selected.name)
            },
            onChangeFileUpload(){
                this.file = this.$refs.file.files[0];
            },
            onCreateProduct(){
                let formData = new FormData();
                formData.append('product_picture',this.file);
                formData.append('name',this.name);
                formData.append('price',this.price);
                formData.append('category_id',this.selected.id);
                formData.append('check_in', this.quantity);
               /*  today = new Date;
                var dd = today.getDay();
                var mm = today.getMonth();
                var yyyy = today.getFullYear();
                if (dd < 10){
                    dd = '0' + dd;
                }
                if (mm < 10) {
                    mm = '0' + mm;
                }
                var tgl = dd + '-' + '-'+ mm +'-'+yyyy;*/
                this.axios.post(API_URL+"/product/baru", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': localStorage.token
                    }
                }).then(response=>{
                    console.log(response)
                }).catch(errors =>{
                    console.error(errors)
                })
            }
        }
    }
</script>

<style scoped>

</style>
