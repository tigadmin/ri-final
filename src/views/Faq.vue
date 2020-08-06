<template>
    <div class="faq">
        <FaqTop/>
        <RestaurantTech3/>
        <RestaurantPos3/>
        <HelloBot2/>
    </div>
</template>

<script>
  // @ is an alias to /src
  import RestaurantPos3 from "@/components/RestaurantPos3.vue";
  import RestaurantTech3 from "@/components/RestaurantTech3.vue";
  import HelloBot2 from "@/components/HelloBot2.vue";
  import FaqTop from "@/components/FaqTop";

  export default {
    mounted() {
      window.scrollTo(0, 0);
    },
    name: "Faq",
    components: {
      FaqTop,
      RestaurantTech3,
      HelloBot2,
      RestaurantPos3
    }
  };
</script>
