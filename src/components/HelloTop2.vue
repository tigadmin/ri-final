<template>
  <section class="grey lighten-5 pb-5 pt-5">
    <v-flex xs12>
      <v-container grid-list-xl>
        <v-layout justify-center row wrap>
          <v-flex md2 xs12>
            <v-card class="elevation-0 transparent">
              <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
              <v-img
                alt="Facebook Marketing For Restaurants"
                contain
                src="@/assets/icons/logo-facebook.png"
              >
              </v-img>
            </v-card>
          </v-flex>
          <v-flex md2 xs12>
            <v-card class="elevation-0 transparent hidden-sm-and-down">
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Google Local Search"
                contain
                src="@/assets/icons/logo-google.png"
              >
              </v-img>
            </v-card>
          </v-flex>
          <v-flex md2 xs12>
            <v-card class="elevation-0 transparent hidden-sm-and-down">
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Instagram Local Search"
                contain
                src="@/assets/icons/logo-instagram.png"
              >
              </v-img>
            </v-card>
          </v-flex>
          <v-flex md2 xs12>
            <v-card class="elevation-0 transparent hidden-sm-and-down">
              <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
              <v-img
                alt="Instagram Local Search"
                contain
                src="@/assets/icons/logo-pinterest.png"
              >
              </v-img>
            </v-card>
          </v-flex>
          <v-flex md2 xs12>
            <v-card class="elevation-0 transparent hidden-sm-and-down">
              <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
              <v-img
                alt="Bing Local Search"
                contain
                src="@/assets/icons/logo-bing.png"
              >
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout align-center column justify-center>
          <div class="text-xs-center pb-5 pt-10">
            <router-link to="/restaurant-marketing">
              <v-btn
                aria-label="Restaurant Marketing"
                color="primary"
                dark
                rounded
              >
                LEARN HOW WE MARKET YOUR RESTAURANT
              </v-btn>
            </router-link>
          </div>
        </v-layout>
      </v-container>
    </v-flex>
  </section>
</template>

<script>
export default {
  name: "HelloTop"
};
</script>
