<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-app-bar flat color="transparent">
       <v-toolbar-title>{{$store.state.user ? $store.state.user.displayName : '안녕하세요'}}</v-toolbar-title>
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
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="$store.state.user"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <router-link to='/' style="text-decoration: none; color: black;">
          안녕!
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.user" >
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
              >
                <v-avatar
                  color="grey lighten-4"
                  size="36"
                >
                  <img :src="$store.state.user.photoURL" alt="avatar">
                </v-avatar>
              </v-btn>
            </template>
            <v-card width="320">
              <v-container grid-list-md>
                <v-layout row wrap>
                  <v-flex xs4>
                    <v-avatar
                      color="grey lighten-4"
                      size="96"
                    >
                      <img :src="$store.state.user.photoURL" alt="avatar">
                    </v-avatar>
                  </v-flex>
                  <v-flex xs8>
                    <v-card-text>
                      <span class="font-weight-bold">{{ $store.state.user.displayName}}</span><br/>
                      {{ $store.state.user.email}}
                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signOut">로그아웃</v-btn>
              </v-card-actions>
            </v-card>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
    <v-divider></v-divider>
    <v-content>
      <v-container grid-list-md>
        <v-layout row wrap align-center justify-center>
          <v-card color="transparent" flat v-if="!$store.state.firebaseLoaded">
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
        icon: 'mdi-pencil',
        title: 'Blog',
        active: true,
        subItems: [
          {
            title: 'NOTES',
            to: '/notes'
          }
        ]
      },
      {
        icon: 'mdi-code-tags',
        title: 'Test',
        active: false,
        subItems: [
          {
            title: 'card',
            to: '/test/card'
          },
          {
            title: 'layout',
            to: '/test/layout'
          },
          {
            title: 'three.js',
            to: '/test/threejs'
          },
          {
            title: 'lv0',
            to: '/test/lv0'
          },
          {
            title: 'lv1',
            to: '/test/lv1'
          },
          {
            title: 'lv2',
            to: '/test/lv2'
          }
        ]
      }
    ]
  }),
  methods: {
    gotohome () {
      console.log(this)
      return {
        to: '/'
      }
    },
    async signOut () {
      this.$firebase.auth().signOut()
      this.$router.push('/sign')
    }
  }
}
</script>
