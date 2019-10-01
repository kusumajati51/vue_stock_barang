<template>
    <form action="formLogin">
      <div class = "container">
          <h1>Login</h1>
          <p class = 'header'> Please fill email and password for login </p>
          <v-card max-width="100%" class = "mx-auto">
              <label for = "email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name = "email" v-model="email" required/>
              <label for = "password"><b>Password</b></label>
              <input type="password" placeholder="Enter Email" name = "password" v-model="password" required/>
          </v-card>
          <v-btn type ="submit" width="100%"  color="primary" class = "loginButton">Register</v-btn>
      </div>
    </form>
</template>

<script>
    export default {
        name: "Login"
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


    .loginButton{
        margin: 8px 0;
    }

</style>