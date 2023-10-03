<template>
   <div class="list-wraper">
    <div class="list-content">
 <post-Item v-for="item in items" :item="item" :key="items.id"></post-Item>
 </div>
 </div>
</template>

<script>
import postItem from './item.vue'
export default {
  name: "navigationLR",
  components:{
    postItem
  },
  data(){
    return{
      items:[
        {
        id: 1,
        title: 'Лабораторна робота №1 Створення HTML-сторінки з форматованим текстом',
        rout: "lrOne"
      },
      {
        id: 2,
        title: 'Лабораторна робота №2 Створення HTML-сторінки з таблицями',
        rout: "lrTwo"
      },
      {
        id: 3,
        title: 'Лабораторна робота №3. Створення HTML-сторінки з використанням',
        rout: "lrtree"
      },
      {
        id: 5,
        title: 'Лабораторна робота №5. Створення HTML-сторінки з використанням',
        rout: "lrfive"
      }
    ]
    }
  }
};
</script>

<style scoped>
.list-wraper {
  max-width: 100%;
  background-color: rgb(0, 23, 43);
  height: auto;
  padding: 50px;
}
.list-content{
  display: flex;
  gap: 10px;
}
</style>
