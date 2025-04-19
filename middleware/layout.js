import { useAuthStore } from '~/composables/useAuth';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  
  // ตรวจสอบว่าได้มีการดึงข้อมูลผู้ใช้หรือยัง
  if (!authStore.initialized) {
    await authStore.initialize();
  }
  
  // หน้า login และ register ใช้ layout default เสมอ
  if (to.path === '/login' || to.path === '/register') {
    to.meta.layout = 'default';
    return;
  }
  
  // หน้าอื่นๆ ตรวจสอบการเข้าสู่ระบบ
  if (authStore.isAuthenticated) {
    to.meta.layout = 'main';
  } else {
    to.meta.layout = 'default';
  }
});