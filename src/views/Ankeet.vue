<template>
  <div class="ankeet">
    <h1>Tere tulemast</h1>
    <h2>All asub küsimustik, mille palun ära täita.
      Kirjuta palun kastidesse mängude lõpptulemused</h2>
    Siia kirjuta oma kasutajanimi:
    <input v-model.lazy="username" placeholder="Kasutajanimi"/>
    <table>
      <tr v-for="game in gameData" v-bind:key="game.gameNumber">Mäng nr {{ game.gameNumber }}
        <th>{{ game.text }}</th>
        <input v-model.number="game.home" placeholder="Inglismaa"/>
        <input v-model.number="game.away" placeholder="Argentiina">
        <button v-on:click="insert()">Esita</button>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'gameData': [
        {
          'gameNumber': 1,
          'text': 'Inglismaa-Argentiina'
        },
        {
          'gameNumber': 2,
          'text': 'Belgia-Läti'
        },
        {
          'gameNumber': 3,
          'text': 'Eesti-Iiri'
        },
        {
          'gameNumber': 4,
          'text': 'Taani-Rootsi'
        },
        {
          'gameNumber': 5,
          'text': 'Taani-Eesti'
        },
      ]
    }
  },
  methods: {
    'insert': function () {
      this.$http.post("http://localhost:8080/insert/" +
          this.username + '/' + this.gameNumber + '/' + this.game.home + '/' + this.game.away)
          .then(response => {
            console.log(response);
          })
    }
  }
}
</script>

<style scoped>

</style>