<template>
  <div class="ankeet">
    <h1>Mängud</h1>
    <body>
    <h3 align="left">Siin on toodud ära kõik alagrupimängud
      <br>
      Ennustamise reeglid on lihtsad: <br>
      1) Vali endale kasutajanimi (mida kasutad kogu turniiri)<br>
      2) Sisesta mängu lahtritesse skoor <br>
      3) Ühele mängule saad teha vaid ühe ennustuse! <br>
      4) Ennustada saad kuni mängu avavileni! <br>
    </h3>
    Siia kirjuta oma kasutajanimi<input v-model.number="username" placeholder="Kasutajanimi"/>
    <table>
      <tr v-for="game in gameData" v-bind:key="game.gameNumber">Mäng nr {{ game.gameNumber }}
        <th>{{ game.text }}</th>
        <input :disabled="game.hidden" v-model.number="game.home" :placeholder=game.text1>
        <input :disabled="game.hidden" v-model.number="game.away" :placeholder=game.text2>
        <button class="btn btn__primary btn__lg" :disabled="Date.now()>=game.kickOff" v-if="!game.hidden" v-on:click="insert(game)">Esita
        </button>
        <th>{{ game.kickOff.toLocaleString() }}</th>
      </tr>
    </table>
    </body>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'home': '',
      'away': '',
      'username': '',
      'gameData': [
        {
          'gameNumber': 1,
          'text': 'Türgi-Itaalia',
          'text1': 'Türgi',
          'text2': 'Itaalia',
          'hidden': false,
          'kickOff': new Date('2021-06-11 22:00:00')
        },
        {
          'gameNumber': 2,
          'text': 'Wales-Šveits',
          'text1': 'Wales',
          'text2': 'Šveits',
          'hidden': false,
          'kickOff': new Date('2021-06-12T16:00:00')

        },
        {
          'gameNumber': 3,
          'text': 'Taani-Soome',
          'text1': 'Taani',
          'text2': 'Soome',
          'hidden': false,
          'kickOff': new Date('2021-06-12T19:00:00')
        },
        {
          'gameNumber': 4,
          'text': 'Belgia-Venemaa',
          'text1': 'Belgia',
          'text2': 'Venemaa',
          'hidden': false,
          'kickOff': new Date('2021-06-12T22:00:00')
        },
        {
          'gameNumber': 5,
          'text': 'Inglismaa-Horvaatia',
          'text1': 'Inglismaa',
          'text2': 'Horvaatia',
          'hidden': false,
          'kickOff': new Date('2021-06-13T16:00:00')
        },
        {
          'gameNumber': 6,
          'text': 'Austria-Põhja-Makedoonia',
          'text1': 'Austria',
          'text2': 'Põhja-Makedoonia',
          'hidden': false,
          'kickOff': new Date('2021-06-13T19:00:00')
        }, {
          'gameNumber': 7,
          'text': 'Holland-Ukraina',
          'text1': 'Holland',
          'text2': 'Ukraina',
          'hidden': false,
          'kickOff': new Date('2021-06-13T22:00:00')
        }, {
          'gameNumber': 8,
          'text': 'Šotimaa-Tšehhi Vabariik',
          'text1': 'Šotimaa',
          'text2': 'Tšehhi Vabariik',
          'hidden': false,
          'kickOff': new Date('2021-06-14T16:00:00')
        }, {
          'gameNumber': 9,
          'text': 'Poola-Slovakkia',
          'text1': 'Poola',
          'text2': 'Slovakkia',
          'hidden': false,
          'kickOff': new Date('2021-06-14T19:00:00')
        }, {
          'gameNumber': 10,
          'text': 'Inglismaa-Rootsi',
          'text1': 'Inglismaa',
          'text2': 'Rootsi',
          'hidden': false,
          'kickOff': new Date('2021-06-14T22:00:00')
        }, {
          'gameNumber': 11,
          'text': 'Ungari-Portugal',
          'text1': 'Ungari',
          'text2': 'Portugal',
          'hidden': false,
          'kickOff': new Date('2021-06-15T19:00:00')
        }, {
          'gameNumber': 12,
          'text': 'Prantsusmaa-Saksamaa',
          'text1': 'Prantsusmaa',
          'text2': 'Saksamaa',
          'hidden': false,
          'kickOff': new Date('2021-06-15T22:00:00')
        }, {
          'gameNumber': 13,
          'text': 'Soome-Venemaa',
          'text1': 'Soome',
          'text2': 'Venemaa',
          'hidden': false,
          'kickOff': new Date('2021-06-16T16:00:00')
        }, {
          'gameNumber': 14,
          'text': 'Türgi-Wales',
          'text1': 'Türgi',
          'text2': 'Wales',
          'hidden': false,
          'kickOff': new Date('2021-06-16T19:00:00')
        }, {
          'gameNumber': 15,
          'text': 'Itaalia-Šveits',
          'text1': 'Itaalia',
          'text2': 'Šveits',
          'hidden': false,
          'kickOff': new Date('2021-06-16T22:00:00')
        }, {
          'gameNumber': 16,
          'text': 'Ukraina-Põhja-Makedoonia',
          'text1': 'Ukraina',
          'text2': 'Põhja-Makedoonia',
          'hidden': false,
          'kickOff': new Date('2021-06-17T16:00:00')
        }, {
          'gameNumber': 17,
          'text': 'Taani-Belgia',
          'text1': 'Taani',
          'text2': 'Belgia',
          'hidden': false,
          'kickOff': new Date('2021-06-17T19:00:00')
        }, {
          'gameNumber': 18,
          'text': 'Holland-Austria',
          'text1': 'Holland',
          'text2': 'Austria',
          'hidden': false,
          'kickOff': new Date('2021-06-17T22:00:00')
        }, {
          'gameNumber': 19,
          'text': 'Rootsi-Slovakkia',
          'text1': 'Rootsi',
          'text2': 'Slovakkia',
          'hidden': false,
          'kickOff': new Date('2021-06-18T16:00:00')
        }, {
          'gameNumber': 20,
          'text': 'Horvaatia-Tšehhi Vabariik',
          'text1': 'Horvaatia',
          'text2': 'Tšehhi Vabariik',
          'hidden': false,
          'kickOff': new Date('2021-06-18T19:00:00')
        }, {
          'gameNumber': 21,
          'text': 'Inglismaa-Šotimaa',
          'text1': 'Inglismaa',
          'text2': 'Šotimaa',
          'hidden': false,
          'kickOff': new Date('2021-06-18T22:00:00')
        }, {
          'gameNumber': 22,
          'text': 'Ungari-Prantsusmaa',
          'text1': 'Ungari',
          'text2': 'Prantsusmaa',
          'hidden': false,
          'kickOff': new Date('2021-06-19T16:00:00')
        }, {
          'gameNumber': 23,
          'text': 'Portugal-Saksamaa',
          'text1': 'Portugal',
          'text2': 'Saksamaa',
          'hidden': false,
          'kickOff': new Date('2021-06-19T19:00:00')
        }, {
          'gameNumber': 24,
          'text': 'Hispaania-Poola',
          'text1': 'Hispaania',
          'text2': 'Poola',
          'hidden': false,
          'kickOff': new Date('2021-06-19T22:00:00')
        }, {
          'gameNumber': 25,
          'text': 'Itaalia-Wales',
          'text1': 'Itaalia',
          'text2': 'Wales',
          'hidden': false,
          'kickOff': new Date('2021-06-20T19:00:00')
        }, {
          'gameNumber': 26,
          'text': 'Šveits-Türgi',
          'text1': 'Šveits',
          'text2': 'Türgi',
          'hidden': false,
          'kickOff': new Date('2021-06-20T19:00:00')
        }, {
          'gameNumber': 27,
          'text': 'Põhja-Makedoonia-Holland',
          'text1': 'Põhja-Makedoonia',
          'text2': 'Holland',
          'hidden': false,
          'kickOff': new Date('2021-06-21T19:00:00')
        }, {
          'gameNumber': 28,
          'text': 'Ukraina-Austria',
          'text1': 'Ukraina',
          'text2': 'Austria',
          'hidden': false,
          'kickOff': new Date('2021-06-21T19:00:00')
        }, {
          'gameNumber': 29,
          'text': 'Soome-Belgia',
          'text1': 'Soome',
          'text2': 'Belgia',
          'hidden': false,
          'kickOff': new Date('2021-06-21T22:00:00')
        }, {
          'gameNumber': 30,
          'text': 'Venemaa-Taani',
          'text1': 'Venemaa',
          'text2': 'Taani',
          'hidden': false,
          'kickOff': new Date('2021-06-21T22:00:00')
        }, {
          'gameNumber': 31,
          'text': 'Horvaatia-Šotimaa',
          'text1': 'Horvaatia',
          'text2': 'Šotimaa',
          'hidden': false,
          'kickOff': new Date('2021-06-22T19:00:00')
        }, {
          'gameNumber': 32,
          'text': 'Tšehhi Vabariik-Inglismaa',
          'text1': 'Tšehhi Vabariik',
          'text2': 'Inglismaa',
          'hidden': false,
          'kickOff': new Date('2021-06-22T22:00:00')
        }, {
          'gameNumber': 33,
          'text': 'Slovakkia-Hispaania',
          'text1': 'Slovakkia',
          'text2': 'Hispaania',
          'hidden': false,
          'kickOff': new Date('2021-06-23T19:00:00')
        }, {
          'gameNumber': 34,
          'text': 'Rootsi-Poola',
          'text1': 'Rootsi',
          'text2': 'Poola',
          'hidden': false,
          'kickOff': new Date('2021-06-23T19:00:00')
        }, {
          'gameNumber': 35,
          'text': 'Saksamaa-Ungari',
          'text1': 'Saksamaa',
          'text2': 'Ungari',
          'hidden': false,
          'kickOff': new Date('2021-06-23T22:00:00')
        }, {
          'gameNumber': 36,
          'text': 'Portugal-Prantsusmaa',
          'text1': 'Portugal',
          'text2': 'Prantsusmaa',
          'hidden': false,
          'kickOff': new Date('2021-06-23T22:00:00')
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
            game.hidden = true;
            alert("Aitäh! Ennustus läks kirja mängule " + game.text)
          })
    },
    // 'validateTime': function () {
    //   let today = new Date()
    //   if (today <=) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  }
}


</script>

<style scoped>

</style>