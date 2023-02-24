<script>
import axios from "redaxios";
export default {
  data() {
    return {
      searchedData: "",
      inputSearched: "",
    };
  },
  methods: {
    search() {
      axios
        .get("https://api.github.com/search/repositories", {
          params: {
            q: this.inputSearched,
          },
        })
        .then((response) => {
          this.searchedData = response.data;
        });
    },
  },
};
</script>

<template>
  <div>
    <input type="text" v-model="inputSearched" />
    <button @click="search">searched</button>
    <h2>result</h2>
    <p>totla count: {{ searchedData.total_count }}</p>
    <table>
      <tr>
        <th>Full Name</th>
        <th>URL</th>
      </tr>
      <tr v-for="(item, index) in searchedData.items" :key="index">
        <td>{{ item.full_name }}</td>
        <td>{{ item.html_url }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table,
th,
tr,
td {
  border: 1px solid white;
}
</style>
