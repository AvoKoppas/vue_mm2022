<template>
  <div class="ankeet">
    <h1>Tere tulemast</h1>
    <h3>All asub küsimustik, mille palun ära täita.
      Kirjuta palun kastidesse mängude lõpptulemused</h3>
    Siia kirjuta oma kasutajanimi<input v-model.number="username" placeholder="Kasutajanimi"/>
    <table>
      <tr v-for="game in gameData" v-bind:key="game.gameNumber">Mäng nr {{ game.gameNumber }}
        <th>{{ game.text }}</th>
        <input v-model.number="game.home" :placeholder=game.text1>
        <input v-model.number="game.away" :placeholder=game.text2>
        <button v-on:click="insert(game)">Esita</button>
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
          'text': 'Inglismaa-Argentiina',
          'text1': 'Inglismaa',
          'text2': 'Argentiina'
        },
        {
          'gameNumber': 2,
          'text': 'Läti-Leedu',
          'text1': 'Läti',
          'text2': 'Leedu'
        },
        {
          'gameNumber': 3,
          'text': 'Rootsi-Taani',
          'text1': 'Rootsi',
          'text2': 'Taani'
        },
      ],
      // 'username': '',
      // 'userName2':'',
      // 'score': [
      //   {
      //
      //   }
      // ]
    }
  },
  methods: {
    'insert': function (game) {
      this.$http.post("http://localhost:8080/insert/" +
          this.username + '/' + game.gameNumber + '/' + game.home + '/' + game.away)
          .then(response => {
            console.log(response);
          })
    },
    // 'calculate':function (score){
    //   this.$http.post("http://localhost:8080/calculateScore/" + this.username2)
    // }
  }
}
</script>

<style scoped>

</style>