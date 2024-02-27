<template>
  <div class="row">
    <p>
      <!--<NewUser></NewUser>
      <UserList></UserList>-->
    </p>
    <p>{{$store.state.mainName}}</p>
  </div>
  
  <div class="row ml-5">
    <p>
      {{$store.state.musteri.contactName}}
    </p>
  </div>
  <pre>
    {{musteriAdi}}
  </pre>
</template>
<script>
  import {mapGetters} from "vuex";
  /* import NewUser from "@/components/NewUser.vue";
  import UserList from "@/components/UserList.vue";
  export default {
    name:"App",
    components:{
      NewUser,
      UserList
    },
    computed : {
      //... mapGetters(["woodItems","activeUser"]),
      ... mapGetters({
        activeUser: "_activeUser"
      }),
    },
  } */
  export default {
    name: "App",
    created(){
      console.log(this.$store.getters["musteri/_contactName"])
    },
    computed: {
      ... mapGetters({
        musteriAdi : "musteri/_contactName",
      })
    }
  }
</script>