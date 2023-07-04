<script setup lang="ts">
import logo from "@/assets/logo.png";
import { useTheme } from "vuetify";

const theme = useTheme();

const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");
</script>

<template>
  <div class="mt-10 px-5">
    <div class="d-flex justify-center">
      <div>
        <img :width="55" :src="logo" />
        <div class="pl-1"><strong>LOGO</strong></div>
      </div>
    </div>
    <nav class="mt-14 pointer">
      <v-list>
      
        <router-link to="/loads">
          <v-list-item class="mb-3" color="primary">
            <div class="d-flex">
              <v-icon size="small">mdi-file-sign</v-icon>
              <span class="ml-5">Loads</span>
            </div>
          </v-list-item>
        </router-link>
        <router-link to="/">
          <v-list-item class="mb-3">
            <div class="d-flex">
              <v-icon size="small">mdi-poll</v-icon>
              <span class="ml-5">Reports</span>
            </div>
          </v-list-item>
        </router-link>
        <router-link to="/drivers">
          <v-list-item class="mb-3">
            <div class="d-flex">
              <v-icon size="small">mdi-card-account-details-outline</v-icon>
              <span class="ml-5">Account</span>
            </div>
          </v-list-item>
        </router-link>
        <router-link to="/users">
          <v-list-item class="mb-3">
            <div class="d-flex">
              <v-icon size="small">mdi-account-multiple</v-icon>
              <span class="ml-5">Users</span>
            </div>
          </v-list-item>
        </router-link>
      </v-list>
    </nav>
    <footer class="footer">
      <div>
        <v-avatar size="small" color="red">
          <span class="text-h6">JD</span>
        </v-avatar>
        <span class="ml-2">John Doe</span>
      </div>
      <div class="pt-1">
        <v-icon
          size="small"
          @click="toggleTheme"
          v-show="theme.global.name.value === 'dark'"
          >mdi-weather-sunny</v-icon
        >
        <v-icon
          size="small"
          @click="toggleTheme"
          v-show="theme.global.name.value === 'light'"
          >mdi-weather-night</v-icon
        >
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  width: 85%;
}
</style>
