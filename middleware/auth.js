import { useAuthStore } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  // หน้าที่ไม่จำเป็นต้องตรวจสอบการเข้าสู่ระบบ
  const publicPages = ["/login", "/register"];
  const isPublicPage = publicPages.includes(to.path);

  const authStore = useAuthStore();

  // ถ้าไปหน้าสาธารณะ ไม่จำเป็นต้องตรวจสอบ
  if (isPublicPage) {
    return;
  }

  try {
    // พยายามดึงข้อมูลผู้ใช้ทุกครั้งที่เปลี่ยนหน้า
    const result = await authStore.fetchUser();

    // ถ้าไม่มีการ authenticate จะได้ success: false
    if (!result.success) {
      return navigateTo("/login");
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return navigateTo("/login");
  }
});
