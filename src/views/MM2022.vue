<template>
  <div class="list">
    <h1> Edetabel</h1>
    <button class="btn btn__primary btn__lg" v-on:click="gameScore()">Refresh</button>
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
      'userName': '',
      'userName1': '',
      'score1': '',
      'userPoints': ''
    }

  },
  methods: {
    'gameScore': function () {
      this.$http.get('/api/scoreList/')
          .then(response => {
            console.log(response);
            this.scoreTable = response.data
          })
    },
    'getPoints': function () {
      this.$http.get('/api/scoreUserList/' + this.userName1.value)
          .then(response => {
            console.log(response);
            this.userPoints = response.data
          })
    }
  }
}

</script>

<style scoped>

</style>