<template>
  <div class="ankeet">
    <h1>Tere tulemast</h1>
    <h2>All asub küsimustik, mille palun ära täita.
      Kirjuta palun kastidesse mängude lõpptulemused</h2>
    <table>
      <tr>Mäng nr 1
        <th>Inglismaa-Argentiina</th>
        <input v-model="home" placeholder="Inglismaa"/> <input v-model="away" placeholder="Argentiina">
      </tr>
      <tr>Mäng nr 2
        <th>Belgia-Läti</th>
        <input v-model="home" placeholder="Belgia"/> <input v-model="away" placeholder="Läti">
      </tr>
      <tr>Mäng nr 3
        <th>Eesti-Iiri</th>
        <input v-model="home" placeholder="Eesti"/> <input v-model="away" placeholder="Iiri">
        <button v-on:click="submit">Esita</button>
      </tr>
      <tr>Mäng nr 4
        <th>Taani-Rootsi</th>
        <input v-model="home" placeholder="Taani"/> <input v-model="away" placeholder="Rootsi">
        <button v-on:click="submit">Esita</button>
      </tr>
    </table>
    <button v-on:click="submit">Esita</button>
  </div>
</template>

<script>
export default {
  name: "Ankeet"
}
</script>

<style scoped>

</style>