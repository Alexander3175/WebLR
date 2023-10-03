<template>
  <div class="wraper">
    <button @click="$router.push(`/`)"> Back </button>
    <h1>Lr{{ $route.params.id }} &#169;</h1>
    <hr />
    <div class="global_image">
      <a href="#" target="_blank">
        <div class="img">

</div>
      </a>
    </div>
    <div class="oop">
      <img src="data:image/png;base64,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" alt="oop_img">
    </div>
    <div class="wraper-content">
      <div class="conteiner_item incapsulation">
        <div class="imgae_image incapsulation_imgae"></div>
        <div class="description">
          <h2>Інкапсуляція – це…</h2>
        <p>
          Инкапсуляция – заключение данных и функций в оболочки. В ООП в качестве последнего компонента выступают классы.
          Они собирают переменные и методы в одном месте, после чего защищают их от вмешательства извне.
          В процессе реализации «средства защиты» происходит сокрытие информации.
          <br />
          <br />
          Методы позволяют контролировать обращение к данным, а также предотвратить их удаление или некорректное
          изменение.
          Пример – запретить присваивать полю «возраст» объекта «Клиент» число большее 120.
        </p>
        </div>
      </div>
      <div class="conteiner_item polimorf">
        <div class="imgae_image polimorf_imgae"></div>
        <div class="description">
          <h2>Поліморфізм – це…</h2>
        <p>
          Що таке поліморфний клас?
Виклик віртуальної функції для об'єкту визначається під час компіляції. В інших випадках адреса конкретної функції визначається під час виконання програми. <mark>Об'єкт класу, у якому є віртуальні функції</mark>, має назву "поліморфний об'єкт", а відповідний клас – поліморфним класом (polymorphic class).
    
        </p>
        </div>
      </div>
      <div class="conteiner_item naslidu">
        <div class="imgae_image naslidu_imgae"></div>
        <div class="description">
          <h2>Наслідування – це…</h2>
        <p>
          Наслідування (англ. inheritance) — один з принципів об'єктно-орієнтовного програмування, який дає класу можливість використовувати програмний код іншого (базового) класу, доповнюючи його своїми власними деталями реалізації.

        </p>
        </div>
      </div>
      <div class="conteiner_item abstruct">
        <div class="imgae_image abstruct_imgae"></div>
        <div class="description">
          <h2>Абстракція – це…</h2>
        <p>
          Абстракція в ООП – це <mark>виділення загальних характеристик об'єктів, їхніх властивостей і методів, при ігноруванні деталей реалізації.</mark> Цей процес дає змогу створювати простіші моделі складних систем, які містять тільки необхідні елементи для розв'язання задачі.
        </p>
        </div>
      </div>
    </div>
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
  padding: 20px;
  background: #ebf5fc;
}
.global_image{

  margin-bottom: 200px;
  float: right;
}
.img {
  background: center / cover no-repeat url("https://i.ytimg.com/vi/Dh3xrMl_Ses/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBj7XQY0_wN54aawSrw7I9pZwrfRQ");
width: 500px;
  height: 300px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 10px 23px 0px;
  box-sizing: border-box;

}
.wraper-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;


}

button {
  width: 100px;
  height: 40px;
  background: none;
  border: 1px solid black;
  margin-bottom: 30px;
}

.imgae_image {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
}
.conteiner_item{
  max-width: 500px;
}
.incapsulation {
  position: relative;
border-radius: 30px;
width: 500px;
box-shadow: 0 10px 20px rgba(0,0,0,0.1);
border: 1px solid white;
}
.polimorf{
  position: relative;
border-radius: 30px;
width: 500px;
box-shadow: 0 10px 20px rgba(0,0,0,0.1);
border: 1px solid white;
}
.naslidu{
  position: relative;
border-radius: 30px;
width: 500px;
box-shadow: 0 10px 20px rgba(0,0,0,0.1);
border: 1px solid white;
}
.abstruct{
  position: relative;
border-radius: 30px;
width: 500px;
box-shadow: 0 10px 20px rgba(0,0,0,0.1);
border: 1px solid white;
}
.incapsulation_imgae{
  width: 100%;
  height: 350px;
  background: center / cover no-repeat url("https://otus.ru/journal/wp-content/uploads/2023/02/oj-1080x720-14.jpg");
  box-sizing: border-box;
}
.polimorf_imgae{
  width: 100%;
  height: 350px;
  background: center / cover no-repeat url("https://i.ytimg.com/vi/6Z-xPXs4tg4/sddefault.jpg");
  box-sizing: border-box;
}
.naslidu_imgae{
  width: 100%;
  height: 350px;
  background: center / cover no-repeat url("https://i.ytimg.com/vi/Kgt3wT73YaI/maxresdefault.jpg");
  box-sizing: border-box;
}
.abstruct_imgae{
  width: 100%;
  height: 350px;
  background: center / cover no-repeat url("https://i.ytimg.com/vi/KRnEpNykQls/maxresdefault.jpg");
  box-sizing: border-box;
}


.incapsulation>h2 {
  font-size: 26px;
  font-weight: bold;
}
.description p {
  font-size: 16px;
  margin: 5px 0 0 0;
}
.description{
  padding: 20px;
}
.oop img{
  width: 500px;
  height: 300px;
  opacity: 0.8;
  float: left;
}
</style>
