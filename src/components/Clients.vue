<template>
    <section class="grey lighten-5 pb-5 pt-5">
        <v-container grid-list-md light text-xs-center>
            <v-layout align-center row wrap>
                <v-row justify="center">
                    <v-col class="text-center pt-5 pb-5" cols="12">
                        <div class="flex display-1 font-weight-light">
                            More Than 1000+ Customers Worldwide
                        </div>
                        <h1 class="blockquote font-italic">
                            "One of our main concerns is having to constantly adapting our
                            business model to the latest trends, much less implementing
                            these trends. We try to deliver a flawless, convenient and
                            enjoyable experience to our customers. Technology is helping us
                            to deliver this experience by providing what the customers want
                            and connecting with these customers online."
                        </h1>
                        <div>
                            <p>
                                <strong>Karan Stratford, </strong
                                >
                                <router-link to="/greenville-sc-italian-restaurant">
                                    www.briosopasta.com
                                </router-link
                                >
                            </p>
                        </div>
                        <div class="pt-5 pb-5">
                        <v-img
                                alt="Website POS"
                                contain
                                max-height="120"
                                src="/img/restaurant/brioso-logo.png"
                        >
                        </v-img>
                        </div>
                        <router-link to="/brochure">
                            <v-btn
                                    @click.stop="dialog = !dialog"
                                    aria-label="Website Pricing"
                                    color="primary"
                                    dark
                                    rounded
                                    class="pt-3 pb-3"
                            >
                                DOWNLOAD BROCHURE
                            </v-btn>
                        </router-link>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
  export default {
    name: "Clients.vue"
  };
</script>

<style scoped></style>
