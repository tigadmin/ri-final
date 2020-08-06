<template>
    <section class="white pb-5 pt-5">
        <v-container grid-list-md light text-xs-center>
            <v-layout align-center row wrap>
                <v-flex xs12>
                    <div class="text-xs-center ma-5 pt-5 pb-5">
                        <div class="flex display-1 font-weight-light pb-3">
                            All Inclusive Package Pricing
                        </div>
                        <div class="flex subheading font-weight-light">
                            Your overall ad spend depends on you local competition,
                            demographics your targeting, and your marketing budget. We
                            recommend a Facebook marketing budget (paid to Facebook) of $500
                            per month to start. No minimum ad spend required.
                        </div>
                    </div>
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
                </v-flex>
            </v-layout>
            <v-row justify="center">
                <v-col class="text-center" cols="12">
                    <v-btn class="ma-2" color="primary" exact router to="/get-started"
                    >FREE TRIAL
                    </v-btn
                    >
                    <p class="pt-5 caption font-italic">
                        *We recommend a Facebook marketing budget (paid to Facebook) of $500
                        per month to start.
                    </p>
                    <p class="caption font-italic">
                        **Optional
                    </p>
                    <p class="caption font-italic">
                        *** Apple requires a yearly payment of $100 per year for iOS Apps
                    </p>
                </v-col>
            </v-row>
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
          { text: "PRO", value: "pro" },
          { text: "ADVANCED", value: "adv" },
          { text: "FRANCHISE", value: "zee" }
        ],
        desserts: [
          {
            name: "Restaurant Suite™ Platform:\n",
            pro: "INCLUDED",
            adv: "INCLUDED",
            zee: "INCLUDED"
          },
          {
            name: "Web App:\n",
            pro: "INCLUDED",
            adv: "CUSTOM",
            zee: "CALL FOR QUOTE"
          },
          {
            name: "iOS Mobile App:***\n",
            pro: "INCLUDED",
            adv: "INCLUDED",
            zee: "INCLUDED"
          },
          {
            name: "Android Mobile App:\n",
            pro: "INCLUDED",
            adv: "INCLUDED",
            zee: "INCLUDED"
          },
          {
            name: "Local Connect™:\n",
            pro: "INCLUDED",
            adv: "INCLUDED",
            zee: "INCLUDED"
          },
          {
            name: "Social Connect™:\n",
            pro: "INCLUDED",
            adv: "INCLUDED",
            zee: "INCLUDED"
          },
          {
            name: "Mail Connect™**:\n",
            pro: "$299.00 + $1.85 per postcard",
            adv: "$299.00 + $1.85 per postcard",
            zee: "$299.00 + $1.85 per postcard"
          },
          {
            name: "Media Connect™:\n ",
            pro: "INCLUDED",
            adv: "INCLUDED",
            zee: "INCLUDED"
          },
          {
            name: "Ad Connect™:\n ",
            pro: "INCLUDED",
            adv: "INCLUDED",
            zee: "INCLUDED"
          },
          {
            name: "Email Marketing:\n",
            pro: "INCLUDED",
            adv: "INCLUDED",
            zee: "INCLUDED"
          },
          {
            name: "Push Notifications:\n",
            pro: "INCLUDED",
            adv: "INCLUDED",
            zee: "INCLUDED"
          },
          {
            name: "SMS Messaging:\n",
            pro: "INCLUDED",
            adv: "INCLUDED",
            zee: "INCLUDED"
          },
          {
            name: "Digital Gift Cards:\n",
            pro: "INCLUDED",
            adv: "INCLUDED",
            zee: "INCLUDED"
          },
          {
            name: "Loyalty Program:\n",
            pro: "INCLUDED",
            adv: "INCLUDED",
            zee: "INCLUDED"
          },
          {
            name: "24/7 Lifetime Support:\n",
            pro: "INCLUDED",
            adv: "INCLUDED",
            zee: "INCLUDED"
          },
          {
            name: "Setup Fee:\n",
            pro: "$495.00",
            adv: "$1495.00",
            zee: "CALL FOR QUOTE"
          },
          {
            name: "Digital Terminal:**\n",
            pro: "$699.00",
            adv: "$699.00",
            zee: "$699.00"
          },
          {
            name: "Monthly MGT Fee:\n",
            pro: "$595.00",
            adv: "$595.00",
            zee: "CALL FOR QUOTE"
          },
          {
            name: "TOTAL PRICE",
            pro: "$595.00 per/m + Ad Spend*",
            adv: "$595.00 per/m + Ad Spend*",
            zee: "CALL FOR QUOTE"
          }
        ]
      };
    }
  };
</script>
