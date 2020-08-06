<template>
  <div class="home">
    <HelloWorld/>
    <HelloTop/>
    <HelloTop2/>
    <HelloWorld1/>
    <Clients/>
    <RestaurantPos3/>
    <HelloBot2/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// @ is an alias to /src
import HelloTop from "@/components/HelloTop.vue";
import HelloTop2 from "@/components/HelloTop2.vue";
import HelloWorld1 from "@/components/HelloWorld1.vue";
import RestaurantPos3 from "@/components/RestaurantPos3.vue";
import HelloBot2 from "@/components/HelloBot2.vue";
import Clients from "@/components/Clients.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Clients,
    HelloWorld1,
    HelloTop,
    HelloTop2,
    HelloBot2,
    RestaurantPos3,
  }
};
</script>
