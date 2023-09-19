<template>
  <div class="wraper">
    <button @click="$router.push(`/`)"> Back </button>
    <h1>Lr{{ $route.params.id }} &#169;</h1>
    <hr />

    <div class="wraper-list">
      <div class="box boxone">
        <h2>Мови які підтримують "Об'єктноорієнтоване програмування"</h2>
        <ul>
          <li>C++</li>
          <li>C#</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>Objective-C</li>
          <li>Python</li>
        </ul>
      </div>
      <div class="box boxto">
        <h2>Принципи ООП</h2>
        <ol>
          <li>Наслідування</li>
          <ul>
            <li>Наслідування - один з принципів об'єктно-орієнтовного програмування, який дає класу можливість використовувати програмний код іншого (базового) класу, доповнюючи його своїми власними деталями реалізації.</li>
            <li>Наслідування у поведінці - повторення одним індивідом (людиною або твариною) зразків поведінки іншого.</li>
          </ul>
          <li>Інкапсуляція</li>
          <ul>
            <li>Інкапсуляція - один з трьох основних механізмів об'єктно-орієнтованого програмування. Йдеться про те, що об'єкт вміщує не тільки дані, але і правила їх обробки, оформлені в вигляді виконуваних фрагментів (методів).</li>
          </ul>
          <li>Поліморфізм</li>
          <ul>
            <li>Інакше кажучи, поліморфізм дозволяє різним об'єктам спільно використовувати той самий інтерфейс, але поводитися по-різному залежно від своїх цілей виконання. Наприклад, у вас є функція, яка приймає на вхід об'єкт Animal . Вона може працювати з будь-яким типом тварин: кішкою, собакою, хом'ячком</li>
              <li>
                Статичний та динамічний поліморфізм

статичний поліморфізм (чи статична диспетчеризація) — якщо код, що буде виконуватись, вибирається під час компіляції; динамічний поліморфізм (чи динамічна диспетчеризація) — якщо код, що буде виконуватись, вибирається під час виконання програми (пізнє зв'язування).
              </li>
            </ul>
        </ol>
      </div>
    </div>
      <div class="definition">
        <dl>
            <dt> Для чого ООП? </dt>
              <dd> ООП - це філософія або методологія проєктування комп'ютерного програмування, яка організовує/моделює дизайн програмного забезпечення навколо даних або об'єктів, а не функцій і логіки. Об'єкт називається полем даних, яке має унікальні атрибути та поведінку. Усе в ООП згруповано як самодостатні об'єкти.
              </dd>
            <dt> Як розшифрувати ООП? </dt>
              <dd>  Особа з особливими освітніми потребами – особа, яка потребує додаткової постійної чи тимчасової підтримки в освітньому процесі з метою забезпечення її права на освіту.
              </dd>
            <dt> Що таке ООП простими словами? </dt>
              <dd>Об'є́ктно-орієнто́ване програмува́ння (ООП, іноді об'єктно-зорієнто́ване програмува́ння; англ. Object-oriented programming, OOP) — одна з парадигм програмування, яка розглядає програму як множину «об'єктів», що взаємодіють між собою.
              </dd>
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
.wraper {

  padding: 20px;
}

.wraper-list {
  display: flex;
  gap: 60px;
}

button {
  width: 100px;
  height: 40px;
  background: none;
  border: 1px solid black;
  margin-bottom: 30px;
}


.box {
  width: 300px;
  height: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom: 20px solid #03a9f4;
}
.box ul li {
  padding: 10px;
  opacity: 0.2;
}
.box ul li:hover {
  transform: scale(1.1);
  background: #25bcff;
  box-shadow: 0 5px 25px rgba(0, 0, 0, .2);
  color: #fff;
  opacity: 1;
}
.box h2 {
  color: #fff;
  background: #03a9f4;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 700;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.boxone ul {
  position: relative;

  list-style: none;
  padding: 5px;
  width: 100%;
  background: #fff;
  box-shadow: 0 5px 25px rgba(0, 0, 0, .1);
}

.boxto ol li::marker {
  color: hsl(340 50% 50%);
  font-weight: 900;
  font-size: 0.9em;
}

.boxto ol {
  position: relative;
  padding: 5px;
  width: 100%;
  background: #fff;
  box-shadow: 0 5px 25px rgba(0, 0, 0, .1);
}

.boxto ol li {
  padding: 10px;
}
.definition{
  margin: 20px 10px 0 10px;
}
dt{
  font-weight: bold;
}
dd{
  margin-left: 20px;
}
</style>
