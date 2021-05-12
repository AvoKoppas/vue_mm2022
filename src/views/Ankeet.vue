<template>
  <div style="background: lightblue; border:gold" class="ankeet">
    <h1>Tere tulemast</h1>
    <body style="background-color: seashell">
    <h3>All asub küsimustik, mille palun ära täita.
      Kirjuta palun kastidesse mängude lõpptulemused</h3>
    Siia kirjuta oma kasutajanimi<input v-model.number="username" placeholder="Kasutajanimi"/>
    <h3>Ennustus Tegelik tulemus</h3>
    <table>
      <tr v-for="game in gameData" v-bind:key="game.gameNumber">Mäng nr {{ game.gameNumber }}
        <th>{{ game.text }}</th>
        <input v-model.number="game.home" :placeholder=game.text1>
        <input v-model.number="game.away" :placeholder=game.text2>
        <button id="button" v-on:click="insert(game)">Esita</button>
      </tr>
    </table>
    </body>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'username': '',
      'gameData': [
        {
          'gameNumber': 1,
          'text': 'Türgi-Itaalia',
          'text1': 'Türgi',
          'text2': 'Itaalia'
        },
        {
          'gameNumber': 2,
          'text': 'Wales-Šveits',
          'text1': 'Wales',
          'text2': 'Šveits'
        },
        {
          'gameNumber': 3,
          'text': 'Taani-Soome',
          'text1': 'Taani',
          'text2': 'Soome'
        },
        {
          'gameNumber': 4,
          'text': 'Belgia-Venemaa',
          'text1': 'Belgia',
          'text2': 'Venemaa'
        }, {
          'gameNumber': 5,
          'text': 'Inglismaa-Horvaatia',
          'text1': 'Inglismaa',
          'text2': 'Horvaatia'
        }, {
          'gameNumber': 6,
          'text': 'Austria-Põhja-Makedoonia',
          'text1': 'Austria',
          'text2': 'Põhja-Makedoonia'
        }, {
          'gameNumber': 7,
          'text': 'Holland-Ukraina',
          'text1': 'Holland',
          'text2': 'Ukraina'
        }, {
          'gameNumber': 8,
          'text': 'Šotimaa-Tšehhi Vabariik',
          'text1': 'Šotimaa',
          'text2': 'Tšehhi Vabariik'
        }, {
          'gameNumber': 9,
          'text': 'Poola-Slovakkia',
          'text1': 'Poola',
          'text2': 'Slovakkia'
        }, {
          'gameNumber': 10,
          'text': 'Inglismaa-Rootsi',
          'text1': 'Inglismaa',
          'text2': 'Rootsi'
        }, {
          'gameNumber': 11,
          'text': 'Ungari-Portugal',
          'text1': 'Ungari',
          'text2': 'Portugal'
        }, {
          'gameNumber': 12,
          'text': 'Prantsusmaa-Saksamaa',
          'text1': 'Prantsusmaa',
          'text2': 'Saksamaa'
        }, {
          'gameNumber': 13,
          'text': 'Soome-Venemaa',
          'text1': 'Soome',
          'text2': 'Venemaa'
        }, {
          'gameNumber': 14,
          'text': 'Türgi-Wales',
          'text1': 'Türgi',
          'text2': 'Wales'
        }, {
          'gameNumber': 15,
          'text': 'Itaalia-Šveits',
          'text1': 'Itaalia',
          'text2': 'Šveits'
        }, {
          'gameNumber': 16,
          'text': 'Ukraina-Põhja-Makedoonia',
          'text1': 'Ukraina',
          'text2': 'Põhja-Makedoonia'
        }, {
          'gameNumber': 17,
          'text': 'Taani-Belgia',
          'text1': 'Taani',
          'text2': 'Belgia'
        }, {
          'gameNumber': 18,
          'text': 'Holland-Austria',
          'text1': 'Holland',
          'text2': 'Austria'
        }, {
          'gameNumber': 19,
          'text': 'Rootsi-Slovakkia',
          'text1': 'Rootsi',
          'text2': 'Slovakkia'
        }, {
          'gameNumber': 20,
          'text': 'Horvaatia-Tšehhi Vabariik',
          'text1': 'Horvaatia',
          'text2': 'Tšehhi Vabariik'
        }, {
          'gameNumber': 21,
          'text': 'Inglismaa-Šotimaa',
          'text1': 'Inglismaa',
          'text2': 'Šotimaa'
        }, {
          'gameNumber': 22,
          'text': 'Ungari-Prantsusmaa',
          'text1': 'Ungari',
          'text2': 'Prantsusmaa'
        }, {
          'gameNumber': 23,
          'text': 'Portugal-Saksamaa',
          'text1': 'Portugal',
          'text2': 'Saksamaa'
        }, {
          'gameNumber': 24,
          'text': 'Hispaania-Poola',
          'text1': 'Hispaania',
          'text2': 'Poola'
        }, {
          'gameNumber': 25,
          'text': 'Itaalia-Wales',
          'text1': 'Itaalia',
          'text2': 'Wales'
        }, {
          'gameNumber': 26,
          'text': 'Šveits-Türgi',
          'text1': 'Šveits',
          'text2': 'Türgi'
        }, {
          'gameNumber': 27,
          'text': 'Põhja-Makedoonia-Holland',
          'text1': 'Põhja-Makedoonia',
          'text2': 'Holland'
        }, {
          'gameNumber': 28,
          'text': 'Ukraina-Austria',
          'text1': 'Uktaina',
          'text2': 'Austria'
        }, {
          'gameNumber': 29,
          'text': 'Soome-Belgia',
          'text1': 'Soome',
          'text2': 'Belgia'
        }, {
          'gameNumber': 30,
          'text': 'Venemaa-Taani',
          'text1': 'Venemaa',
          'text2': 'Taani'
        }, {
          'gameNumber': 31,
          'text': 'Horvaatia-Šotimaa',
          'text1': 'Horvaatia',
          'text2': 'Šotimaa'
        }, {
          'gameNumber': 32,
          'text': 'Tšehhi Vabariik-Inglismaa',
          'text1': 'Tšehhi Vabariik',
          'text2': 'Inglismaa'
        }, {
          'gameNumber': 33,
          'text': 'Slovakkia-Hispaania',
          'text1': 'Slovakkia',
          'text2': 'Hispaania'
        }, {
          'gameNumber': 34,
          'text': 'Rootsi-Poola',
          'text1': 'Rootsi',
          'text2': 'Poola'
        }, {
          'gameNumber': 35,
          'text': 'Saksamaa-Ungari',
          'text1': 'Saksamaa',
          'text2': 'Ungari'
        }, {
          'gameNumber': 36,
          'text': 'Portugal-Prantsusmaa',
          'text1': 'Portugal',
          'text2': 'Prantsusmaa'
        },
      ],
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
  }
}
</script>

<style scoped>

</style>