 <template>
     <section class="grey lighten-5 pb-5 pt-5">
         <v-container grid-list-md light text-xs-center>
             <v-layout align-center row wrap>
                 <v-row justify="center">
                     <v-col class="text-center pt-5 pb-5" cols="12">
                         <div class="flex display-1 font-weight-light">
                             Increase Restaurant Sales & Get More Customers
                         </div>
                         <div class="flex subheading font-weight-light">
                             Due to COVID-19, your company is most likely scrambling to figure
                             out how to survive. You may feel overwhelmed, but you’re in the
                             right place.<b>We developed Restaurant Suite&trade;to solve this problem</b> -
                             and we know first hand the dilemma many restaurants face and more
                             importantly the solution to the problem.
                         </div>
                     </v-col>
                 </v-row>
             </v-layout>
         </v-container>
         <v-flex xs12>
         <v-container grid-list-xl>
             <v-layout align-center row wrap>
                 <v-flex md4 xs12>
                     <v-card class="elevation-0 transparent">
                        <v-img
                                alt="Local Restaurant Marketing"
                                contain
                                max-height="480px"
                                src="@/assets/local-restaurant-marketing.jpg"
                        >
                        </v-img>
                        <v-card-title class="justify-center">
                            Restaurant Marketing
                        </v-card-title
                        >
                        <v-card-text class="grey--text  text--darken-2 font-weight-light">
                            As a full-service marketing agency - with 20+ years of experience,
                            we understand the digital marketing channels and there purpose in
                            the new consumer-driven restaurant model. We know how they should
                            be used and when they should work in tandem with one another.
                        </v-card-text>
                     </v-card>
                 </v-flex>

                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <!--suppress HtmlUnknownTarget -->
                        <v-img
                                alt="Integrated Marketing POS System"
                                contain
                                max-height="480px"
                                src="@/assets/restaurant-online-ordering.jpg"
                        >
                        </v-img>
                        <v-card-title class="justify-center"
                        >Restaurant Suite&trade;
                        </v-card-title
                        >
                        <v-card-text class="grey--text  text--darken-2 font-weight-light">
                            We developed one of the greatest transformation platforms for
                            today’s’ restaurants. Restaurant Suite&trade; is a marketing
                            platform that helps you manage your digital presence more
                            effectively and provides the tools to reach, track, and engage
                            your customers.
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <!--suppress HtmlUnknownTarget -->
                        <v-img
                                alt="Customer Engagement"
                                contain
                                max-height="480px"
                                src="@/assets/restaurant-targeting.jpg"
                        >
                        </v-img>
                        <v-card-title class="justify-center"
                        >Digital Technology
                        </v-card-title>
                        <v-card-text class="grey--text  text--darken-2 font-weight-light">
                            The possibilities in digital are endless. We leverage technology
                            to enhance your customer's buying experience. Each digital
                            marketing campaign is tracked, measured, and evaluated to gain
                            insights into the customer's buying behavior.
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
         </v-container>
         </v-flex>
     </section>
</template>

<script>
  export default {
    name: "HelloTop.vue"
  };
</script>
