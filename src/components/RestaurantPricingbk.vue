<template>
    <section class="white pb-5 pt-5">
        <v-container grid-list-md light text-xs-center>
            <v-layout align-center row wrap>
                <v-row justify="center">
                    <v-col class="text-center pt-5 pb-5" cols="12">
                        <div class="flex display-1 font-weight-light">
                            All Inclusive Package Pricing
                        </div>
                        <div class="flex subheading  font-weight-light">
                            Restaurant Image &trade; offers two sign-up plans, Full Serve or Self Serve, giving you an option of a fully managed solution or self-managed your solution. Includes step-by-step instructions and resources to help you market your restaurant. Compare the differences and decide which sign-up plan is right for you.                        </div>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
        <v-container grid-list-md light text-xs-center>
            <v-layout align-center row wrap>
                <v-flex xs12>
                <v-row justify="center">
                    <v-flex md8 xs12>
                        <v-row justify="center">
                            <v-card class="elevation-0 transparent ma-5">
                                <v-img
                                        alt="Restaurant Online Ordering Pricing"
                                        src="@/assets/apps-mobile-online-ordering-restaurant-22.jpg"
                                >
                                </v-img>
                            </v-card>
                        </v-row>
                    </v-flex>
                    <v-container grid-list-md light>
                        <v-layout align-center row wrap>
                            <v-row justify="center">
                                <v-col class="text-center pt-5 pb-5" cols="12">
                                    <h2>
                                        Restaurant Suite&trade; Marketing Platform
                                    </h2>
                                </v-col>
                            </v-row>
                        </v-layout>
                    </v-container>
                    <v-data-table
                            :headers="headers"
                            :items="desserts"
                            :items-per-page="25"
                            :rowsPerPage="30"
                            class="elevation-1"
                            hide-default-footer
                    >
                        <template v-slot:items="props">
                            <td>{{ props.item.name }}</td>
                            <td class="text-xs-right">{{ props.item.advanced }}</td>
                            <td class="text-xs-right">{{ props.item.custom2 }}</td>
                            <td class="text-xs-right">{{ props.item.carbs }}</td>
                        </template>
                    </v-data-table>
                </v-row>
                    <v-layout align-center row wrap>
                        <v-row justify="center">
                            <v-col class="text-center" cols="8">
                                <!--<v-btn class="ma-2" color="primary" exact router to="/get-started"
                                >FREE TRIAL
                                </v-btn
                                >-->
                                <p class="caption font-italic">
                                    *Self service plan is a non-managed service. Both plans include "do-it-yourself" documentation and "How To" guides.
                                    <br> *** Apple requires an annual fee of $100 per year for iOS Apps
                                </p>
                            </v-col>
                        </v-row>
                    </v-layout>
                    <v-layout align-center column justify-center>
                        <div class="text-xs-center pb-5 pt-5">
                            <router-link to="/get-started">
                                <v-btn
                                        @click.stop="dialog = !dialog"
                                        aria-label="Website Pricing"
                                        color="primary"
                                        dark
                                        round
                                >
                                    CREATE YOUR ACCOUNT
                                </v-btn>
                            </router-link>
                        </div>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-md light>
            <v-layout align-center row wrap>
                <v-row justify="center">
                    <v-col class="text-center pt-5 pb-5" cols="12">
                        <h2>
                            Restaurant Marketing (*Optional)
                        </h2>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
        <v-container grid-list-md light text-xs-center>
            <v-layout align-center row wrap>
                <v-flex xs12>
                    <v-row justify="center">
                        <v-data-table
                                :headers="headers2"
                                :items="desserts2"
                                :items-per-page="25"
                                :rowsPerPage="30"
                                class="elevation-1"
                                hide-default-footer
                        >
                            <template v-slot:items="props2">
                                <td>{{ props2.item.name }}</td>
                                <td class="text-xs-right">{{ props2.item.advanced }}</td>
                                <td class="text-xs-right">{{ props2.item.custom2 }}</td>
                                <td class="text-xs-right">{{ props2.item.carbs }}</td>
                            </template>
                        </v-data-table>
                    </v-row>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-md light text-xs-center>
            <v-layout align-center row wrap>
                <v-row justify="center">
                    <v-col class="text-center" cols="8">
                        <!--<v-btn class="ma-2" color="primary" exact router to="/get-started"
                        >FREE TRIAL
                        </v-btn
                        >-->
                        <p class="caption font-italic">
                            * Full service plan is a fully-managed service.<br>
                            ** Your overall ad spend depends on you local competition,
                            demographics your targeting, and your marketing budget. We
                            recommend a Facebook marketing budget (paid to Facebook) of $500
                            per month to start. No minimum ad spend required.
                        </p>
                    </v-col>
                </v-row>
            </v-layout>
            <v-layout align-center row wrap>
                <v-row justify="center">
                <v-col class="text-center" cols="12">
                    <v-btn class="ma-2" color="primary" exact router to="/get-started"
                    >Schedule A Consultation
                    </v-btn
                    >
                </v-col>
            </v-row>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
  export default {
    name: "RestaurantPricingbk",
    data() {
      return {
        length: 30,
        totalVisible: 20,
        headers: [
          {
            text: "FEATURES",
            align: "left",
            length: 10,
            totalVisible: 20,
            sortable: false,
            value: "name"
          },
          { text: "SELF-SERVE", value: "pro" },
          { text: "FULL-SERVE", value: "adv" }
        ],
          headers2: [
              {
                  text: "FEATURES",
                  align: "left",
                  length: 10,
                  totalVisible: 20,
                  sortable: false,
                  value: "name"
              },
              { text: "SELF-SERVE", value: "pro" },
              { text: "FULL-SERVE", value: "adv" }
          ],
        desserts: [
          {
            name: "Restaurant Suite™ Platform:\n",
            pro: "$99 per month",
            adv: "$149 per month",
            zee: "$149 per month"
          },
          {
            name: "Web App\n",
            pro: "Included",
            adv: "Included",
            zee: "Included"
          },
          {
            name: "iOS Mobile App:***\n",
            pro: "Included",
            adv: "Included",
            zee: "Included"
          },
          {
            name: "Android Mobile App:\n",
            pro: "Included",
            adv: "Included",
            zee: "Included"
          },
            {
                name: "Delivery App:\n",
                pro: "Included",
                adv: "Included",
                zee: "Included"
            },
            {
                name: "Email Marketing:\n",
                pro: "Included",
                adv: "Included",
                zee: "Included"
            },
            {
                name: "Push Notifications:\n",
                pro: "Included",
                adv: "Included",
                zee: "Included"
            },
            {
                name: "Digital Gift Cards:\n",
                pro: "Included",
                adv: "Included",
                zee: "Included"
            },
            {
                name: "Customer Loyalty:\n",
                pro: "Included",
                adv: "Included",
                zee: "Included"
            },
            {
                name: "SMS Messaging:\n",
                pro: "$0.0075 per message",
                adv: "$0.0075 per message",
                zee: "$0.0075 per message"
            },
            {
                name: "Turnaround\n",
                pro: "7-10 Days",
                adv: "5-7 Days",
                zee: "$149 per month"
            },
            {
                name: "Expert Assistance with Menu Upload\n",
                pro: "No",
                adv: "Yes",
                zee: "$149 per month"
            },
            {
                name: "Expert Assistance with App Configuration\n",
                pro: "No",
                adv: "Yes",
                zee: "$149 per month"
            },
            {
                name: "Expert Assistance with Budget Management\n",
                pro: "No",
                adv: "Yes",
                zee: "$149 per month"
            },
            {
                name: "How To Guides\n",
                pro: "Yes",
                adv: "Yes",
                zee: "$149 per month"
            },
          {
            name: "24/7 Customer Support:\n",
            pro: "Skype / Email",
            adv: "Phone / Skype / Email",
            zee: "INCLUDED"
          },
          {
            name: "In-Store Terminal (Optional)\n",
            pro: "$599.00 per/terminal",
            adv: "$599.00 per/terminal",
            zee: "$599.00 per/terminal"
          },
          {
              name: "One-Time Service Fee:\n",
              pro: "$199.00",
              adv: "$395.00",
              zee: "CALL FOR QUOTE"
          },
          {
            name: "TOTAL PRICE",
            pro: "$199.00 setup + $99 per month",
            adv: "$395.00 setup + $99 per month",
            zee: "CALL FOR QUOTE"
          }
        ],
          desserts2: [
              {
                  name: "Local Connect™:\n",
                  pro: "N/A",
                  adv: "$99 per month*",
                  zee: "Call"
              },
              {
                  name: "Social Connect™:\n",
                  pro: "N/A",
                  adv: "$495 per month*",
                  zee: "Call"
              },
              {
                  name: "Mail Connect™:\n",
                  pro: "N/A",
                  adv: "$299.00 setup + $1.85 per postcard*",
                  zee: "N/A"
              },
              {
                  name: "Media Connect™:\n ",
                  pro: "N/A",
                  adv: "$99 per month*",
                  zee: "Call"
              },
              {
                  name: "Citation Connect™:\n ",
                  pro: "N/A",
                  adv: "$99 per month*",
                  zee: "Call"
              },
              {
                  name: "How To Guides\n",
                  pro: "Yes",
                  adv: "Yes",
                  zee: "$149 per month"
              },
              {
                  name: "Customized Proposal\n",
                  pro: "No",
                  adv: "Yes",
                  zee: "$149 per month"
              },
              {
                  name: "Control of Your Campaign\n",
                  pro: "Yes",
                  adv: "Yes",
                  zee: "$149 per month"
              },
              {
                  name: "Expert Assistance with Marketing\n",
                  pro: "No",
                  adv: "Yes",
                  zee: "$149 per month"
              },
              {
                  name: "MONTHLY",
                  pro: "$0 (upgrade anytime)",
                  adv: "A la carte: Varies + Ad Spend**",
                  zee: "CALL FOR QUOTE"
              }
          ]
      };
    }
  };
</script>
