<template>
    <div class="wraper">
<button  @click="$router.push(`/`)"> Back </button>
 <h1>Lr{{  $route.params.id }} &#169;</h1>
<hr />
<div class="bioOne">
<h2>Тара́с Григо́рович Шевче́нко</h2>
<h3>народився:</h3>
<p>Тарас Шевченко <i>народився</i> 9 березня <big>1814</big> року</p>
<h3> сім'я Шевченків:</h3>
<p><strong>1816 року</strong> сім'я Шевченків переїхала до села <em>Кирилівки</em> Звенигородського повіту</p>
<h3>батько одружився вдруге:</h3>
<p><mark>19 жовтня 1823</mark> року батько одружився вдруге з удовою Оксаною Терещенко</p>
<br />
<blockquote cite="#">
    <q>«В своїй хаті своя й правда, І сила, і воля».<br /> «Учітесь, читайте, і чужому научайтесь, й свого не цурайтесь». <br />«Якби ви вчились так, як треба, то й мудрость би була своя».<br />«Доборолась Україна до самого краю.</q>
</blockquote>
</div>
</div>
 <router-view></router-view>
</template>

<script>
export default {
  name: "lrOne",
};
</script>

<style scoped>
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
