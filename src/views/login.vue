<template>
  <div id="login">
    <h1>Login</h1>
<!--    <input type="text" name="username" v-model="input.username" placeholder="Username" />-->
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
        password: ""
      }
    }
  },
  methods: {
    login() {
      if(this.input.password !== "") {
        if(this.input.password === this.$parent.mockAccount.password) {
          this.$emit("authenticated", true);
          alert("Edu ennustamisel")
          this.$router.replace({ name: "Ankeet" });
        } else {
          alert("The password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    }
  }
}
</script>

<style scoped>
#Login {
  width: 500px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>