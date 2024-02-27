<template>
  <!--<button @click="updateUl">YENİ EKLE</button>-->
</template>
<script>
  export default {
    methods: {
      async updateUl(){
        const item = {id: 7, title: "Raf-" + new Date().getTime(), type: "Mobilya"};
        //this.$store.commit("updateItemList",item);
        await this.$store.dispatch("updateItemList",item);
      }
    }
  }
</script>