<template>
    <section class="grey lighten-5 pb-5 pt-5">
        <v-container grid-list-md light text-xs-center>
            <v-layout align-center row wrap>
                <v-row justify="center">
                    <v-col class="text-center pt-5 pb-5" cols="12">
                        <div class="flex display-1 font-weight-light">
                            Performance Based Restaurant Marketing
                        </div>
                        <div class="flex subheading font-weight-light">
                            We add a small transaction fee ($0.99) to each online order.
                            Your customers pay this transaction fee when placing online
                            orders. This provides us an incentive to do our best work for
                            you and ensures that we always put our best foot forward.
                        </div>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
        <v-flex xs12>
            <v-container grid-list-xl>
                <v-layout align-center row wrap>
                    <v-flex md4 xs12>
                        <v-card>
                            <!--suppress HtmlUnknownTarget -->
                            <v-img
                                    alt="Restaurant Digital Marketing Solutions"
                                    contain
                                    src="/img/restaurant/search-engine-marketing.jpg"
                            >
                            </v-img>
                            <v-card-title class="headline">Search Marketing</v-card-title>
                            <v-card-text class="subheading grey--text text--darken-1">
                                Achieve maximum visiblty on Google Local, Bing Local and other
                                popular search destinations.
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex md4 xs12>
                        <v-card>
                            <!--suppress HtmlUnknownTarget -->
                            <v-img
                                    alt="digital strategies"
                                    contain
                                    src="/img/restaurant/facebook-restaurant-marketing.jpg"
                            >
                            </v-img>
                            <v-card-title class="headline"
                            >Social Media Marketing
                            </v-card-title
                            >
                            <v-card-text class="subheading grey--text text--darken-1">
                                Connect with customers socially to form interpersonal relations
                                with those who are near you.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex md4 xs12>
                        <v-card>
                            <!--suppress HtmlUnknownTarget -->
                            <v-img
                                    alt="digital strategies"
                                    contain
                                    src="/img/restaurant/retargeting.jpg"
                            >
                            </v-img>
                            <v-card-title class="headline">Re-Targeting</v-card-title>
                            <v-card-text class="subheading grey--text text--darken-1">
                                Keep your brand in front and center of local customers as they
                                visit other popular sites online.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
                <div class="grey lighten-5 text-xs-center pt-5 pb-5">
                    <v-flex xs12>
                        <v-container grid-list-xl>
                            <v-layout align-center column justify-center>
                                <div class="text-xs-center pb-5 pt-5">
                                    <router-link to="/restaurant-marketing-pricing">
                                        <v-btn
                                                aria-label="Website Pricing"
                                                color="primary"
                                                dark
                                                rounded
                                        >
                                            What Does It Cost?
                                        </v-btn>
                                    </router-link>
                                </div>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </div>
            </v-container>
            <div class="text-xs-center">
                <v-container grid-list-md light text-xs-center>
                    <v-layout align-center column justify-center>
                        <div class="mt-2">
                            <img
                                    alt="Restaurant POS Review"
                                    height="600px"
                                    src="img/restaurant/info-graphic-icons.png"
                            />
                        </div>
                    </v-layout>
                </v-container>
            </div>
        </v-flex>
    </section>
</template>

<script>
  export default {
    name: "RestaurantPos1.vue"
  };
</script>

<style scoped></style>
