<script setup lang="ts">
import { useRouter } from "vue-router";

const loads = [
  {
    name: "Load 1",
    reference: 12434,
    driver: "John Doe",
    carrierInfo: "RSS-90",
    location: "location A",
    loadTime: 23,
    createdAt: "23-jun-2022 12:20:00",
    status: "Loading",
    id: 159,
    active: false,
  },
  {
    name: "Load 2",
    reference: 45342,
    driver: "Doe John",
    carrierInfo: "TRE-32",
    location: "location B",
    createdAt: "21-mar-2022 17:45:00",
    loadTime: 22,
    status: "Loading",
    id: 237,
    active: true,
  },
  {
    name: "Load 3",
    reference: 11290,
    driver: "John John",
    carrierInfo: "MNN-90",
    location: "location C",
    createdAt: "10-aug-2022 22:20:00",
    loadTime: 12,
    status: "Loaded",
    id: 262,
    active: false,
  },
];

const router = useRouter();
const navigateToLoad = (load) => {
  router.push({ path: `/loads/${load.id}` });
};
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Reference</th>
        <th class="text-left">Driver Info</th>
        <th class="text-left">Carrier Info</th>
        <th class="text-left">Load Location</th>
        <th class="text-left">Load Time</th>
        <th class="text-left">Created At</th>
        <th class="text-left">Status</th>
      </tr>
    </thead>
    <tbody class="pointer">
      <tr
        v-for="item in loads"
        :key="item.name"
        :class="item.active ? 'active' : ''"
        class="load-body"
        @click="navigateToLoad(item)"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.reference }}</td>
        <td>{{ item.driver }}</td>
        <td>{{ item.carrierInfo }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.loadTime }}</td>
        <td>{{ item.createdAt }}</td>
        <td>{{ item.status }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped>
.load-body:hover {
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: rgb(var(--v-theme-success));
  color: white;
}
</style>
