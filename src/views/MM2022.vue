<template>
  <div class="list">
    <h1>Arvuta ise oma punktid</h1>
    Sisesta kasutajanimi <input v-model="username1" placeholder="Kasutajanimi"/>
    <!--    Sisesta mängudearv <input v-model="gameNr" placeholder="Mängud"/>-->
    <button v-on:click="calculate()">Punktid</button>
    {{ username1 }} sul on {{ scoreAnswer }} punkti
    <h1> Edetabel</h1>
    <button v-on:click="gameScore()">Refresh</button>
    <table>
      <tr>
        <th>Kasutaja</th>
        <th align="left">Punktid</th>
      </tr>
      <tr v-for="userName in scoreTable" v-bind:key="userName.userName">
        <td align="left">{{ userName.userName }}</td>
        <td align="left">{{ userName.score }}</td>
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
      // 'gameNr': ''
    }

  },
  methods: {
    'gameScore': function () {
      this.$http.get('http://localhost:8080/scoreList/')
          .then(response => {
            console.log(response);
            this.scoreTable = response.data.sort()
          })
    },
    'calculate': function () {
      this.$http.post('http://localhost:8080/calculateScore/' + this.username1)
          .then(response => {
            console.log(response);
            this.scoreAnswer = response.data
            alert("Tubli " + this.username1 + " sul on " + response.data + " punkti")
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


