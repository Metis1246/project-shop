import { useAuthStore } from '~/composables/useAuth';

export default defineNuxtRouteMiddleware(async (to, from) => {
  // ข้ามการตรวจสอบสำหรับหน้า login/register
  if (to.path === '/login' || to.path === '/register') {
    return;
  }
  
  const authStore = useAuthStore();
  
  // ตรวจสอบว่าได้มีการดึงข้อมูลผู้ใช้หรือยัง
  if (!authStore.initialized) {
    await authStore.initialize();
  }
  
  // ถ้ายังไม่มีการยืนยันตัวตน ให้ไปที่หน้า login
  if (!authStore.isAuthenticated) {
    return navigateTo('/login');
  }
});