<template>
  <div class="list">
    <h1>Edetabel</h1>
    <!--        <input v-model.number="score">
            <input v-model="user_name">-->
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
      'scoreTable': ''
    }

  },
  methods: {
    'gameScore': function () {
      this.$http.get('http://localhost:8080/scoreList/')
          .then(response => {
            console.log(response);
            this.scoreTable = response.data
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
