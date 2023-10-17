<template>
  <div class="wraper">
    <button @click="$router.push(`/`)"> Back </button>
    <h1>Lr{{ $route.params.id }} &#169;</h1>
    <hr />
      <div class="intro">
        <video src="../sourse/video/intro.mp4" muted autoplay loop class="intro__media"></video>
      </div>
      <video src="../sourse/video/pixel.mp4" controls muted poster="../sourse/image/posterPixel.jpg" class="video"></video>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/h_D3VFfhvs4?si=VIyIVNuKPOfQVYHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style=" float: right;"></iframe>
      <video  style="width: 300px; max-height: 300px;" controls>
        <source src="../sourse/video/pixel.mp4" type="video/mp4">
        <source src="../sourse/video/intro.mp4" type="video/mp4">
      </video>
      <audio src="#"></audio>
      <audio preload loop controls autoplay>
        <source src="#">
        <source src="#">
      </audio>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "lrfive",
};
</script>

<style scoped>
.wraper {
  background: #ebf5fc;
}

button {
  width: 100px;
  height: 40px;
  background: none;
  border: 1px solid black;
  margin-bottom: 30px;
}
.intro{
  position: relative;
  overflow: hidden;
  padding-bottom: 56%;
  width: 100%;
}
.intro::after{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);

  position: absolute;
  top:0;
  left: 0;
  z-index: 2;
}
.intro__media{
  position: absolute;
  width: 100%;
  z-index: 1;
  height: auto;
  top:0;
  left: 0;
}
.video{
  float: left;
  width: 400px;
  max-height: 400px;
}
</style>
