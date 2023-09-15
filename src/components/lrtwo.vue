<template>
    <div class="wraper">
<button  @click="$router.push(`/`)"> Back </button>
 <h1>Lr{{  $route.params.id }} &#169;</h1>
<hr />

<div class="wraper-table">
    <table>
  <tr>
    <th>Countries</th>
    <th>Capitals</th>
    <th>Population</th>
    <th>Language</th>
  </tr>
  <tr>
    <td>USA</td>
    <td>Washington, D.C.</td>
    <td>309 million</td>
    <td>English</td>
  </tr>
  <tr>
    <td>Sweden</td>
    <td>Stockholm</td>
    <td>9 million</td>
    <td>Swedish</td>
  </tr>
</table>


<hr />


<table>
  <colgroup>
    <col style="background-color: #0f0" />
  </colgroup>
  <tr>
    <th>Lime</th>
    <th>Lemon</th>
    <th>Orange</th>
  </tr>
  <tr>
    <td>Green</td>
    <td>Yellow</td>
    <td>Orange</td>
  </tr>
</table>


<hr />


<table>
  <caption>
    Awesome caption
  </caption>
  <tr>
    <td>Awesome data</td>
  </tr>
   </table>

   <hr />

   <table>
  <tr>
    <th colspan="4">Countries</th>
    <th>Capitals</th>
    <th>Population</th>
    <th style="background-color: aqua; border: 2px solid red;">Language</th>
    <th>Capitals</th>
    <th>Population</th>
    <th colspan="2" rowspan="4">Capitals</th>
    <th>Language</th>
    <th colspan="2" rowspan="4">Capitals</th>
  </tr>
  <tr>
    <td  colspan="4" rowspan="2" style="background-color: black; border: 2px solid red; color:white;">USA</td>
    <td style="background-color: red;">309 million</td>
    <td colspan="2" rowspan="2">Washington, D.C.</td>
    <td>309 million</td>
    <td>309 million</td>
    <td>309 million</td>
  </tr>
  <tr>
    <td>Sweden</td>
    <td>9 million</td>
    
    <td>Swedish</td>
    <td>Sweden</td>
    
  </tr>
  
</table>
</div>


</div>
 <router-view></router-view>
</template>

<script>
export default {
  name: "lrtwo",
};
</script>

<style scoped>
table {
  display: inline-block;
  border-spacing: 0;
}
th,
td {
  padding: 5px 10px;
}

th {
  background: #fff;
}


table,
th,
td {
  border: 1px solid;
}
.wraper{
    padding: 20px;
}
button{
    width: 100px;
    height: 40px;
    background: none;
    border: 1px solid black;
    margin-bottom: 30px;
}
</style>
