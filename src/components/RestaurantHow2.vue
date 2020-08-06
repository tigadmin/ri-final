<template>
    <section class="pb-5 pt-5">
        <div class="grey lighten-5 text-xs-center">
            <v-container grid-list-md light text-xs-center>
                <v-layout align-center row wrap>
                    <v-flex xs12>
                        <div class="text-xs-center ma-5 pt-5 pb-5">
                            <div class="flex display-1 font-weight-light pb-3">
                                7 Steps For Success
                            </div>
                            <div class="flex subheading font-weight-light">
                                Your all-inclusive fully managed digital marketing company
                                specifically designed for restaurants.
                            </div>
                        </div>
                    </v-flex>
                    <v-flex md6 xs12>
                        <v-img
                                aspect-ratio="1"
                                contain
                                max-height="260px"
                                src="@/assets/consultation1.svg"
                        ></v-img>
                    </v-flex>
                    <v-flex md6 pb-5 xs12>
                        <v-card justify-center>
                            <v-card-title class="headline"
                            >STEP 1: Create Your Account
                            </v-card-title>
                            <v-card-text class="subheading grey--text text--darken-1">
                                The first step is to create your account. Registration is FREE
                                and allows our consultants to research your local market and
                                start the onboarding process. Our consultants will analyze your
                                requirements and will provide an action plan based on your
                                budget.
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex md6 xs12>
                        <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
                        <v-img
                                aspect-ratio="1"
                                contain
                                max-height="260px"
                                src="@/assets/consultation.svg"
                        ></v-img>
                    </v-flex>
                    <v-flex md6 pb-5 xs12>
                        <v-card justify-center>
                            <v-card-title class="headline"
                            >STEP 2: Marketing Plan & Ad Spend
                            </v-card-title>
                            <v-card-text class="subheading grey--text text--darken-1">
                                Your designated consultant will email you a customized marketing
                                plan and recommended a marketing budget based on your
                                demographics. You will need to sign-off on your marketing plan
                                and confirm your advertising spend.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex md6 xs12>
                        <!--suppress HtmlUnknownTarget -->
                        <v-img
                                aspect-ratio="1"
                                contain
                                max-height="260px"
                                src="@/assets/team-training-pos.svg"
                        ></v-img>
                    </v-flex>
                    <v-flex md6 pb-5 xs12>
                        <v-card justify-center>
                            <v-card-title class="headline"
                            >STEP 3: Watch Training Videos
                            </v-card-title>
                            <v-card-text class="subheading grey--text text--darken-1">
                                Watch our training videos to learn how to process orders, setup
                                your loyalty program, how to send push notifications, text
                                messages, and emails, as well as other important features.
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex md6 xs12>
                        <v-img
                                aspect-ratio="1"
                                contain
                                max-height="260px"
                                src="@/assets/consultation4.svg"
                        ></v-img>
                    </v-flex>
                    <v-flex md6 pb-5 xs12>
                        <v-card justify-center>
                            <v-card-title class="headline"
                            >STEP 4: Mobile Apps Setup
                            </v-card-title>
                            <v-card-text class="subheading grey--text text--darken-1">
                                We upload your menu and setup your Web, iOS, & Android mobile
                                apps. We then customize your web/mobile apps with your branding
                                and store details. Our goal is to encourage local consumers to
                                download your mobile apps.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex md6 xs12>
                        <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
                        <v-img
                                aspect-ratio="1"
                                contain
                                max-height="260px"
                                src="@/assets/mock-training.svg"
                        ></v-img>
                    </v-flex>
                    <v-flex md6 pb-5 xs12>
                        <v-card justify-center>
                            <v-card-title class="headline"
                            >STEP 5: Fund Your Account
                            </v-card-title>
                            <v-card-text class="subheading grey--text text--darken-1">
                                You will need to provide your credit card details to fund third
                                party marketing services such as Facebook & Google. We manage
                                your marketing at no cost to you. We get paid by your customers
                                by adding a small .99 cent transaction fee to online orders that
                                we bring your way.
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex md6 xs12>
                        <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
                        <v-img
                                aspect-ratio="1"
                                contain
                                max-height="260px"
                                src="@/assets/marketing-pos-cloud.svg"
                        ></v-img>
                    </v-flex>
                    <v-flex md6 pb-5 xs12>
                        <v-card justify-center>
                            <v-card-title class="headline"
                            >STEP 6: Approve Marketing Calendar
                            </v-card-title>
                            <v-card-text class="subheading grey--text text--darken-1">
                                We schedule your marketing campaigns thirty days in advance.
                                Once you approve your 30 day marketing calendar we schedule your
                                ad creatives.
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex md6 xs12>
                        <v-img
                                aspect-ratio="1"
                                contain
                                max-height="260px"
                                src="@/assets/consultation8.svg"
                        ></v-img>
                    </v-flex>
                    <v-flex md6 pb-5 xs12>
                        <v-card justify-center>
                            <v-card-title class="headline"
                            >STEP 7: Launch Ad Campaigns
                            </v-card-title>
                            <v-card-text class="subheading grey--text text--darken-1">
                                We launch your marketing campaigns and target local customers in
                                a 10 square mile radius arounded your restaurant.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-layout align-center column justify-center>
                    <div class="text-xs-center pb-5 pt-5">
                        <router-link to="/faq-corona-19-restaurants">
                            <v-btn
                                    aria-label="Restaurant Technology"
                                    color="primary"
                                    dark
                                    rounded
                            >
                                View Frequently Asked Questions
                            </v-btn>
                        </router-link>
                    </div>
                </v-layout>
            </v-container>
        </div>
    </section>
</template>

<script>
  export default {
    mounted() {
      window.scrollTo(0, 0);
    },
    name: "RestaurantHow2.vue"
  };
</script>

<style scoped></style>
