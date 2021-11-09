<template>
  <div class="restaurant-marketing">
    <HelloWorld2 />
    <RestaurantTech />
    <RestaurantTech3 />
    <RestaurantPos3 />
    <HelloBot2 />
  </div>
</template>

<script>
import RestaurantPos3 from "@/components/RestaurantPos3.vue";
import RestaurantTech from "@/components/RestaurantTech.vue";
import RestaurantTech3 from "@/components/RestaurantTech3.vue";
import HelloBot2 from "@/components/HelloBot2.vue";
import HelloWorld2 from "@/components/HelloWorld2";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "restaurant-marketing",
  components: {
    HelloWorld2,
    RestaurantTech,
    RestaurantTech3,
    RestaurantPos3,
    HelloBot2
  }
};
</script>
