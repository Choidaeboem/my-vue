<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-app-bar flat color="transparent">
       <v-toolbar-title>회원님 안녕하세요</v-toolbar-title>
      </v-app-bar>
      <v-divider></v-divider>
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.icon"
          no-action
        >

        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
            v-for="subItem in item.subItems"
            :key="subItem.title"
            :to="subItem.to"
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ $store.state.user ? $store.state.user.displayName : '로그인' }}</v-toolbar-title>
      <v-toolbar-title>{{ $store.state.token }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="signOut">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-divider></v-divider>
    <v-content>
      <v-container grid-list-md>
        <v-layout row wrap align-center justify-center>
          <v-card color="transparent" flat v-if="!$isFireBaseAuth">
            <v-card-text class="text-center">
              <v-progress-circular
                color="primary"
                indeterminate
              ></v-progress-circular>
            </v-card-text>
            <v-card-text class="text-center">
              인증 상태를 기다리는 중입니다.
            </v-card-text>
          </v-card>
        </v-layout>

      </v-container>
      <vue-progress-bar></vue-progress-bar>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    items: [
      {
        icon: 'mdi-alert',
        title: 'DashBoard',
        active: true,
        subItems: [
          {
            title: 'DashBoard',
            to: '/'
          },
          {
            title: 'About2',
            to: '/about2'
          },
          {
            title: 'Notes',
            to: '/Lectures/notes'
          }
        ]
      },
      {
        icon: 'mdi-alert-box',
        title: 'Lectures',
        active: false,
        subItems: [
          {
            title: 'card',
            to: '/lectures/card'
          },
          {
            title: 'layout',
            to: '/lectures/layout'
          }
        ]
      }
    ]
  }),
  methods: {
    async signOut () {
      // await this.$firebase.auth().signOut()

    }
  }
}
</script>
