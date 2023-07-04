<script setup lang="ts"></script>

<template>
  <v-layout class="rounded rounded-md">
    <v-system-bar>
      <v-icon icon="mdi-wifi-strength-4"></v-icon>
      <v-icon icon="mdi-signal" class="ms-2"></v-icon>
      <v-icon icon="mdi-battery" class="ms-2"></v-icon>

      <span class="ms-2">3:13PM</span>
    </v-system-bar>
    <v-app-bar color="primary" :elevation="20" title="Drivers">
      <template v-slot:append>
        <v-btn variant="outlined" class="mr-2">EN</v-btn>
        <v-btn variant="outlined" class="mr-2">SP</v-btn>
      </template>
    </v-app-bar>

    <v-main class="d-flex">
      <router-view v-slot="{ Component, route }">
        <transition>
          <div class="w-100">
            <component :is="Component" :key="route.path" />
          </div>
        </transition>
      </router-view>
    </v-main>
  </v-layout>
</template>
