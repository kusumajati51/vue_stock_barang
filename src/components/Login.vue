<template>
    <form @submit="formLogin">
      <div class = "container">
          <h1>Login</h1>
          <p class = 'header'> Please fill email and password for login </p>
          <v-card max-width="100%" class = "mx-auto">
              <label for = "email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name = "email" v-model="email" required/>
              <label for = "password"><b>Password</b></label>
              <input type="password" placeholder="Enter Email" name = "password" v-model="password" required/>
          </v-card>
          <router-link to ="/">Register</router-link>

          <v-btn type ="submit" width="100%"  color="primary" class = "loginButton">Login</v-btn>
          <v-snackbar v-model="snackbar"  :multi-line="multiLine"  :color="color" top = "top" :timeout = "timeout" >
            {{message}}
            <v-btn color="white" text @click="snackbar = false">
                Close
            </v-btn>
          </v-snackbar>
      </div>
    </form>
</template>

<script>
    import {API_URL} from "../backend/axios/api";

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data(){
            return{
                email:'',
                password:'',
                snackbar:false,
                message:'',
                multiLine: true,
                color: '',
                timeout: 3000
            }
        },
        created(){
           this.checkSignedIn();
        },
        updated(){
            this.checkSignedIn();
        },
        methods:{
            formLogin(e){
                e.preventDefault();
                let currentObject = this;
                this.axios.post(API_URL+'/login',{
                    email: this.email,
                    password: this.password
                }).then(response =>{
                   console.log(response.data);
                   this.signinSuccessful(response)
                }).catch(errors=>{
                    console.error(errors.response.data);
                    this.siginFailed(errors.response.data);
                })
            },signinSuccessful(response){
                if(response.data.status !== 1){
                    this.snackbar = true;
                    this.message = response.data.message;
                    this.color = 'error';
                    delete localStorage.token;
                    delete localStorage.signedIn;
                    return
                }
                this.snackbar = true;
                this.message = response.data.data.token;
                this.color = '#1c6b51';
                localStorage.token = response.data.data.token;
                localStorage.signedIn = true;
                this.$route.replace('/sample')
            },
            siginFailed(error){
                this.snackbar = true;
                this.message = error.message;
                this.color = 'error';
                delete localStorage.token;
                delete localStorage.signedIn;
            },
            checkSignedIn(){
                if(localStorage.signedIn){
                    this.$router.replace('sample');
                }
            }
        }
    }
</script>

<style scoped>
    input[type = text], input[type = password]{
        width: 100%;
        padding: 10px;
        margin: 5px 0 12px 0;
        font-family: 'Roboto',serif;
        font-style: italic;
        font-size: 22px;

    }

    input[type = text]:focus, input[type = password]:focus{
        background-color: #ddd;
        outline: none;
    }

    label{
        width: 100%;
        padding: 10px;
        margin: 5px 0 12px 0px;
        font-family: 'Roboto';
        font-style: italic;
    }

    h1{
        width: 100%;
        font-family: 'Roboto';
        font-style: italic;
    }

    .loginButton{
        margin: 8px 0;
    }

</style>
