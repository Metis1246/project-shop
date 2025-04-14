<template>
  <NuxtLayout :name="layoutName">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useAuthStore } from "~/composables/useAuth";

const authStore = useAuthStore();

// ใช้ computed property เพื่อกำหนด layout ตามสถานะการ login
const layoutName = computed(() => {
  return authStore.isAuthenticated ? "main" : "default";
});

// เมื่อโหลดหน้าเว็บครั้งแรก ตรวจสอบสถานะ login
onMounted(async () => {
  await authStore.fetchUser();
});
</script>
