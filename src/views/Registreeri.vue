<template>
  <div class="registreeri">
    <h1>Kasutajaks registreerimine</h1>
     <input v-model.number="username" placeholder="Kasutajanimi"/>
      <input v-model.number="password" placeholder="Parool"/>
      <button v-on:click="register(user)">Registreeri</button>
          <button v-on:click="login">Logi sisse</button>



  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: "Registreeri.vue", //kuhu see läheb?
      "text": "Kasutajanimi",
      "text1": "Parool",
      "text2": "Logi sisse"
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>