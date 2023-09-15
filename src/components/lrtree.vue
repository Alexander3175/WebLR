<template>
    <div class="wraper">
<button  @click="$router.push(`/`)"> Back </button>
 <h1>Lr{{  $route.params.id }} &#169;</h1>
<hr />
      <div class="wraper-list">
      <ul>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
      </ul>
      <ol start="4">
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
      </ol>
      <ul style="list-style-type: lower-alpha;">
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
      </ul>
      <ul style="list-style-type:upper-latin;">
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
      </ul>
      <ul style="list-style-image: url('');"><!--https://cdn.icon-icons.com/icons2/3251/PNG/512/circle_small_regular_icon_202972.png-->
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
      </ul>

      <ul>
        <li>OOP</li>
        <li>OOP</li>
        <ol>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
      </ol>
        <li>OOP</li>
        <li>OOP</li>
        <ol>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        <li>OOP</li>
        </ol>
        <li>OOP</li>
        <li>OOP</li>
      </ul>
      <dl>
        <dt> One</dt>
        <dt>One </dt>
      </dl>
      <dl>
        <dt> Two</dt>
        <dt>One </dt>
        <dt>Two </dt>
      </dl>
    </div>

</div>
 <router-view></router-view>
</template>

<script>
export default {
  name: "lrtree",
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


.wraper-list{
  display: flex;
}
.wraper-list ol,ul{
  margin: 20px;
}
</style>
