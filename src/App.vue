<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-app-bar flat color="transparent">
       <v-toolbar-title>회원님 안녕하세요</v-toolbar-title>
      </v-app-bar>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for='item in items' :key='item.title' :to='item.to'>
          <v-list-item-avatar>
            <v-icon> {{item.ico}} </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{item.title}}
            </v-list-item-title>
          </v-list-item-content>
          <!-- <v-list-item-action>
            <v-btn icon ripple>
              <v-icon>mdi-alert-box</v-icon>
            </v-btn>
          </v-list-item-action> -->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>안녕</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-divider></v-divider>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    items: [
      {
        ico: 'mdi-alert',
        title: 'Home',
        to: '/'
      },
      {
        ico: 'mdi-alert-box',
        title: 'About',
        to: '/about'
      },
      {
        ico: 'mdi-alert-circle',
        title: 'About2',
        to: '/about2'
      }
    ]
  }),
  methods: {
    test () {

    }
  }
}
</script>
