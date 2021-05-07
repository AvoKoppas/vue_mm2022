<template>
  <div class="list">
    <h1>Arvuta ise oma punktid</h1>
    Sisesta kasutajanimi <input v-model="username1" placeholder="Kasutajanimi"/>
    <button v-on:click="calculate()">Punktid</button>
    <br>
    {{ username1 }} sul on {{ scoreAnswer }} punkti
    <h1> Edetabel</h1>
    <button v-on:click="gameScore()">Refresh</button>
    <table align="center">
      <tr>
        <th>Kasutaja</th>
        <th>Punktid</th>
      </tr>
      <tr v-for="userName in scoreTable" v-bind:key="userName.userName">
        <td>{{ userName.userName }}</td>
        <td>{{ userName.score }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'score': '',
      'user': '',
      'scoreTable': '',
      'scoreAnswer': '',
      'username1': '',
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
    'calculate': function () {
      this.$http.post('http://localhost:8080/calculateScore/' + this.username1)
          .then(response => {
            console.log(response);
            alert("Tubli " + this.username1 + " sul on " + response.data + " punkti")
            this.scoreAnswer = response.data
          })
    }
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


