<script setup lang="ts">
import ActiveLoads from "@/components/loads/activeLoads.vue";
import AllLoads from "@/components/loads/AllLoads.vue";

const items = [
  {
    title: "All loads",
    disabled: false,
    href: "loads",
  },
];
</script>

<template>
  <div class="w-100">
    <header>
      <v-row>
        <v-col cols="4">
          <v-breadcrumbs :items="items">
            <template v-slot:title="{ item }">
              {{ item.title.toUpperCase() }}
            </template>
          </v-breadcrumbs>
          <v-text-field
            label="search"
            variant="outlined"
            density="compact"
            prepend-inner-icon="mdi-magnify"
            class="mt-1"
          ></v-text-field
        ></v-col>
        <v-col align="end">
          <v-btn append-icon="mdi-plus" variant="outlined">Add Load</v-btn>
        </v-col>
      </v-row>
    </header>
    <v-divider class="my-3"></v-divider>
    <h4>Active Loads</h4>
    <active-loads />
    <v-divider class="my-3"></v-divider>
    <h4>All Loads</h4>
    <all-loads />
  </div>
</template>
