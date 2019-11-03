<template>
    <form >
        <div>
            <h1>WellCome to Category</h1>

            <label for = "name"><b>Name: </b></label>
            <input type = "text" placeholder="Enter Your Name"  name = "name" v-model="name" required/>
            <label>File
                <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()"/>
            </label>
<!--            <v-file-input id ="file" ref="file" label="File input"  v-model="file" v-on:change="onChangeFileUpload()"></v-file-input>-->

            <v-btn type ="button" width="100%"  color="primary" @click="submitForm">Confirm</v-btn>
        </div>
    </form>
</template>

<script>
    import {API_URL} from "../backend/axios/api";

    export default {
        data:()=> ({

                file: '',
                name:''

        }),
        methods: {
            submitForm(){
                let formData = new FormData();
                formData.append('attachment',this.file);
                // formData.append('name', this.name);this

                this.axios.post(API_URL+'/category/baru',formData,{
                    name: this.name
                    },
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': localStorage.token
                        }
                    }
                ).then(response=>{
                    console.log(response.data)
                }).catch(error=> {
                    console.error(error)
                })
            },
            onChangeFileUpload(){
                this.file = this.$refs.file.files[0];
            }


        }
    }
</script>

<style scoped>

</style>
