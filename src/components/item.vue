<script>
export default{
    props:{
        item:{
            type: Object,
            required: true
        }
    }
}
</script>

<template>
        <div class="list_item">
          <div class="item-name">
            <h3>
           {{ item.title }}
          </h3>
          </div>
          <div class="item-bth">
            <button class="Open" @click="$router.push(`/${item.rout}/:${item.id}`)">Open</button>
          </div>
        </div>
</template>

<style>
.list_item {
  background-color: white;
  max-width: 530px;
  height: 150px;
  padding: 10px;
  position: relative;
}
.Open{
  position: absolute;
  bottom: 10px;
  background: none;
  border: 1px solid black;
  border-radius: 5px;
  width: 100px;
  height: 35px;
}
</style>