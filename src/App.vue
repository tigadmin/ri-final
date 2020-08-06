<template>
  <v-app>
  <v-app id="App" light>
    <v-navigation-drawer
            :floating="primaryDrawer.floating"
            :mini-variant="primaryDrawer.mini"
            app
            enable-resize-watcher
            overflow
            temporary
            v-model="primaryDrawer.model"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Restaurant Image
          </v-list-item-title>
          <v-list-item-subtitle>
            Restaurant Marketing Platform
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item :key="item.title" :to="item.to" link v-for="item in items">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
                :key="contact.title"
                :to="contact.to"
                link
                v-for="contact in contacts"
        >
          <v-list-item-icon>
            <v-icon>{{ contact.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ contact.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app light>
      <v-app-bar-nav-icon
              @click.stop="primaryDrawer.model = !primaryDrawer.model"
              v-if="primaryDrawer.type !== 'permanent'"
      ><i class="material-icons">
        menu
      </i></v-app-bar-nav-icon
      >
      <v-toolbar-title>
        <router-link to="/"
        >
          <!--suppress HtmlUnknownTarget -->
          <v-img
                  alt="Restaurant Image"
                  contain
                  cover
                  src="@/assets/mobile-restaurant-web-design-logo.png"
          />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn exact router to="/">Home</v-btn>
        <v-btn exact router to="/restaurant-mobile-web-apps"
        >Restaurant Suite&trade;
        </v-btn>
        <v-btn exact router to="/restaurant-marketing">Marketing
        </v-btn>
        <v-btn exact router to="/how-it-works">How It Works</v-btn>
        <v-btn exact router to="/restaurant-faq">FAQ's</v-btn>
        <v-btn exact router to="/restaurant-pricing">Pricing</v-btn>
        <v-btn color="primary" exact router to="/get-started">SIGNUP</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer :inset="footer.inset" app dense>
      <span class="px-4 flex caption font-weight-light"
      >&copy; {{ new Date().getFullYear() }} Restaurant Image Inc. | (864) 990-1059
        <router-link to="/privacy"> Privacy</router-link>|<router-link
                to="/license"
        >
          License</router-link
        >|<router-link to="/terms"> Terms</router-link></span
      >
      <!--<v-col cols="12" sm="12" md="6">
        <v-btn
          absolute
          dark
          fab
          top
          right
          @click="dialog2 = true"
          router
          color="green darken-1"
          class="ma-2"
          to="/meeting"
          ><i class="material-icons">chat</i>
        </v-btn>
      </v-col>-->
    </v-footer>
  </v-app>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
  },

  data: () => ({
    //
    items: [
      { icon: "store", title: "HOME", to: "/", meta: "Restaurant Image" },
      {
        icon: "shopping_cart",
        title: "Restaurant Suite™",
        to: "/restaurant-mobile-web-apps"
      },
      {
        icon: "important_devices",
        title: "Restaurant Marketing",
        to: "/restaurant-marketing"
      },
      {
        icon: "list_alt",
        title: "How It Works",
        to: "/how-it-works"
      },
      {
        icon: "loyalty",
        title: "Pricing",
        to: "/restaurant-pricing"
      },
      {
        icon: "login",
        title: "Get Started",
        to: "/get-started"
      }
    ],
    contacts: [
      {
        icon: "group_add",
        title: "24/7 Support",
        to: "/ticket"
      },
      { icon: "library_books", title: "Video Series", to: "/videos" },
      { icon: "vpn_lock", title: "Insider Access", to: "/insiders" },
      { icon: "phone", title: "(864) 990-1059", to: "/get-started" },
      { icon: "email", title: "jason@restaurantimage.com", to: "/get-started" }
    ],
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      floating: false,
      mini: false
    },
    footer: {
      inset: false
    },
    return: {
      dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  })
};
</script>
