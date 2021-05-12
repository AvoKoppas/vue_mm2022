<template>
  <div class="list">
    <h1> Edetabel</h1>
    <button v-on:click="gameScore()">Refresh</button>
    <table align="center" border="1">
      <tr>
        <th align="center">Kasutaja</th>
        <th align="center">Punktid</th>
      </tr>
      <tr v-for="userName in scoreTable" v-bind:key="userName.userName">
        <td align="center">{{ userName.userName }}</td>
        <td align="center">{{ userName.score }}</td>
      </tr>
    </table>
    <input type="text" id="userName1" placeholder="username">
    <button v-on:click="getPoints()" id="userPoints">Vajuta</button>
    <table align="center" border="1">

    </table>
  </div>
</template>

<script>
export default {
  /*new Vuetify({theme: {
                themes: {
                  light: {
                    primary: colors.deep - orange.lighten4, //#FFCCBC
                    secondary: colors.light - blue.accent2, //#40C4FF
                    accent: pink.accent2, // #FF4081
                  }

                },
    })*/
  data: function () {
    return {
      'score': '',
      'user': '',
      'scoreTable': '',
      'scoreAnswer': '',
      'username1': '',
      'userName': '',
      'userName1': '',
      'score1': '',
      'userPoints': ''
    }

  },
  methods: {
    'gameScore': function () {
      this.$http.get('http://localhost:8080/scoreList/')
          .then(response => {
            console.log(response);
            this.scoreTable = response.data
          })
    },
    'getPoints': function () {
      this.$http.get('http://localhost:8080/scoreUserList/' + this.userName1.value)
          .then(response => {
            console.log(response);
            this.userPoints = response.data
          })
    }
    // 'calculate': function () {
    //   this.$http.post('http://localhost:8080/calculateScore/' + this.username1)
    //       .then(response => {
    //         console.log(response);
    //         alert("Tubli " + this.username1 + " sul on " + response.data + " punkti")
    //         this.scoreAnswer = response.data
    //       })
    // }
  }

}


/*</table>
<button v-on:click="getAllScores()">Refresh</button>
<h1 align="left">Nimekiri kontodest</h1>
<table>
  <tr>
    <th>Account Number</th>
    <th align="left">Balance</th>
  </tr>
  <tr v-for="account in allBalanceAnswer">
    <td align="left">{{ account.accountNr }}</td>
    <td align="left">{{ account.balance + "€" }}</td>
  </tr>
</table>
</div>
</template>


export default {
data: function () {
return {
  'allBalanceAnswer': '',
  'accountNumber': ''
}
},
methods: {
'getAllBalance': function () {
  this.$http.get('http://localhost:8080/getAllBalance/')
      .then(response => {
        console.log(response);
        this.allBalanceAnswer = response.data
      })
}
}-->
}*/
</script>

<style scoped>

</style>


