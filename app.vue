<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useAuthStore } from "~/composables/useAuth";

// โหลดข้อมูลผู้ใช้เมื่อแอปพลิเคชันเริ่มต้น
const authStore = useAuthStore();
// ดึงข้อมูลผู้ใช้เมื่อแอปเริ่มทำงาน
onMounted(async () => {
  await authStore.initialize();
});
</script>
