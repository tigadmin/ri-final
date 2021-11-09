<template>
  <section class="pb-5 pt-5">
    <div class="text-xs-center">
      <v-container grid-list-md light text-xs-center>
        <v-layout align-center row wrap>
          <v-flex xs12>
            <div class="text-xs-center ma-5 pt-5 pb-5">
              <div class="flex display-1 font-weight-light pb-3">
                How It Works
              </div>
              <div class="flex subheading font-weight-light">
                Restaurant Image is a full-service performance-based digital
                marketing company that utilizes technology to help restaurants
                connect with local customers. We provide our advertisers with a
                branded Web and mobile app and aggressively push these apps to
                customers in your local area.
              </div>
            </div>
          </v-flex>
          <v-flex md3 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Restaurant Search Engine Marketing Mobile Apps"
                contain
                src="@/assets/create-account.jpg"
              >
              </v-img>
              <v-card-title class="headline">Setup Apps</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Complete our onboarding checklist and send us your restaurant
                menu and the required food photography.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md3 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Restaurant Direct Mailers Mail"
                contain
                src="@/assets/restaurant-app3.jpg"
              >
              </v-img>
              <v-card-title class="headline">Launch Campaigns</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Set your advertising budget and approve the ad campaigns. Once
                approved we start running your ads
              </v-card-text>
              <!--<v-card-actions>
                                            <router-link to="/localwebsitedesign/"><v-btn aria-label="local websites"  color="teal">Local Websites</v-btn></router-link>
                                          </v-card-actions>-->
            </v-card>
          </v-flex>
          <v-flex md3 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
              <v-img
                alt="Restaurant Customer Places Order"
                contain
                src="@/assets/restaurant-chef-order.jpg"
              >
              </v-img>
              <v-card-title class="headline">Prepare Order</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Customer places order online, your staff receives an order
                notification and you prepare the meal.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md3 xs12>
            <v-card>
              <!--suppress HtmlUnknownTarget -->
              <v-img
                alt="Restaurant Customer Places Order"
                contain
                src="@/assets/order-complete.jpeg"
              >
              </v-img>
              <v-card-title class="headline">Mark Complete</v-card-title>
              <v-card-text class="subheading grey--text text--darken-1">
                Once customer pickups order, your staff marks the order as
                complete. Customer payments are deposited directly to you.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <div class="text-xs-center pt-5 pb-5">
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout align-center column justify-center>
                <div class="text-xs-center pb-5 pt-5">
                  <router-link to="/get-started">
                    <v-btn
                      aria-label="Website Pricing"
                      color="primary"
                      dark
                      rounded
                    >
                      GET STARTED TODAY!
                    </v-btn>
                  </router-link>
                </div>
              </v-layout>
            </v-container>
          </v-flex>
        </div>
      </v-container>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  name: "RestaurantHow.vue"
};
</script>

<style scoped></style>
