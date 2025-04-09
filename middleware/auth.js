import { useAuthStore } from '~/composables/useAuth';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  
  // ตรวจสอบว่ามีข้อมูลผู้ใช้แล้วหรือไม่
  if (!authStore.user) {
    // ถ้ายังไม่มี ลองดึงข้อมูลผู้ใช้
    const result = await authStore.fetchUser();
    
    // ถ้าดึงข้อมูลไม่สำเร็จ (ไม่มี token ใน cookie) ให้นำทางไปหน้า login
    if (!result.success) {
      return navigateTo('/login');
    }
  }
});