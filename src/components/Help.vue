<template>
  <section class="pb-5 pt-5">
    <v-container grid-list-md light text-xs-center>
      <v-layout align-center row wrap>
        <v-flex xs12>
          <div class="text-xs-center ma-5 pt-5 pb-5">
            <div class="flex display-1 font-weight-light pb-3">
              Helping More Than 500 Clients In 5 Countries Power Their
              Restaurant
            </div>
            <div class="flex font-weight-light font-weight-light"></div>
          </div>
        </v-flex>
        <v-flex md2 xs12>
          <v-card class="elevation-0 transparent">
            <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
            <v-img
              alt="Local Website Development Design"
              contain
              src="img/flags/usa.png"
            >
            </v-img>
            <v-card-title class="justify-center">USA</v-card-title>
          </v-card>
        </v-flex>
        <v-flex md4 xs12>
          <v-card class="elevation-0 transparent">
            <!--suppress HtmlUnknownTarget -->
            <v-img
              alt="Integrated Marketing POS System"
              contain
              src="img/img/push-notifications-pos-restaurant.png"
            >
            </v-img>
            <v-card-title class="justify-center"
              >Web & Mobile Apps
            </v-card-title>
            <v-card-text class="grey--text  text--darken-2 font-weight-light">
              Includes branded Web App, IOS App, and Android App that works
              across all devices. Includes integrated online ordering with
              built-in marketing tools.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md4 xs12>
          <v-card class="elevation-0 transparent">
            <!--suppress HtmlUnknownTarget -->
            <v-img
              alt="Customer Engagement"
              contain
              src="img/img/web-apps-restaurant-mobile-ios-android.png"
            >
            </v-img>
            <v-card-title class="justify-center"
              >Integrated Marketing Tools
            </v-card-title>
            <v-card-text class="grey--text  text--darken-2 font-weight-light">
              Send push notifications, emails and SMS messages to your customer
              lists. Ensure your message is seen with marketing automation.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Help.vue"
};
</script>

<style scoped></style>
