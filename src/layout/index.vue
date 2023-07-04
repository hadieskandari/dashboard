<script lang="ts" setup>
import MainMenu from "@/components/layout/mainMenu.vue";
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer class="nav-bar">
      <main-menu />
    </v-navigation-drawer>

    <v-main class="d-flex justify-center main-container">
      <router-view v-slot="{ Component, route }">
        <transition>
          <div class="w-100 px-12 py-8">
            <component :is="Component" :key="route.path" />
          </div>
        </transition>
      </router-view>
    </v-main>
  </v-layout>
</template>

<style>
.main-container {
  background-color: rgb(var(--v-theme-surface));
  height: 100vh;
}
.nav-bar {
  box-shadow: -8px 0px 25px 0px rgb(var(--v-theme-shadow)) !important;
}

.slide-x-enter-active,
.slide-x-leave-active {
  transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.5, 1), opacity 0.8s;
  opacity: 1;
}
</style>
