<template>
  <NuxtLayout :name="layoutName">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useAuthStore } from "~/composables/useAuth";

const authStore = useAuthStore();
const isLoading = ref(true);

const layoutName = computed(() => {
  return authStore.isAuthenticated ? "main" : "default";
});

onMounted(async () => {
  // เริ่มต้นด้วยการโหลดข้อมูลจาก localStorage
  authStore.initializeAuth();

  // จากนั้นพยายามดึงข้อมูลล่าสุดจาก API
  try {
    await authStore.fetchUser();
  } catch (error) {
    console.error("Error fetching user data:", error);
  } finally {
    isLoading.value = false;
  }
});
</script>
