<template>
  <form @submit="formSubmit">
    <div class="container">
      <h1>Register</h1>
      <p class= 'header'>Please fill in form to create an acount</p>
      <hr>

      <v-card  max-width="100%" class="mx-auto">

        <label for = "email"><b>Email</b></label>
        <input type = "text" placeholder="Enter Email" name = "email" v-model=" email" required/>

        <label for = "name"><b>Name</b></label>
        <input type = "text" placeholder="Enter Your Name" name = "name" v-model="name" required/>

        <label for = "phone"><b>Phone Number</b></label>
        <input type = "text" placeholder="Enter Your Phone Number" name = "phone" v-model="no_hp" required/>

        <label for = "psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name = "psw"  v-model="password" required/>

        <label for ="psw-repeat"><b>Repeat Password </b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" v-model="password_confirmation" required>

      </v-card>

      <hr>

      <router-link to ="/login">Login</router-link>
      <button type ="submit" class = "registerbtn">Register</button>


    </div>

    <div class="container signin">
        <p>Already have an account? <a href="/login">Sign in</a>.</p>
    </div>
    <strong>Output:</strong>
     <pre>{{output}}</pre>
  </form>
</template>

<script>
export default {
  mounted(){
    console.log('Component mounted. ')
  },
  data(){
    return{
      email: '',
      name: '',
      no_hp: '',
      password:'',
      password_confirmation:'',
      output:'',
    }
  },methods: {
    formSubmit(e){
      e.preventDefault();
      let currentObject = this;
      this.axios.post('http://192.168.43.238:3000/api/v1/register',{
        email: this.email,
        name: this.name,
        no_hp: this.no_hp,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
      .then(response => {
        currentObject.output = response.data
      })
      .catch(error =>{
        currentObject.output = error.data
      })
    }
  }
}
</script>

<style scoped lang="css">
*{ box-sizing: border-box }

.container{
  padding: 16px
}

.mx-auto{
  width: 100%;
}

.header{
  width: 100%;
  font-family: 'Roboto';
  font-style: italic;
}

input[type = text], input[ type =  password]{
  width: 100%;
  padding: 10px;
  margin: 5px 0 12px 0px;
  font-family: 'Roboto';
  font-style: italic;
  font-size: 22px;
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

input[type = text]:focus , input[type = password]:focus{
  background-color: #ddd;
  outline: none;
}

hr{
  border: 1px solid #f1f1f1;
  margin-bottom: 20px
}
.registerbtn{
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover{
  opacity: 1;
}

a{
  color: dodgerblue;
}

.signin{
  background-color: #f1f1f1;
  text-align: center;
}
</style>
