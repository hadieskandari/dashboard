<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const items = [
  {
    title: "All loads",
    disabled: false,
    href: "/loads",
  },
  {
    title: `load#${route.params.id}`,
    disabled: true,
  },
];

const value = ref<number>(75);
</script>

<template>
  <header>
    <v-row>
      <v-col
        ><v-icon class="pointer" @click="router.back()">mdi-arrow-left</v-icon>
        <v-breadcrumbs :items="items">
          <template v-slot:title="{ item }">
            {{ item.title.toUpperCase() }}
          </template>
        </v-breadcrumbs></v-col
      >
    </v-row>
  </header>
  <main class="border px-5 py-2">
    <v-row class="align-center">
      <v-col>Flags And Summary</v-col>
      <v-col align="end">
        <v-progress-circular
          :rotate="360"
          :size="50"
          :width="5"
          :model-value="value"
          color="teal"
        >
          {{ value }}
        </v-progress-circular></v-col
      >
    </v-row>
    <v-divider class="my-3"></v-divider>
    <v-row class="w-100 text-center px-5">
      <div class="px-12 border w-100 mt-4 mb-6">
        <h4 class="py-7">Carrier Data From FMRRA</h4>
      </div>
      <div class="w-100 px-1">
        <v-row class="text-left">
          <v-col><label>Carrier MC number : </label> <strong>98</strong></v-col>
          <v-col
            ><label>Load Date : </label>
            <strong>2023/12/08 12:24:00</strong></v-col
          >
          <v-col
            ><label>Estimated Load Time : </label>
            <strong>32 minutes</strong></v-col
          >
        </v-row>
        <v-row class="text-left">
          <v-col><label>Driver Name : </label> <strong>John Doe</strong></v-col>
          <v-col><label>Language : </label> <strong>English</strong></v-col>
          <v-col
            ><label>Load Location : </label> <strong>Location A</strong></v-col
          >
        </v-row>
        <v-row class="text-left">
          <v-col
            ><label>Driver Phone number : </label>
            <strong>+87 123 324 12</strong></v-col
          >
          <v-col><label>Load Number : </label> <strong>321</strong></v-col>
        </v-row>
        <div class="w-100 mt-4">
            <v-checkbox label="Provide after confirmation"></v-checkbox>
        </div>
      </div>
    </v-row>
  </main>
</template>
