<template>
  <v-parallax contain dark src="@/assets/pricing-pos.jpg">
    <v-layout align-center row wrap>
      <v-row justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-2 pb-5 font-weight-thin">
            Ready to get started?
          </h1>
          <h4 class="headline pb-5">
            No Commission | No Hidden Fees | No Contracts
          </h4>
          <router-link to="/get-started">
            <v-btn
              @click.stop="dialog = !dialog"
              aria-label="Website Pricing"
              class="ma-2"
              color="light-blue darken-4"
              dark
              rounded
            >
              GET STARTED TODAY!
            </v-btn>
          </router-link>
          <div class="mt-2">
            <!--suppress HtmlUnknownTarget, HtmlUnknownTarget -->
            <img
              alt="Restaurant POS Review"
              height="20"
              src="@/assets/top-local-marketing.png"
            />
          </div>

          <p class="font-weight-regular text--grey darken-1">
            Call Now | (864) 508-7140
          </p>
        </v-col>
      </v-row>
    </v-layout>
  </v-parallax>
</template>
